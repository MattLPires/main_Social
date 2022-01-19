import { useEffect, useState } from "react";
import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import axios from "axios";



export default function Feed({username}) {
    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        const fetchPosts = async () => {
            const res = username
             ? await axios.get("http://localhost:4000/api/posts/profile/"+ username)
             : await axios.get("http://localhost:4000/api/posts/timeline/all/61e4a53fe9a8a7c761992dbe");
            setPosts(res.data)
        };
       
       fetchPosts();
    },[username]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
               {posts.map((p) => (
                    <Post key={p._id} post = {p} />
                ))} 

            </div>
        </div>
    )
}