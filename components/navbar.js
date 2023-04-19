const NavBar = () => {
    return <>
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white font-bold text-2xl mr-auto ">Portfolio</a>
                <ul className="flex">
                    <li><a href="#" className="text-gray-400 hover:text-white px-4">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white px-4">Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white px-4">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white px-4">Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
}
export default NavBar;