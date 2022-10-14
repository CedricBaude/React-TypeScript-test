import React, { useEffect, useState } from 'react';
import PostsList from '../components/PostsList';
import './posts.css';

export interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Posts: React.FC = () => {
    const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
    const [numberOfPosts, setNumberOfPosts] = useState<number>(5);

    console.log(allPosts);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${numberOfPosts}`);
            const data: PostData[] = await response.json();
            setAllPosts(data);
        }
        getPosts();
    }, [numberOfPosts]);


    return (
        <div className="post-container">
            <h1>Page principale</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="posts">Nombre de publication 5</label>
                <input type="range" min={1} max={20} onChange={(e) => console.log(e.target.value)} />
                <PostsList />
            </div>
        </div>
    );
};

export default Posts;