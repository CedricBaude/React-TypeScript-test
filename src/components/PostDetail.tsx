import React from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../interfaces';
import "./postDetail.css";

interface PostDetailProps {
    onePost: PostData | null;
};
const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {
    return (
        <div className="post">
            <h1>Publication numéro: {onePost?.id}</h1>
            <h2>{onePost?.title}</h2>
            <p>{onePost?.body}</p>
            <Link to="/">Home Page</Link>
        </div>
    );
};

export default PostDetail;