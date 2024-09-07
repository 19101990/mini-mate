import React from "react";

const Posts = (props) => {
    //creating an array of JSX for each post, using the map array method
    const postsJSX = props.posts.map((post, index) => (
        <div className="summary" onClick={() => props.select(post)}>
            <h4>{post.title}<small>[{post.date}]</small></h4>
        </div>
    ));

    return <div className="posts">{postsJSX}</div>;
};

export default Posts;