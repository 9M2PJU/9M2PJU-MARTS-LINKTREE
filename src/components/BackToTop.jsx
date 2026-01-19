import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 p-3 bg-marts-blue/80 backdrop-blur-md border border-marts-yellow/30 text-white rounded-full shadow-lg hover:bg-marts-blue hover:scale-110 transition-all duration-300 z-50 group"
            aria-label="Back to Top"
        >
            <ArrowUp size={24} className="group-hover:text-marts-yellow transition-colors" />
        </button>
    );
};

export default BackToTop;
