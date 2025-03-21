import React from 'react'

const NavbarComponent = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-4 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold">
                Star Wars
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-6">
                <li><a href="/" className=" hover:font-bold">Characters</a></li>
                <li><a href="/species" className=" hover:font-bold">Species</a></li>
                <li><a href="#" className=" hover:font-bold">Planets</a></li>
                <li><a href="#" className=" hover:font-bold">Starships</a></li>
            </ul>
        </div>
    </nav>

  )
}

export default NavbarComponent