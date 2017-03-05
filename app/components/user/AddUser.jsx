import React from 'react';
import './AddUser.less';
import queryString from 'query-string';

import 'whatwg-fetch'

class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '11',
            passWord: '6512bd43d9caa6e02c990b0a82652dca',
            repeatPassWord: "6512bd43d9caa6e02c990b0a82652dca"
        };
    }

    componentDidMount() {
        var json = {
            userName: this.state.userName,
            passWord: this.state.passWord,
            repeatPassWord: this.state.repeatPassWord
        };
        fetch("/rest/admin/addUser",
            {
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: queryString.stringify(json)
            })
            .then(function (response) {


            });
    }

    render() {
        return (
            <div className="AddUser">
                <input type="text" value={this.state.userName}/>
                <input type="password" value={this.state.passWord}/>
                <input type="password" value={this.state.repeatPassWord}/>
            </div>
        );
    }
}

export {AddUser};