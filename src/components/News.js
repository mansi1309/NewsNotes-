// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//     apiKey: PropTypes.string.isRequired,
//     setProgress: PropTypes.func.isRequired,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${this.capital(this.props.category)} - NewsMonkey`;
//   }

//   async updateNews() {
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
//     this.props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };

//   capital = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className="text-center" style={{ margin: "35px 0px" }}>
//           NewsMonkey - Top {this.capital(this.props.category)} Headlines
//         </h1>
//         {this.state.loading && <Spinner />}
//         {this.state.articles && this.state.articles.length > 0 && (
//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length !== this.state.totalResults}
//             loader={<Spinner />}
//           >
//             <div className="row my-3">
//               {this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={element.title ? element.title : "..."}
//                       description={element.description ? element.description : "..."}
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     );
//   }
// }

// export default News;

// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//     apiKey: PropTypes.string.isRequired,
//     setProgress: PropTypes.func.isRequired,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${this.capital(this.props.category)} - NewsNotes`;
//   }

//   async updateNews() {
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
//     this.props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };

//   capital = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className="text-center" style={{ margin: "60px 0px 0px" }}>
//           NewsNotes - Top {this.capital(this.props.category)} Headlines
//         </h1>
//         {this.state.loading && <Spinner />}
//         {this.state.articles && this.state.articles.length > 0 && (
//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length !== this.state.totalResults}
//             loader={<Spinner />}
//           >
//             <div className="row my-3">
//               {this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4 d-flex align-items-stretch" key={element.url}>
//                     <NewsItem
//                       title={element.title ? element.title : "..."}
//                       description={element.description ? element.description : "..."}
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     );
//   }
// }

// export default News;

// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//     q: "", // Add default empty string for search query
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//     apiKey: PropTypes.string.isRequired,
//     setProgress: PropTypes.func.isRequired,
//     q: PropTypes.string, // Add the q prop to the PropTypes
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${this.capital(this.props.category)} - NewsNotes`;
//   }

//   async updateNews() {
//     this.props.setProgress(10);
//     const query = this.props.q ? `&q=${this.props.q}` : ''; // Handle search query
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}${query}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
//     this.props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     const query = this.props.q ? `&q=${this.props.q}` : ''; // Handle search query
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}${query}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };

//   capital = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className="text-center" style={{ margin: "60px 0px 0px" }}>
//           {this.props.q ? `Showing results for "${this.props.q}"` : `NewsNotes - Top ${this.capital(this.props.category)} Headlines`}
//         </h1>
//         {this.state.loading && <Spinner />}
//         {this.state.articles && this.state.articles.length > 0 && (
//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length !== this.state.totalResults}
//             loader={<Spinner />}
//           >
//             <div className="row my-3">
//               {this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4 d-flex align-items-stretch" key={element.url}>
//                     <NewsItem
//                       title={element.title ? element.title : "..."}
//                       description={element.description ? element.description : "..."}
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     );
//   }
// }

// export default News;


import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    q: "", // Add default empty string for search query
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired,
    q: PropTypes.string, // Add the q prop to the PropTypes
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capital(this.props.category)} - NewsNotes`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const query = this.props.q ? `&q=${this.props.q}` : ''; // Handle search query
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}${query}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const query = this.props.q ? `&q=${this.props.q}` : ''; // Handle search query
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}${query}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "60px 0px 0px" }}>
          {this.props.q ? `Showing results for "${this.props.q}"` : `NewsNotes - Top ${this.capital(this.props.category)} Headlines`}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row my-3">
            {this.state.articles.map((element) => (
              <div className="col-md-4 d-flex align-items-stretch" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : "..."}
                  description={element.description ? element.description : "..."}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
