import React, { useState } from 'react'
import './Login.scss';

const LoginCard = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(userName !== '' && password !== '') {
            localStorage.setItem('userInfo', JSON.stringify({userName: userName, password: password}));
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không được để trống');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h3>Đăng Nhập</h3>

            <label htmlFor="username">Tên đăng nhập</label>
            <input 
                type="text" 
                placeholder="Tên đăng nhập" 
                id="username" 
                value={userName}
                onChange={(e)=>{setUserName(e.target.value)}}
            />
            <label htmlFor="password">Mật khẩu</label>
            <input 
                type="password" 
                placeholder="Mật khẩu" 
                id="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button>Log In</button>
        </form>
    )
}

export default LoginCard;
