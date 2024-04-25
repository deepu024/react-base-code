
function NavBar() {
    return (
        <nav className="p-3 bg-slate-300 flex justify-between items-center px-20">
            <div className="h-20 w-20">
                <img src="test.svg" alt="" />
            </div>
            <div className="flex gap-3">
                <p>HOME</p>
                <p>ABOUT</p>
                <p>CONTACT</p>
                <p>TESTING</p>
                <p>RESUME</p>
            </div>
        </nav>
    );
}

export default NavBar;