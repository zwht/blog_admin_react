import React from 'react';
import './Login.less';
import imgObj from '../../assets/images/a1.png'
import queryString from 'query-string';

import 'whatwg-fetch'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: 'myaoyao',
            passWord: '123456'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({key: (this.state.key + 1)});
    }

    componentDidMount() {
        let _this = this;
        fetch("/rest/admin/login", {
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: queryString.stringify({userName: _this.state.userName, passWord: _this.state.passWord})
        })
            .then(function (response) {
                console.log(response);
                _this.setState({
                    username: 'fuck',
                    lastGistUrl: '99999'
                })
            });
    }

    render() {
        return (
            <div className="Login">
                <div className="loginContent">
                    <div className="headImg"></div>
                    <div className="messBox">
                        <div className="userName mess">
                            <span className="icon icon-user"></span>
                            <span className="names">用户名</span>
                            <input className="inputText" type="text"/>
                        </div>
                        <div className="password mess">
                            <span className="icon icon-lock"></span>
                            <span className="pwd">密码</span>
                            <input className="inputText" type="text"/>
                        </div>
                        <div className="setPwd clear">
                            <div className="pull-left">
                                <span className="icon icon-ch remeber">记住密码</span>
                            </div>
                            <div className="pull-right">
                                <a className="forget">忘记密码?</a>
                            </div>
                        </div>
                    </div>
                    <div className="loginBtn">
                        登录
                    </div>
                </div>
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