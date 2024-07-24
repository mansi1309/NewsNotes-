// import React from 'react';
// // import { NavLink } from 'react-router-dom';

// export const About = () => {
//   return (
//     <>
//       {/* <!-- About 1 - Bootstrap Brain Component --> */}
// <section class="py-3 py-md-5">
//   <div class="container">
//     <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
//       <div class="col-12 col-lg-6 col-xl-5">
//         <img class="img-fluid rounded img-full-height" loading="lazy" src="./images/about.jpg" alt="About 1"/>
//       </div>
//       <div class="col-12 col-lg-6 col-xl-7">
//         <div class="row justify-content-xl-center">
//           <div class="col-12 col-xl-11">
//             <h2 class="mb-3 mt-5">Who Are We?</h2>
//             {/* <p class="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p> */}
//             <p class="lead fs-4">Our Commitment to Keeping You Informed</p>
//             <p class=" text-secondary mb-3">At NewsNotes, we are dedicated to keeping you informed about the latest news and events from around the world. We strive to provide accurate, unbiased, and comprehensive coverage of current affairs, ensuring that you stay up to date with what's happening locally, nationally, and globally.</p> 

//             <p class="lead fs-4">Reliable and Comprehensive News Coverage</p>
//             <p class="text-secondary mb-3"> Our team of experienced journalists and editors work tirelessly to gather and deliver news stories that matter. We believe in the power of journalism to shape public opinion, promote transparency, and foster informed conversations. Whether it's breaking news, politics, business, technology, entertainment, sports, or any other topic, we aim to provide a diverse range of perspectives to give you a well-rounded understanding of the issues at hand.</p> 

//             <p class="lead fs-4"> The Power of Journalism in Shaping Opinion</p>
//             <p class="text-secondary mb-3"> At NewsNotes, we value integrity, professionalism, and the highest journalistic standards. We are committed to presenting news in a fair and balanced manner, adhering to ethical guidelines and fact-checking processes to ensure the accuracy and reliability of our content. Our goal is to empower you with knowledge and enable you to make informed decisions in an ever-changing world.</p> 

//             {/* <p class="lead fs-4">Diverse Perspectives for a Well-Rounded Understanding</p>
//             <p class="text-secondary mb-3">In addition to delivering news, we also strive to engage and connect with our readers. We encourage active participation through comments, feedback, and sharing of our articles on social media platforms. We believe in the power of dialogue and believe that everyone's voice deserves to be heard.</p>  */}

//             <p class="lead fs-4">Thank You for Choosing NewsNotes </p>
//             <p class="text-secondary mb-3">Thank you for visiting NewsNotes. We hope that you find our website informative, engaging, and a valuable resource for staying informed. Together, let's explore the world of news and discover the stories that shape our lives.</p> 


//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </>
//   );
// };

// export default About;

import React from 'react';

export const About = () => {
  return (
    <>
      {/* <!-- About 1 - Bootstrap Brain Component --> */}
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="image-container d-flex align-items-center justify-content-center h-100">
                <img
                  className="img-fluid rounded"
                  loading="lazy"
                  src="./images/about.jpg"
                  alt="About 1"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3 mt-5">Who Are We?</h2>
                  <p className="lead fs-4">Our Commitment to Keeping You Informed</p>
                  <p className="text-secondary mb-3">
                    At NewsNotes, we are dedicated to keeping you informed about the
                    latest news and events from around the world...
                  </p>

                  {/* Other paragraphs omitted for brevity */}

                  <p class="lead fs-4">Reliable and Comprehensive News Coverage</p>
             <p class="text-secondary mb-3"> Our team of experienced journalists and editors work tirelessly to gather and deliver news stories that matter. We believe in the power of journalism to shape public opinion, promote transparency, and foster informed conversations. </p> 

             <p className="lead fs-4">Make Your Own Notes</p>
                  <p className="text-secondary mb-3">
                    You can make yours own notes, save it and also delete.
                  </p>

                  <p className="lead fs-4">Thank You for Choosing NewsNotes</p>
                  <p className="text-secondary mb-3">
                    Thank you for visiting NewsNotes. We hope that you find our website
                    informative, engaging, and a valuable resource for staying informed.
                    Together, let's explore the world of news and discover the stories
                    that shape our lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        
      </section>

      {/* <!-- Foooter --> */}
<section>
    
        <div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            NewsNotes 2024 © by Mansi. All rights reserved.
        </p>
    </div>
</section>
    </>
  );
};

export default About;


