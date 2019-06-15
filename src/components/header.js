import React from 'react';


const Header = () => (
  
  <header class="border-t-14 border-green-700">
    <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
      <div>
        <a href="/" class="active--exact active"><img alt="logo" src="/assets/logo.cbab2cf.c5824a8.svg" width="1234" data-src="/assets/logo.cbab2cf.c5824a8.svg" data-srcset="/assets/logo.82a2fbd.c5824a8.svg 480w, /assets/logo.cbab2cf.c5824a8.svg 1024w" data-sizes="(max-width: 1234px) 100vw, 1234px" class="w-40 g-image g-image--lazy g-image--loaded" srcset="/assets/logo.82a2fbd.c5824a8.svg 480w, /assets/logo.cbab2cf.c5824a8.svg 1024w" sizes="(max-width: 1234px) 100vw, 1234px" />
        <noscript>
          <img src="/assets/logo.cbab2cf.c5824a8.svg" class="w-40 g-image g-image--loaded" width="1234" alt="logo" />
          </noscript>
          </a>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="current-color h-3 w-3"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray"></path></svg></button>
            </div>
            <ul class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0 hidden">
              <li class="mr-8 mb-6 lg:mb-0">
                          <a href="/projects" class="text-copy-primary hover:text-gray-600">Projects</a></li>
                        <li class="mr-8 mb-6 lg:mb-0"><a href="/about" class="text-copy-primary hover:text-gray-600">About</a></li>
                        <li class="mr-8 mb-6 lg:mb-0"><a href="/contact" class="text-copy-primary hover:text-gray-600">Contact</a></li>
                               
                         </ul></nav></header>
  
)

export default Header;
