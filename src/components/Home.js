// import React from 'react';

// // Functional component representing the News section
// const Home = () => {
//     return (
//         <>
//             {/* Title Section */}
//             <section className="colored-section" id="title">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <h1 className="big-heading">
//                                 Newnotes
//                             </h1>
//                             <h2> 
//                                 Trending News, Health <br />
//                                 Technology, Entertainment <br />
//                                 Business, Science & Sports News <br />
//                                 Weather Forecast and Notes Taking Site
//                             </h2>
//                         </div>
//                         <div className="col-lg-6">
//                             <img className="title-image" src="iphone6.png" alt="iphone-mockup" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="white-section" id="features">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="feature-box col-lg-4">
//                             <i className="icon fas fa-newspaper fa-4x"></i>
//                             <h3 className="feature-title">24/7 updates</h3>
//                             <p>The latest news is available, unlike getting just daily updates.</p>
//                         </div>
//                         <div className="feature-box col-lg-4">
//                             <i className="icon fas fa-sticky-note fa-4x"></i>
//                             <h3 className="feature-title">Notes Taking</h3>
//                             <p>Use our free notes features and save your time and money</p>
//                         </div>
//                         <div className="feature-box col-lg-4">
//                             <i className="icon fas fa-cloud fa-4x"></i>
//                             <h3 className="feature-title">Weather forecast</h3>
//                             <p>Find the weather forecast of your city within seconds.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Call to Action Section */}
//             <section className="colored-section" id="cta">
//                 <div className="container-fluid">
//                     <center>
//                         <h2>Trending News</h2>
//                     </center>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="white-section" id="footer">
//                 <div className="container-fluid">
//                     <center>
//                         <i className="social-icon fab fa-facebook-f"></i>
//                         <i className="social-icon fab fa-twitter"></i>
//                         <i className="social-icon fab fa-instagram"></i>
//                         <i className="social-icon fas fa-envelope"></i>
//                         <p>© Copyright 2021 Newnotes</p>
//                     </center>
//                 </div>
//             </footer>
//         </>
//     );
// };

// export default Home;

// components/Home.js
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        // Create elements
        const header = document.createElement('div');
        header.className = 'header';
        header.textContent = 'Infinite Carousel';

        const gallery = document.createElement('div');
        gallery.className = 'gallery';

        // Define slides
        const slides = [
            { src: './images/newsimg1.jpg', alt: 'newsimg1', title: 'Breaking News: Stay Updated with the Latest Headlines', description: 'Get the most recent and urgent news stories as they happen, ensuring youre always in the know.' },
            { src: './images/newsimg2.jpg', alt: 'newsimg2', title: 'Trending Now: Whats Buzzing in the World Today', description: 'See what’s currently popular and widely discussed across various topics and regions.' },
            { src: './images/newsimg3.webp', alt: 'newsimg3', title: 'In-Depth Analysis: Understand the Stories Behind the Headlines', description: 'Dive deep into detailed analysis and insights that reveal the complexities behind major news stories.' },
            { src: './images/newsimg4.webp', alt: 'newsimg4', title: 'Live Updates: Real-Time Coverage of Ongoing Events', description: 'Follow live, real-time updates on developing stories and events as they unfold.' },
            { src: './images/newsimg5.webp', alt: 'newsimg5', title: 'Global News: Updates from Around the World', description: 'Get comprehensive coverage of international news, bringing you stories from across the globe.' },
            { src: './images/newsimg6.jpg', alt: 'newsimg6', title: 'Category Headings', description: 'Follow the latest sports news, scores, game highlights, and expert analysis.' },
            { src: './images/newsimg8.webp', alt: 'newsimg8', title: 'Make Notes', description: 'You can make your own notes in this website.You can save it and also delete it.' }

        ];

        // Create and append slide elements
        slides.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            const img = document.createElement('img');
            img.src = slide.src;
            img.alt = slide.alt;
            const textOverlay = document.createElement('div');
            textOverlay.className = 'text-overlay';
            const h1 = document.createElement('h1');
            h1.textContent = slide.title;
            const p = document.createElement('p');
            p.textContent = slide.description;

            textOverlay.appendChild(h1);
            textOverlay.appendChild(p);
            slideDiv.appendChild(img);
            slideDiv.appendChild(textOverlay);

            slideDiv.style.animationDelay = `calc(-${0.2 * index} * var(--d))`;

            gallery.appendChild(slideDiv);
        });

        // Append to the body
        document.body.appendChild(header);
        document.body.appendChild(gallery);

        // Apply CSS
        const style = document.createElement('style');
        style.textContent = `
            body {
                margin: 0;
                min-height: 100vh;
                display: grid;
                place-content: center;
                background: #ECD078;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
            .header {
                text-align: center;
                font-weight: bold;
                font-size: 35px;
                color: white;
                position: absolute;
                top: 10px;
                width: 100%;
                z-index: 1000;
            }
            .gallery {
                --d: 30s;
                display: grid;
                overflow: hidden;
                height: 100vh;
                width: 100vw;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
            }
            .gallery > div {
                grid-area: 1/1;
                height: 100%;
                width: 100%;
                position: relative;
                animation: r var(--d) linear infinite;
            }
            .gallery img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                filter: brightness(50%);
            }
            .text-overlay {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                text-align: center;
            }
            .text-overlay h1 {
                font-size: 3rem;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            }
            .text-overlay p {
                font-size: 1.5rem;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            }
            @keyframes r {
                80% {
                    transform: translateX(-400%);
                }
                80.01% {
                    transform: translateX(100%);
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.body.removeChild(header);
            document.body.removeChild(gallery);
            document.head.removeChild(style);
        };
    }, []);

    return null;
}
