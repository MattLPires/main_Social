import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/posts/3.jpeg" alt="" />
                            <img className="profileUserImg" src="assets/person/1.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Matheus Pires</h4>
                            <span className="profileCourse">Análise e Desenvolvimento de Sistemas</span>
                            <span className="profileSemester">5°Semestre</span>
                            <span className="profileEmail">matheus.pires5@fatec.sp.gov.br</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>

        </>
    )
}