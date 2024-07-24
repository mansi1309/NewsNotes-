// import React from 'react'

// const NewsItem = (props)=> {
//         let { title, description, imageUrl, newsUrl, author, date, source } = props;
//         return (
//             <div className="my-3" style={{ textDecoration: "none", width:"auto", padding:"0px"}}>
//                 <div className="card">
//                     <div style={{
        
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         position: 'absolute',
//                         right: '0'
                        
//                     }
//                     }> 
//                         <span className="badge rounded-pill bg-danger"> {source} </span>
//                     </div>
//                     <div style={{ width: "100%", maxHeight: "165px", height: "165px", overflow: "hidden", display: "grid", alignContent: "center", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
//                     <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
//                     </div>
//                     <div className="card-body" style={{ display: "grid", alignContent: "space-between", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
//                         <h5 className="card-title">{title}  </h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
//                         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
     
// }

// export default NewsItem

// import React from 'react';

// const NewsItem = (props) => {
//     let { title, description, imageUrl, newsUrl, author, date, source } = props;

//     // Log the imageUrl to see what is being passed to the component
//     console.log('NewsItem props:', props);

//     return (
//         <div className="my-3">
//             <div className="card">
//                 <div style={{
//                     display: 'flex',
//                     justifyContent: 'flex-end',
//                     position: 'absolute',
//                     right: '0'
//                 }}>
//                     <span className="badge rounded-pill bg-danger"> {source} </span>
//                 </div>
//                 <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="News" />
//                 <div className="card-body">
//                     <h5 className="card-title">{title}  </h5>
//                     <p className="card-text">{description}</p>
//                     <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
//                     <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewsItem;

import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3 d-flex" style={{ textDecoration: "none", width: "100%", padding: "0px" }}>
            <div className="card d-flex flex-column" style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    zIndex: '1'
                }}>
                    <span className="badge rounded-pill bg-danger" > {source} </span>
                </div>
                <div style={{ width: "100%", maxHeight: "165px", height: "165px", overflow: "hidden", display: "grid", alignContent: "center" }}>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary mt-auto">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;
