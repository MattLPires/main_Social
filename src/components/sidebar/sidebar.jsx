import "./sidebar.css"
import { RssFeed, School, Event, Work, Chat, PlaylistPlay, Folder } from "@material-ui/icons"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed de notícias</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Folder className="sidebarIcon" />
                        <span className="sidebarListItemText">Arquivos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon" />
                        <span className="sidebarListItemText">Empregos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Eventos</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Cursos</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlaylistPlay className="sidebarIcon" />
                        <span className="sidebarListItemText">Votação Playlist</span>
                    </li>

                </ul>
                <button className="sidebarButton">
                    Mostrar mais
                </button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className ="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidevarFriendName">Gustavo Pereira</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className ="sidebarFriendImg" src="/assets/person/3.jpg" alt="" />
                        <span className="sidevarFriendName">Nicolas Almeida Pereira</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}