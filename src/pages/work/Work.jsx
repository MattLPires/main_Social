import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import WorkFeed from "../../components/workfeed/WorkFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./work.css";

export default function Work() {
    return (
        <>
            <Topbar />
            <div className="workContainer">
                <Sidebar />
                <WorkFeed />
                <Rightbar />
            </div>

        </>
    );
}