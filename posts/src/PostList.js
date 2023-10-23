import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <div style={{padding: "20px", backgroundColor: "#f3f3f3"}}>
            <h2 style={{color: "blue"}}>Posts</h2>
            {posts.map(post => (
                <div key={post.id} style={{margin: '10px 0', padding: "10px", background: "#eee", borderRadius: "10px"}}>
                    <h3 style={{color: "black"}}>{post.title}</h3>
                    <p style={{color: "darkgray"}}>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;