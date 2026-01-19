import LinkTree from './components/LinkTree';

function App() {
    return (
        <>
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-marts-blue/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-marts-yellow/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>
            <LinkTree />
        </>
    );
}

export default App;
