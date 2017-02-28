import React from 'react';
import './Login.less';

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                Hello World!!!<br />
                欢迎来到菜鸟教程学习
                1111111
                333
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