import React from 'react';


const Header = () => (
  
  <header className="border-t-14 border-green-700">
        <nav className="container mx-auto flex flex-wrap justify-between items-center py-8">
          <div>
            <a href="/" className="active--exact active">
              <img alt="Abhinav Dobhal" src="/assets/logo.png"   className="w-40 g-image g-image--lazy g-image--loaded"  />
             
            </a>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="current-color h-3 w-3"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg></button>
          </div>
          <ul className="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0 hidden">
            <li className="mr-8 mb-6 lg:mb-0">
              <a href="/#projects" className="text-copy-primary hover:text-gray-600">Projects</a></li>
            <li className="mr-8 mb-6 lg:mb-0"><a href="/#about" className="text-copy-primary hover:text-gray-600">About</a></li>
            <li className="mr-8 mb-6 lg:mb-0"><a href="/#contact" className="text-copy-primary hover:text-gray-600">Contact</a></li>
          </ul></nav></header>
  
)

export default Header;
