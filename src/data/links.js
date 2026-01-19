import {
    Instagram,
    Facebook,
    Linkedin,
    Globe,
    MessageCircle,
    Mail,
    Radio,
    BookOpen,
    FileText,
    Users,
    Search,
    Video,
    Database
} from 'lucide-react';
import martsLogo from '../assets/marts-logo.png';

// import videoIcon ... (not used, removing clutter)

export const profile = {
    name: "MARTS Directory",
    description: "National Amateur Radio Society of Malaysia",
    tagline: "Connect • Communicate • Serve",
    image: martsLogo,
};

export const socials = [
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61561482712448", label: "Facebook Page" },
    { icon: Facebook, url: "https://www.facebook.com/groups/MARTS.MALAYSIA", label: "Facebook Group" },
    { icon: Instagram, url: "https://www.instagram.com/marts.my/", label: "Instagram" },
    { icon: Video, url: "https://www.tiktok.com/@marts.malaysia.25", label: "TikTok" }, // Lucide doesn't have TikTok, using Video as placeholder or will use SVG custom
];

export const links = [
    {
        title: "Panduan Lesen Radio Amatur Malaysia (MCMC)",
        url: "https://getlicensed.tiiny.site",
        icon: BookOpen,
        description: "Guide to obtaining an Amateur Radio License"
    },
    {
        title: "Ask me, MARTS AI Chatbot",
        url: "https://gemini.google.com/gem/1jspyiOPZ1mh-RPOcW0OH9X-rsWMPpMcO?usp=sharing",
        icon: MessageCircle,
        featured: true
    },
    {
        title: "MARTS Website",
        url: "https://marts.org.my/ver2/",
        icon: Globe
    },
    {
        title: "MARTS Membership Portal",
        url: "https://ahli.marts.org.my/",
        icon: Users
    },
    {
        title: "MARTS Membership Renewal",
        url: "https://renew.marts.org.my",
        icon: Users
    },
    {
        title: "Register New Membership",
        url: "https://register.marts.org.my/",
        icon: Users
    },
    {
        title: "Update Member Details",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeLdNCOb7h1YPemJEZeKUb2djNv3vza7sXy4xyo1shHM2t5fg/viewform",
        icon: FileText
    },
    {
        title: "MY-Callbook Directory",
        url: "https://callbook.hamradio.my",
        icon: Search
    },
    {
        title: "Check Callsign Availability",
        url: "https://xlx.lucifernet.com/dashboard/pgs/checkcallsign.php",
        icon: Search
    },
    {
        title: "Repeater List (West Malaysia)",
        url: "https://marts.org.my/ver2/repeaters/west-malaysia/",
        icon: Radio
    },
    {
        title: "MARTS HF WebSDR",
        url: "http://eshail.marts.org.my:8072/",
        icon: Radio
    },
    {
        title: "WhatsApp to MARTS",
        url: "http://marts.wasap.my",
        icon: MessageCircle
    },
    {
        title: "Email Secretary",
        url: "mailto:secretary@marts.org.my",
        icon: Mail
    },
    {
        title: "MDECC Facebook",
        url: "https://www.facebook.com/mdecc_marts",
        icon: Facebook
    },
    {
        title: "MDECC Linktree",
        url: "http://linktr.ee/mdecc",
        icon: Globe
    },
    {
        title: "MCMC AA Holder Registers",
        url: "https://www.mcmc.gov.my/en/legal/registers/register-of-apparatus-assignments-search?type=AARadio",
        icon: Database
    },
    {
        title: "MCMC Amateur Radio Info",
        url: "https://www.mcmc.gov.my/en/amateur-radio-operator-certification",
        icon: BookOpen
    },
    {
        title: "MCMC Exam Schedule",
        url: "https://sems.mcmc.gov.my/sems/contents/examschedule",
        icon: FileText
    },
    {
        title: "MCMC eSPECTRA Guide",
        url: "https://drive.google.com/drive/folders/1lBHoKa_K2PNBN9yT6az0khHCzmNgq4C9?usp=drive_link",
        icon: FileText
    },
    {
        title: "General Spectrum FAQ",
        url: "https://mcmc.gov.my/en/spectrum/faq/spectrum-use/general",
        icon: BookOpen
    },
    {
        title: "Malaysia Band Plan (2017)",
        url: "https://www.mcmc.gov.my/skmmgovmy/media/General/pdf/Spectrum-Plan-2017i.pdf",
        icon: FileText
    },
    {
        title: "MARTS Official TikTok",
        url: "https://www.tiktok.com/@marts.malaysia.25?_t=zs-8xdd9ptzdh0&_r=1",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@vnessali",
        url: "https://linktr.ee/vnessali",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@willbousa",
        url: "https://linktr.ee/willbousa",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@psacard",
        url: "https://linktr.ee/psacard",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@luxewickcc",
        url: "https://linktr.ee/luxewickcc",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@oliviawarland",
        url: "https://linktr.ee/oliviawarland",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@Luh_Lik",
        url: "https://linktr.ee/Luh_Lik",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@hotchailady",
        url: "https://linktr.ee/hotchailady",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@DIYNAILBESTIE",
        url: "https://linktr.ee/DIYNAILBESTIE",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@joeybreauxofficial",
        url: "https://linktr.ee/joeybreauxofficial",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@chickfilapsl",
        url: "https://linktr.ee/chickfilapsl",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@dreithedad",
        url: "https://linktr.ee/dreithedad",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@youngmindsfuture",
        url: "https://linktr.ee/youngmindsfuture",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@ModernInventorllc",
        url: "https://linktr.ee/ModernInventorllc",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@thejadalaurynexperience",
        url: "https://linktr.ee/thejadalaurynexperience",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@daintyartistryembroidery",
        url: "https://linktr.ee/daintyartistryembroidery",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@richgunderlock",
        url: "https://linktr.ee/richgunderlock",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@HelloGorgeousMama",
        url: "https://linktr.ee/HelloGorgeousMama",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@woconsultancy",
        url: "https://linktr.ee/woconsultancy",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@Itsheavenleah",
        url: "https://linktr.ee/Itsheavenleah",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@Djjoshstylez",
        url: "https://linktr.ee/Djjoshstylez",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@accardo_realestate",
        url: "https://linktr.ee/accardo_realestate",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@karinavasilkov",
        url: "https://linktr.ee/karinavasilkov",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@iBetelDale5aJesus",
        url: "https://linktr.ee/iBetelDale5aJesus",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@hazes",
        url: "https://linktr.ee/hazes",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@jeannebaret",
        url: "https://linktr.ee/jeannebaret",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@lolanlauvao",
        url: "https://linktr.ee/lolanlauvao",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@Jccoleman_888",
        url: "https://linktr.ee/Jccoleman_888",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@tierney.staut",
        url: "https://linktr.ee/tierney.staut",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@cnehembyhomes",
        url: "https://linktr.ee/cnehembyhomes",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@KT.com",
        url: "https://linktr.ee/KT.com",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@wearerockpoint",
        url: "https://linktr.ee/wearerockpoint",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@cfandubai",
        url: "https://linktr.ee/cfandubai",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@arize.official_",
        url: "https://linktr.ee/arize.official_",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@motheroffact",
        url: "https://linktr.ee/motheroffact",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@livscreativelegacy",
        url: "https://linktr.ee/livscreativelegacy",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@deidregrayrealtor",
        url: "https://linktr.ee/deidregrayrealtor",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@biologicalbeats",
        url: "https://linktr.ee/biologicalbeats",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@jenaesingh",
        url: "https://linktr.ee/jenaesingh",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@babebasics",
        url: "https://linktr.ee/babebasics",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@LucaBoone",
        url: "https://linktr.ee/LucaBoone",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@Alexanderowens67",
        url: "https://linktr.ee/Alexanderowens67",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@NACHTRUIS",
        url: "https://linktr.ee/NACHTRUIS",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@shopaligrace",
        url: "https://linktr.ee/shopaligrace",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@grise.nyc",
        url: "https://linktr.ee/grise.nyc",
        icon: Globe // Auto-added by sync script
    },
    {
        title: "@2013aaaOhioBlueJackets",
        url: "https://linktr.ee/2013aaaOhioBlueJackets",
        icon: Globe // Auto-added by sync script
    },
];
