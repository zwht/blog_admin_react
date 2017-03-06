import React from 'react';
import './Login.less';
import session from '../../servers/session.jsx'

import 'whatwg-fetch'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            passWord: '',
            checked: false
        };
        if (session.get('sess')) {
            this.state = {
                userName: session.get('userName'),
                passWord: window.atob(session.get('passWord')),
                checked: true
            };
        }

        this.changeUser = this.changeUser.bind(this);
        this.changePwd = this.changePwd.bind(this);
        this.login = this.login.bind(this);
        this.remeber = this.remeber.bind(this);
    }

    changeUser(event) {
        this.setState({userName: (event.target.value)})
    }

    changePwd(event) {
        this.setState({passWord: (event.target.value)})
    }

    remeber() {
        this.setState({checked: !this.state.checked})
    }

    savePassword() {
        if (this.state.checked) {
            session.set('sess', true);
            session.set('userName', this.state.userName);
            session.set('passWord', window.btoa(this.state.passWord))
        }
    }

    login() {
        let _this = this;
        fetch("/rest/admin/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userName: _this.state.userName,
                passWord: window.btoa(_this.state.passWord)
            })
        })
            .then(function (response) {
                _this.savePassword();
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
                            <input className="inputText" placeholder="用户名" value={this.state.userName}
                                   onChange={this.changeUser} autocomplete="off" type="text"/>
                        </div>
                        <div className="password mess">
                            <span className="icon icon-lock"></span>
                            <input className="inputText" placeholder="密码" value={this.state.passWord}
                                   onChange={this.changePwd} autocomplete="off" type="password"/>
                        </div>
                        <div className="setPwd clear">
                            <div className={this.state.checked? 'pull-left checked active':'pull-left checked' }
                                 onClick={this.remeber}>
                                <span className="icon icon-ch"></span>
                                <span className="icon icon-ch1"></span>
                                <span>记住密码</span>
                            </div>
                            <div className="pull-right">
                                <a className="forget">忘记密码?</a>
                            </div>
                        </div>
                    </div>
                    <div className="loginBtn" onClick={this.login}>
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