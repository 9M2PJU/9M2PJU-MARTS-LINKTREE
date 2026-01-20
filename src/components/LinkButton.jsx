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
                 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
                 transition-all duration-300 hover:scale-[1.02] hover:bg-marts-blue/20 hover:border-marts-yellow/50
                 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)]
                 overflow-hidden will-change-transform backface-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Glossy sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-marts-yellow/10 to-transparent 
                      translate-x-[-200%] group-hover:animate-sheen" />

            <div className="flex-shrink-0 p-2 bg-black/40 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-marts-blue/50">
                <Icon size={24} className="text-white group-hover:text-marts-yellow transition-colors" />
            </div>

            <div className="flex-grow text-left">
                <h3 className="font-semibold text-white group-hover:text-marts-yellow transition-colors">
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
