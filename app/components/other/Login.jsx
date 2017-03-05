import React from 'react';
import './Login.less';
import imgObj from '../../assets/images/a1.png'
import queryString from 'query-string';

import 'whatwg-fetch'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: 'zw',
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
                <input type="text" value={this.state.userName}/>
                <input type="password" value={this.state.passWord}/>
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