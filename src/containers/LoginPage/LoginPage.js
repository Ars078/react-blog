import { useState } from "react";
import "./LoginPage.css";

export const LoginPage = ({
  setIsLoggedIn,
  history,
  setUserName
}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginChange = (e) => {
      setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
}
    const handleLogin = (e) => {
        e.preventDefault()

        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('userName', login)
        setUserName(login)
        setIsLoggedIn(true)
        history.push('/')
    }



  return (
    <h1>
      <form className="loginForm" onSubmit={handleLogin}>
        <h2>Авторизация</h2>
        <div>
          <input
            className="loginFormInput"
            type="text"
            placeholder="Логин"
            onChange={handleLoginChange}
            required
          />
        </div>
        <div>
          <input
            className="loginFormInput"
            type="password"
            placeholder="Пароль"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit" className="blackBtn">
            Войти
          </button>
        </div>
      </form>
    </h1>
  );
};
