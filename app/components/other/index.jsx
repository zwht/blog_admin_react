/**
 * Created by zhaowei on 17/3/4.
 */
import React from 'react';
import './Login.less';
import imgObj from '../../assets/images/a1.png'

import 'whatwg-fetch'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'zw',
            lastGistUrl: '',
            key: 2222
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({key: (this.state.key + 1)});
    }

    componentDidMount() {
        let _this = this;
        fetch("/rest/admin/login")
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
                <p className="icon icon-add"></p>
                <span onClick={this.handleClick}>{this.state.key}</span>
                <p className="icon icon-user"></p>
                <img src={imgObj}></img>
                Hello World!!!<br />
                欢迎来到菜鸟教程学习
                {this.state.username}
                1111111
                {this.state.lastGistUrl}
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