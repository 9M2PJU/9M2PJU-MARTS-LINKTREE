import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LINKS_FILE_PATH = path.join(__dirname, '../src/data/links.js');
const TARGET_URL = 'https://linktr.ee/marts.my';

async function syncLinks() {
    console.log(`Fetching links from ${TARGET_URL}...`);

    try {
        const response = await fetch(TARGET_URL);
        const html = await response.text();
        const $ = cheerio.load(html);

        const scrapedLinks = [];

        // Linktree usually uses <a> tags with specific classes or just all <a> tags in the main container
        // We'll grab all generic <a> tags that look like external links
        $('a').each((i, el) => {
            const url = $(el).attr('href');
            const title = $(el).text().trim();

            // Basic filtering to ensure it's a valid link and not internal Linktree nav
            if (url && url.startsWith('http') && title && !url.includes('linktr.ee/admin')) {
                // Remove Linktree trust/report links
                if (url.includes('linktr.ee/s/about') || url.includes('linktr.ee/privacy') || url.includes('linktr.ee/login')) return;

                scrapedLinks.push({ title, url });
            }
        });

        console.log(`Found ${scrapedLinks.length} links on remote.`);

        // Read existing file
        let fileContent = fs.readFileSync(LINKS_FILE_PATH, 'utf-8');

        // Extract existing URLs to avoid duplicates
        // This regex looks for url: "..." or url: '...'
        const existingUrlRegex = /url:\s*["']([^"']+)["']/g;
        let match;
        const existingUrls = new Set();

        while ((match = existingUrlRegex.exec(fileContent)) !== null) {
            existingUrls.add(match[1]);
        }

        console.log(`Found ${existingUrls.size} existing links in local file.`);

        const newLinks = scrapedLinks.filter(link => !existingUrls.has(link.url));

        if (newLinks.length === 0) {
            console.log('No new links to add.');
            return;
        }

        console.log(`Adding ${newLinks.length} new links...`);

        // Generate string for new links
        const newLinksString = newLinks.map(link => `    {
        title: "${link.title.replace(/"/g, '\\"')}",
        url: "${link.url}",
        icon: Globe // Auto-added by sync script
    },`).join('\n');

        // Insert new links before the end of the links array
        // We look for the closing ]; of the export const links = [ ... ];
        // Assuming the file ends with the links array based on known structure
        const linksArrayEndIndex = fileContent.lastIndexOf('];');

        if (linksArrayEndIndex === -1) {
            console.error('Could not find the end of the links array in the file.');
            process.exit(1);
        }

        const updatedContent = fileContent.slice(0, linksArrayEndIndex) +
            newLinksString + '\n' +
            fileContent.slice(linksArrayEndIndex);

        fs.writeFileSync(LINKS_FILE_PATH, updatedContent, 'utf-8');
        console.log('Successfully updated links.js');

    } catch (error) {
        console.error('Error syncing links:', error);
        process.exit(1);
    }
}

syncLinks();
