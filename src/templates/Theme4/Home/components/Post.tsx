import React from "react";

interface PostProps {
     imageUrl: string;
     postTitle: string;
     postContent: string;
}

const Post: React.FC<PostProps> = ({ imageUrl, postTitle, postContent }) => (
     <article className="post mx-2">
          <div className="post-media">
               <a href="single.html">
                    <img src={imageUrl} alt="Post" width={225} height={280} />
               </a>
               <div className="post-date">
                    <span className="day">26</span>
                    <span className="month">Feb</span>
               </div>
          </div>
          {/* End .post-media */}
          <div className="post-body">
               <h2 className="post-title">
                    <a href="single.html">{postTitle}</a>
               </h2>
               <div className="post-content">
                    <p>{postContent}</p>
               </div>
               {/* End .post-content */}
               <a href="single.html" className="post-comment">
                    0 Comments
               </a>
          </div>
          {/* End .post-body */}
     </article>
);

export default Post;
