import React from 'react';
import './Login.less';
import imgObj from '../../assets/images/a1.png'

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <span className="icon icon-add"></span>
                <img src={imgObj}></img>
                Hello World!!!<br />
                欢迎来到菜鸟教程学习
                1111111
                333
                <div className="testImg"></div>
            </div>
        );
    }
}

let Enter = (nextState, replace) => {
    /*if (!auth.isAdmin()) {
     // Redirect to Home page if not an Admin
     replace({ pathname: '/' })
     }*/
    //debugger
};

let Leave = () => {
    //debugger
};


export {Login, Enter, Leave};