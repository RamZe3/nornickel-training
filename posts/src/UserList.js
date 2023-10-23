import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPostList = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    const handleUserClick = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <div style={{padding: "20px", backgroundColor: "#f3f3f3"}}>
            <h2 style={{color: "blue"}}>Users</h2>
            {users.map(user => (
                <div key={user.id} onClick={() => handleUserClick(user.id)} style={{margin: "10px 0", cursor: "pointer"}}>
                    <h3 style={{margin: "5px 0", color: "grey"}}>{user.name}</h3>
                    {selectedUserId === user.id && (
                        <div style={{ padding: "10px", background: "#eee", borderRadius: "10px" }}>
                            {posts.filter(post => post.userId === user.id).map(userPost => (
                                <div key={userPost.id}>
                                    <h4 style={{margin: "5px 0", color: "black"}}>{userPost.title}</h4>
                                    <p style={{margin: "5px 0", color: "darkgray"}}>{userPost.body}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserPostList;