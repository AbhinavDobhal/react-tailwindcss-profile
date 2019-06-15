import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div class="overflow-x-hidden">
     <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 id="projects" class="font-bold mb-6">Here are some projects I've worked on:</h2>
        <div class="absolute right-0" style={{top: '50px', transform: 'translate(100%) rotate(180deg)'}} >
          <svg width="170px" height="170px"></svg></div>
          <ul class="text-lg sm:text-xl">
            <li class="checkmark mb-6">
              <div>Project One</div>
            <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
            </li>
            <li class="checkmark mb-6">
              <div>Project Two</div>
              <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
            </li>
              <li class="checkmark mb-6">
                <div>Project Three</div>
                <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div></li>
                <li class="checkmark mb-6">
                  <div>Project Four</div>
                  <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
                  </li>
                  </ul>
           </div>
           </div>
    )
  }
}


export default Projects;
