import React, { Component } from 'react';



class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
          <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
            <div class="leading-tight">Abhinav Dobhal</div>
            <div class="text-green-700 leading-tight">Laravel &amp; ReactJS React Native &amp; Graphql </div>
          </div>
          <div class="mt-8 sm:mt-0">
            <img alt="hero" src="/assets/developer.c0c83f9.721e2ae.svg" width="285" data-src="/assets/developer.c0c83f9.721e2ae.svg" data-srcset="/assets/static/developer.c0c83f9.721e2ae.svg 285w" data-sizes="(max-width: 285px) 100vw, 285px" class="mx-auto sm:mx-0 g-image g-image--lazy g-image--loaded" srcset="/assets/developer.c0c83f9.721e2ae.svg 285w" sizes="(max-width: 285px) 100vw, 285px" /><noscript>
              <img src="/assets/developer.c0c83f9.721e2ae.svg" class="mx-auto sm:mx-0 g-image g-image--loaded" width="285" alt="hero" /></noscript>
          </div>
        </div>
        <div class="container-inner mx-auto">
          <p class="text-lg sm:text-xl">
            I'm passionate about learning new things and solving problems using technology. I welcome challenges that bring out the genius in me.
          </p>
          <div class="flex justify-between items-center py-6">
            <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
              <img alt="browser" src="/assets/mind_map.4d6b624.552134e.svg" width="519" data-src="/assets/mind_map.4d6b624.552134e.svg" data-srcset="/assets/mind_map.82a2fbd.552134e.svg 480w, /assets/mind_map.4d6b624.552134e.svg 519w" data-sizes="(max-width: 519px) 100vw, 519px" class="g-image g-image--lazy g-image--loaded" srcset="/assets/static/mind_map.82a2fbd.552134e.svg 480w, /assets/mind_map.4d6b624.552134e.svg 519w" sizes="(max-width: 519px) 100vw, 519px" />
              <noscript>
                <img src="/assets/mind_map.4d6b624.552134e.svg" class="g-image g-image--loaded" width="519" alt="browser" /></noscript></div><div class="w-1/2 px-8 hidden sm:flex justify-end"><img alt="mobile" src="/assets/code_review.a3a5e43.fb0d488.svg" width="515" data-src="/assets/code_review.a3a5e43.fb0d488.svg" data-srcset="/assets/code_review.82a2fbd.fb0d488.svg 480w, /assets/code_review.a3a5e43.fb0d488.svg 515w" data-sizes="(max-width: 515px) 100vw, 515px" class="g-image g-image--lazy g-image--loaded" srcset="/assets/code_review.82a2fbd.fb0d488.svg 480w, /assets/code_review.a3a5e43.fb0d488.svg 515w" sizes="(max-width: 515px) 100vw, 515px" />
              <noscript>
                <img src="/assets/code_review.a3a5e43.fb0d488.svg" class="g-image g-image--loaded" width="515" alt="mobile" /></noscript>
            </div>
          </div>
        </div>
        <div class="overflow-x-hidden">
          <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
            <h2 id="projects" class="font-bold mb-6">Here are some projects I've worked on:</h2>
            <div class="absolute right-0" style={{ top: '50px', transform: 'translate(100%) rotate(180deg)' }} >
              <svg width="170px" height="170px"></svg></div>
            <ul class="text-lg sm:text-xl">
              <li class="checkmark mb-6">
                <div>e-hallpass</div>
                <div class="text-lg text-gray-600">The Online Digital Hall Pass Solution</div>
              </li>
              <li class="checkmark mb-6">
                <div>Flex Time Manager</div>
                <div class="text-lg text-gray-600">Supercharge Your Activity Periods</div>
              </li>
              <li class="checkmark mb-6">
                <div>voice-choicer</div>
                <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div></li>
              <li class="checkmark mb-6">
                <div>E-hallpassClass</div>
                <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="overflow-x-hidden border-gray-200 border-b">
          <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
            <h2 id="about" class="font-bold mb-6">Get to know me:</h2>
            <div class="absolute left-0" style={{ top: '50px', transform: 'translateX(-100%)' }}>
              <svg width="170px" height="170px"></svg>
            </div>
            <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
              <div>
                <img alt="avatar" src="/assets/abhi.png" width="390" class="w-32 h-32 rounded-full mb-8 lg:mb-0 g-image g-image--lazy g-image--loaded" />
              </div>
              <div class="flex-1 text-lg sm:text-xl ml-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
            </div><div class="responsive-container">
              Comming Soon
                  </div>
          </div>
        </div>
        <div className="contact-me container-inner mx-auto text-xl pb-4 mb-4">
          <h2 className="font-bold mb-6">Contact me:</h2><div className="text-lg sm:text-xl mb-16">
            If you’re looking to get in contact with me for  inquiries or if you have a question, feel free to <a href="mailto:abhinav.dobhal@gmail.com">email me</a>. I’ll try to respond as soon as I can.
        </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Landing;
