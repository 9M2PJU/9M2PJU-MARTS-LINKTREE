import React from 'react';
import { ExternalLink } from 'lucide-react';

const LinkButton = ({ link, index }) => {
    const Icon = link.icon || ExternalLink;

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center w-full p-4 mb-3 
                 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl
                 transition-all duration-300 hover:scale-[1.02] hover:bg-white/20
                 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Glossy sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      translate-x-[-200%] group-hover:animate-sheen" />

            <div className="flex-shrink-0 p-2 bg-black/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} className="text-white" />
            </div>

            <div className="flex-grow text-left">
                <h3 className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {link.title}
                </h3>
                {link.description && (
                    <p className="text-xs text-blue-100/70 mt-0.5 font-light">
                        {link.description}
                    </p>
                )}
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ExternalLink size={16} className="text-white/50" />
            </div>
        </a>
    );
};

export default LinkButton;
