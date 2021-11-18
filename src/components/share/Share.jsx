import "./share.css"
import { PermMedia } from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="Compartilhe aqui" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Foto ou Vídeo</span>
                        </div>
                    </div>
                    <button className="shareButton">Publicar</button>
                </div>

            </div>
        </div>
    )
}