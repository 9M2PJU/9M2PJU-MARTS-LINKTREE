import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

const PWAInstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        // Check if already installed (standalone mode)
        const standalone = window.matchMedia('(display-mode: standalone)').matches
            || window.navigator.standalone === true;
        setIsStandalone(standalone);

        // Check if iOS
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        setIsIOS(iOS);

        // Check if user already dismissed
        const dismissed = localStorage.getItem('pwa-prompt-dismissed');

        if (standalone || dismissed) {
            return; // Already installed or dismissed
        }

        // For Android/Chrome - listen for beforeinstallprompt
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsVisible(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // For iOS - show after a delay since there's no event
        if (iOS && !standalone) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000); // Show after 3 seconds
            return () => {
                clearTimeout(timer);
                window.removeEventListener('beforeinstallprompt', handler);
            };
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (isIOS) {
            // Can't trigger install on iOS, just inform user
            alert('To install: tap the Share button (📤) and select "Add to Home Screen"');
            return;
        }

        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setIsVisible(false);
        }
    };

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('pwa-prompt-dismissed', 'true');
    };

    if (!isVisible || isStandalone) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 z-50 flex justify-center animate-slide-up">
            <div className="bg-marts-blue/95 backdrop-blur-xl border border-marts-yellow/30 rounded-2xl shadow-2xl p-4 w-full max-w-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 bg-marts-yellow/20 rounded-xl">
                        <Smartphone size={24} className="text-marts-yellow" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">
                            Install App
                        </h3>
                        <p className="text-blue-200 text-sm">
                            {isIOS ? 'Add to your home screen' : 'Quick access anytime'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleDismiss}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                        aria-label="Dismiss"
                    >
                        <X size={20} />
                    </button>
                    <button
                        onClick={handleInstallClick}
                        className="flex items-center gap-2 px-4 py-2 bg-marts-yellow text-marts-blue font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg"
                    >
                        <Download size={18} />
                        {isIOS ? 'How?' : 'Install'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PWAInstallPrompt;

