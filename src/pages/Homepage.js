import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Dogs from "../components/Dogs";
import MainGallery from "../components/MainGallery";
import Post from "../components/Post";
import Posts from "../components/Posts";
import Blog from "../posts.json"
import Instagram from "../components/Instagram";

export default function Homepage() {
  if (document.getElementById('main')) {
    document.querySelector('html').classList.add('main_page')
  }

  //Post to track the post displayed by Post
  const [post, setPost] = React.useState(Blog[0])

  //Function to change the displayed post
  const selectPost = (selected) => {
    setPost(selected)
  }

  return (
    <div id="main">
      <Hero />
      <About />
      <Dogs />
      <div className="homepage_news">
        <h2 className="headline">News</h2>
        <div className="homepage_news__wrapper">
          <Posts posts={Blog} select={selectPost} />
          <Post post={post} />
        </div>
      </div>
      <Instagram />
      {/* <MainGallery /> */}
    </div>
  );
}