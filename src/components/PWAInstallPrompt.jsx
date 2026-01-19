import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const PWAInstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsVisible(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setIsVisible(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 z-50 flex justify-center animate-slide-up">
            <div className="bg-marts-blue/95 backdrop-blur-xl border border-marts-yellow/30 rounded-2xl shadow-2xl p-4 w-full max-w-sm flex items-center justify-between gap-4">
                <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">
                        Install MARTS Directory
                    </h3>
                    <p className="text-blue-200 text-sm">
                        Add to home screen for quick access
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                    <button
                        onClick={handleInstallClick}
                        className="flex items-center gap-2 px-4 py-2 bg-marts-yellow text-marts-blue font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg"
                    >
                        <Download size={18} />
                        Install
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PWAInstallPrompt;
