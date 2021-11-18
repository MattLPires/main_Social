import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";



export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText"> {" "} <b>Matheus Pires</b> e <b>3 outros amigos</b> fazem aniversário hoje</span>
                </div>
                <h4 className="rightbarTitle">Amigos online</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">Informação do usuário</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Curso:</span>
                    <span className="rightbarInfoValue">Análise e Desenvolvimento de Sistemas</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Semestre:</span>
                    <span className="rightbarInfoValue">5° Semestre</span>
                </div><div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">E-mail:</span>
                    <span className="rightbarInfoValue">matheus.h98@hotmail.com.br</span>
                </div>
            </div>
            <h4 className="rightbarTitle">Amigos</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/2.jpg" alt="" />
                    <span className="rightbarFollowingName">Gustavo Hokama</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/3.jpg" alt="" />
                    <span className="rightbarFollowingName">Nicolas Almeida</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/4.jpg" alt="" />
                    <span className="rightbarFollowingName">Deregay</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/5.jpg" alt="" />
                    <span className="rightbarFollowingName">Vector</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/6.jpg" alt="" />
                    <span className="rightbarFollowingName">Farinhas</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/8.JPG" alt="" />
                    <span className="rightbarFollowingName">Mel</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}