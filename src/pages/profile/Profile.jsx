import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=matheus`);
            setUser(res.data);
        };
        fetchUser();

    }, []);
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF}posts/3.jpeg`} alt="" />
                            <img className="profileUserImg" src={`${PF}person/7.jpeg`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="matheus"/>
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>

        </>
    )
}