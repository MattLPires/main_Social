import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";



export default function Rightbar () {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText"> {" "} <b>Matheus Pires</b> e <b>3 outros amigos</b> fazem aniversário hoje</span>
                </div>
                <h4 className="rightbarTitle">Amigos online</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) =>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}