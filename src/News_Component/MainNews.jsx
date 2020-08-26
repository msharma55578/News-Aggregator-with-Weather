import React, { Component } from "react";
import NewsPage from "./NewsPage";

// const API_key = "3df75f7cdb1a889a9ebd4862bcba5210";
// const API_key='4be8015accaf22a0e5ff3821e1656b98';
//const API_key = "b37c20aae594a906c4b11d0c80083d54";
const API_key ="40813f849af1d195c5da40ebbbc96368";
export class MainNews extends Component {
  constructor() {
    super();
    this.state = {
      //articleCount: undefined,
      post: [
        // {
        //     title: "",
        //     description: "",
        //     url: "",
        //     image: "",
        //     publishedAt: "",
        // },
      ],
    };
    this.getNews();
  }
  getNews = async () => {
    const api_call = await fetch(
      `https://gnews.io/api/v3/search?q=India&token=${API_key}`
    );
    const response = await api_call.json();
    console.log(response);

    this.setState({
      //articleCount: response.articleCount,
      post: response.articles,
    });
  };


  render() {
      const {post}=this.state
    return (
      <span>
        {post.map((i)=>(
            <NewsPage articles={i} />
            // <li>{i.title}</li>
        ))}
      </span>
    );
  }
}

export default MainNews;
