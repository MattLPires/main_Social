import "./login.css"

export default function Login () {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Radiotec</h3>
                    <span className="loginDesc">Conecte-se com sua instituição!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="RA:" className="loginInput" />
                        <input placeholder="Senha:" className="loginInput" />
                        <button className="loginButton">Entrar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}