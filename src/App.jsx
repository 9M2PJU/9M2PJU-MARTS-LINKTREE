import LinkTree from './components/LinkTree';

    return (
        <>
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-marts-blue/30 rounded-full blur-[60px] md:blur-[100px] animate-pulse will-change-transform translate-z-0"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-marts-yellow/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse delay-1000 will-change-transform translate-z-0"></div>
            </div>
            <LinkTree />
        </>
    );
}

export default App;
