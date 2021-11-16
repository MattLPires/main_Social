import "./post.css"
import { MoreVert } from "@material-ui/icons"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                        <span className="postUsername">Matheus Pires</span>
                        <span className="postDate">5 minutos atrás</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Boa tarde! :)</span>
                    <img className="postImg" src="assets/posts/1.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" alt="" />
                        <span className="postLikeCounter">21 pessoas curtiram</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">2 comentários</span>
                    </div>
                </div>
            </div>
        </div>
    )
}