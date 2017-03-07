import React from 'react';
import './AddUser.less';

import 'whatwg-fetch'

class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: 'myaoyao',
            passWord: 'MTIzNDU2',
            repeatPassWord: "MTIzNDU2"
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
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(json)
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