import React from 'react';
import './AddUser.less';

import 'whatwg-fetch'
import session from '../../servers/session.jsx'

class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            passWord: '',
            repeatPassWord: "",
            tips1: '',
            tips2: '',
            tips3: ''
        };
        this.addUser = this.addUser.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassWord = this.changePassWord.bind(this);
        this.changeRepeatPassWord = this.changeRepeatPassWord.bind(this);
        this.setNull = this.setNull.bind(this);
    }

    componentDidMount() {


    }

    changeUserName(event) {
        this.setState({userName: event.target.value})
    }

    changePassWord(event) {
        this.setState({passWord: event.target.value})
    }

    changeRepeatPassWord(event) {
        this.setState({repeatPassWord: event.target.value})
    }

    addUser() {
        let _this = this;
        let jsonData = {};
        if (_this.state.repeatPassWord != _this.state.passWord) {
            _this.setState({tips3: '密码请保持一致!'});
            return
        }
        else if (_this.state.userName === '') {
            _this.setState({tips1: '用户名不能为空!'});
            return
        }
        else if (_this.state.passWord === '') {
            _this.setState({tips2: '密码不能为空!'})
        }
        else if (_this.state.repeatPassWord !== "" && _this.state.passWord !== "" && _this.state.userName !== "") {
            jsonData = {
                userName: _this.state.userName,
                passWord: window.btoa(_this.state.passWord),
                repeatPassWord: window.btoa(_this.state.repeatPassWord)
            };
            _this.setNull();
        }
        fetch("/rest/admin/addUser",
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(jsonData)
            })
            .then(function (response) {
                response.json().then(function (data) {
                    if (data.key != 200) {
                        _this.setState({tips1: data.str})
                    } else {
                        _this.setNull();
                        session.set('userId', data.data._id);
                        alert('success')
                    }
                })
            });
    }

    setNull() {
        this.setState({tips1: ''});
        this.setState({tips2: ''});
        this.setState({tips3: ''});
    }

    render() {
        return (
            <div className="AddUser">
                <div className="messContent">
                    <h2 className="title">添加用户</h2>
                    <div className="mess">
                        <label>用&nbsp;&nbsp;户&nbsp;名:</label>
                        <input type="text" className="inputText" onChange={this.changeUserName}
                               value={this.state.userName}/>
                        <i className="tips">{this.state.tips1}</i>
                    </div>
                    <div className="mess">
                        <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
                        <input type="password" className="inputText" onChange={this.changePassWord}
                               value={this.state.passWord}/>
                        <i className="tips">{this.state.tips2}</i>
                    </div>
                    <div className="mess">
                        <label>确认密码:</label>
                        <input type="password" className="inputText" onChange={this.changeRepeatPassWord}
                               value={this.state.repeatPassWord}/>
                        <i className="tips">{this.state.tips3}</i>
                    </div>
                    <div className="addBtn" onClick={this.addUser}>提交</div>
                </div>
            </div>
        );
    }
}

export {AddUser};