import "./login.css"

export default function Login() {

    function Logar() {
        console.log('clicou no botão')

        let url = 'http://localhost:3000/login'
        let login = document.getElementById('login').value
        let password = document.getElementById('senha').value

        console.log(login)
        console.log(password)

        let body = {
            "user": login,
            "password": password
        }

        postLogin(url, body)

    }

    function postLogin(url, body) {
        let request = new XMLHttpRequest()
        request.open("POST", Logar.url, true)
        request.setRequestHeader("Content-type", "application/json")
        request.send(JSON.stringify(body))

        request.onload = function(){
            console.log(this.responseText)
        }

        return request.requestText

    }

    function fazerLogin () {
        Logar();
        postLogin();
    }



    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Radiotec</h3>
                    <span className="loginDesc">Conecte-se com sua instituição!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Login:" className="loginInput" id="login" />
                        <input placeholder="Senha:" className="loginInput" id="senha" />
                        <button className="loginButton" onClick={fazerLogin}>Entrar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}