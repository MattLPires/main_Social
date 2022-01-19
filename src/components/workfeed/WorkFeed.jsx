import "./workfeed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { WorkPosts } from "../../dummyDataWork"

export default function WorkFeed() {
    return (
        <div className="workfeed">
            <div className="workfeedWrapper">
                <Share />
                {WorkPosts.map((p) => (
                    <Post key={p.id} post = {p} />
                ))}

            </div>
        </div>
    )
}