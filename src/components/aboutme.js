import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div class="overflow-x-hidden border-gray-200 border-b">
        <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
          <h2 id="about" class="font-bold mb-6">Get to know me:</h2>
          <div class="absolute left-0" style={{top: '50px', transform: 'translateX(-100%)'}}>
            <svg width="170px" height="170px"></svg>
            </div>
            <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
              <div>
              <img alt="avatar" src="/assets/static/avatar.59be806.c62b62f.jpg" width="390" data-src="/assets/static/avatar.59be806.c62b62f.jpg" data-srcset="/assets/static/avatar.59be806.c62b62f.jpg 390w" data-sizes="(max-width: 390px) 100vw, 390px" class="w-32 h-32 rounded-full mb-8 lg:mb-0 g-image g-image--lazy g-image--loaded" srcset="/assets/static/avatar.59be806.c62b62f.jpg 390w" sizes="(max-width: 390px) 100vw, 390px" /><noscript>
                <img src="/assets/static/avatar.59be806.c62b62f.jpg" class="w-32 h-32 rounded-full mb-8 lg:mb-0 g-image g-image--loaded" width="390" alt="avatar" /> </noscript>
                </div>
                <div class="flex-1 text-lg sm:text-xl ml-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
                </div><div class="responsive-container">
                  <iframe src="https://www.youtube.com/embed/uHo6o1TNQeE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="responsive-iframe w-full h-full top-0 left-0 border-0" >
                    </iframe>
                </div>
      </div>
      </div>
    )
  }
}

export default About;
