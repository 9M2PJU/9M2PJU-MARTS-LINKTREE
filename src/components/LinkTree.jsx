import React, { useEffect, useState } from 'react';
import { profile, links, socials } from '../data/links';
import LinkButton from './LinkButton';

const LinkTree = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className={`w-full max-w-2xl mx-auto px-4 py-12 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>

            {/* Profile Section */}
            <div className="flex flex-col items-center mb-10 text-center space-y-4">
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    {/* Logo Placeholder - using text/icon if image fails but configured to use image */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-black/40 flex items-center justify-center">
                        {/* Fallback to text if no image, but we have a URL in data */}
                        <img
                            src={profile.image}
                            alt={profile.name}
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.parentNode.innerText = profile.name;
                            }}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100 tracking-tight pb-1">
                        {profile.name}
                    </h1>
                    <p className="text-blue-100/80 font-medium max-w-sm mx-auto leading-relaxed">
                        {profile.description}
                    </p>
                    <p className="text-marts-yellow font-semibold tracking-wide text-sm">
                        {profile.tagline}
                    </p>
                </div>

                {/* Social Icons Row */}
                <div className="flex space-x-4 mt-4">
                    {socials.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10"
                        >
                            <social.icon size={20} className="text-white" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Links Section */}
            <div className="space-y-4 mt-8 pb-20">
                {links.map((link, idx) => (
                    <LinkButton key={idx} link={link} index={idx} />
                ))}
            </div>

            {/* Footer */}
            <footer className="text-center text-white/50 text-sm py-6">
                <p className="flex items-center justify-center gap-2">
                    Made for
                    <img src="/marts-logo.png" alt="MARTS" className="w-5 h-5 inline-block" />
                    by <a href="https://hamradio.my" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">9M2PJU</a>
                </p>
            </footer>
        </div>
    );
};

export default LinkTree;
