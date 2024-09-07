import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <h4>{props.post.title}</h4>
            <small>[{props.post.date}]</small>
            <div className="post_content">
                <img className="post_gfx" src={props.post.gfx} />
                <p className="post_content__text">{props.post.body}</p>
            </div>

        </div>
    );
};

export default Post;