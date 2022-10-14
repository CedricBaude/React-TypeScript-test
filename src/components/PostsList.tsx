import React from 'react';
import { PostData } from '../interfaces';
import './postsList.css';
interface PostsListProps {
    allPosts: PostData[] | null;
}
const PostsList: React.FC<PostsListProps> = ({ allPosts }) => {
    return (
        <div>
            <ul className="posts">
                {allPosts?.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>Lire l'article</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;