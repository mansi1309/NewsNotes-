// import React from 'react'
// import { Link } from "react-router-dom";

// const NavBar = () => {

//     return (
//         <div>
//             <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">NewsMonkey</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link" aria-current="page" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
//                         </ul>
                        
//           <form className="d-flex" role="search">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )

// }

// export default NavBar


// correct code

// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";

// const NavBar = () => {
//     const [darkMode, setDarkMode] = useState(false);

//     useEffect(() => {
//         const savedMode = localStorage.getItem('darkMode');
//         if (savedMode === 'true') {
//             setDarkMode(true);
//             document.body.classList.add('bg-dark');
//             document.body.classList.add('text-light');
//         }
//     }, []);

//     const toggleDarkMode = (e) => {
//         e.preventDefault(); // Prevent default button action
//         setDarkMode(prevMode => {
//             const newMode = !prevMode;
//             localStorage.setItem('darkMode', newMode);
//             if (newMode) {
//                 document.body.classList.add('bg-dark');
//                 document.body.classList.add('text-light');
//             } else {
//                 document.body.classList.remove('bg-dark');
//                 document.body.classList.remove('text-light');
//             }
//             return newMode;
//         });
//     };

//     return (
//         <div>
//             <nav className={`navbar fixed-top navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold', fontSize: '1.4em' }}>NewsNotes</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link" aria-current="page" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>


//                             <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/weather">Weather</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
//                             <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

//                             <li className="nav-item"><Link className="nav-link" to="/notes">Notes</Link></li>

//                         </ul>
//                         <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
//                             <button className="btn btn-outline-primary me-2" onClick={toggleDarkMode}>
//                                 {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
//                             </button>
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default NavBar;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            setDarkMode(true);
            document.body.classList.add('bg-dark');
            document.body.classList.add('text-light');
        }
    }, []);

    const toggleDarkMode = (e) => {
        e.preventDefault(); // Prevent default button action
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode);
            if (newMode) {
                document.body.classList.add('bg-dark');
                document.body.classList.add('text-light');
            } else {
                document.body.classList.remove('bg-dark');
                document.body.classList.remove('text-light');
            }
            return newMode;
        });
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold', fontSize: '1.4em' }}>NewsNotes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/weather">Weather</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/notes">Notes</Link></li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                            <button className="btn btn-outline-primary me-2" onClick={toggleDarkMode}>
                                {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                            </button>
                            <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
