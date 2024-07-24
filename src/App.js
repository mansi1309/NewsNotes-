// import {React, useState} from 'react'
// import process from 'process';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
// import Navbar from "./components/Navbar.js"
// import About from './components/About.js';
// import Home from './components/Home.js';
// import Notes from './components/Notes.js';
// import News from './components/News.js'

// export default function App() {
//   let [progress, setProgress] = useState(0) 
//   // const [apiKey] = useState(process.env.REACT_APP_API_KEY)
//   const [apiKey] = useState(process.env.REACT_APP_NEWS_API);
//   let [refreshThemeElements, setRefreshThemeElements] = useState(1)


//     return (
//       <BrowserRouter>
//       <Navbar progress={progress} refreshThemeElements = {refreshThemeElements}/>
//       <LoadingBar
//         color='#f11946'
//         progress={progress}
//         height={3}
//       />
//       <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route exact path="/about" element={<About />} />
//         <Route exact path='/general' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="general" category="general"/></>}/>
//         {/* <Route exact path='/about' element={<><About setProgress={setProgress} key="about"/></>}/> */}
       
//         <Route exact path='/business' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="business" category="business"/></>}/>
//         <Route exact path='/entertainment' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="entertainment" category="entertainment"/></>}/>
//         <Route exact path='/health' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="health" category="Health"/></>}/>
//         <Route exact path='/science' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="science" category="Science"/></>}/>
//         <Route exact path='/sports' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="sports" category="Sports"/></>}/>
//         <Route exact path='/technology' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="technology" category="Technology"/></>}/>
//         <Route exact path='/weather' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="weather" category="Weather"/></>}/>

//         <Route exact path="/notes" element={<Notes />} />
//       </Routes>
//       </BrowserRouter>
//     )
// }


// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';
// import Navbar from "./components/Navbar.js";
// import About from './components/About.js';
// import Home from './components/Home.js';
// import Notes from './components/Notes.js';
// import News from './components/News.js';
// import Search from './components/Search.js';

// export default function App() {
//     let [progress, setProgress] = useState(0);
//     const [apiKey] = useState(process.env.REACT_APP_NEWS_API);
//     let [refreshThemeElements, setRefreshThemeElements] = useState(1);

//     return (
//         <BrowserRouter>
//             <Navbar progress={progress} refreshThemeElements={refreshThemeElements} />
//             <LoadingBar
//                 color='#f11946'
//                 progress={progress}
//                 height={3}
//             />
//             <Routes>
//                 <Route exact path="/" element={<Home />} />
//                 <Route exact path="/about" element={<About />} />
//                 <Route exact path="/general" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="general" category="general" />} />
//                 <Route exact path="/business" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="business" category="business" />} />
//                 <Route exact path="/entertainment" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="entertainment" category="entertainment" />} />
//                 <Route exact path="/health" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="health" category="health" />} />
//                 <Route exact path="/science" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="science" category="science" />} />
//                 <Route exact path="/sports" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="sports" category="sports" />} />
//                 <Route exact path="/technology" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="technology" category="technology" />} />
//                 <Route exact path="/weather" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="weather" category="weather" />} />
//                 <Route exact path="/notes" element={<Notes />} />
//                 <Route exact path="/search" element={<Search apiKey={apiKey} setProgress={setProgress} />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Notes from './components/Notes';
import News from './components/News';
import Search from './components/Search';

export default function App() {
    const [progress, setProgress] = useState(0);
    const [apiKey] = useState(process.env.REACT_APP_NEWS_API);
    const [refreshThemeElements, setRefreshThemeElements] = useState(1);

    return (
        <BrowserRouter>
            <Navbar progress={progress} refreshThemeElements={refreshThemeElements} />
            <LoadingBar color='#f11946' progress={progress} height={3} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/general" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="general" category="general" />} />
                <Route exact path="/business" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="business" category="business" />} />
                <Route exact path="/entertainment" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="entertainment" category="entertainment" />} />
                <Route exact path="/health" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="health" category="health" />} />
                <Route exact path="/science" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="science" category="science" />} />
                <Route exact path="/sports" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="sports" category="sports" />} />
                <Route exact path="/technology" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="technology" category="technology" />} />
                <Route exact path="/weather" element={<News setRefreshThemeElements={setRefreshThemeElements} apiKey={apiKey} setProgress={setProgress} key="weather" category="weather" />} />
                <Route exact path="/notes" element={<Notes />} />
                <Route exact path="/search" element={<Search apiKey={apiKey} setProgress={setProgress} />} />
            </Routes>
        </BrowserRouter>
    );
}
