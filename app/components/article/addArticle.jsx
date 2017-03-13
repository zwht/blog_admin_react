import React from 'react';
import './addArticle.less';
import 'whatwg-fetch'
import wangeditor from "wangeditor";

import session from '../../servers/session.jsx'

class AddArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            userId: session.get('userId'),
            tips1: '',
            tips2: ''
        };
        this.addArticle = this.addArticle.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.setNull = this.setNull.bind(this);
    }

    componentDidMount() {

        this.initEditor();
        this.getArticle();

    }

    getArticle() {
        //    fetch("/rest/admin/getArticleList?userId=" + this.state.userId + "&token=" + session.get("token"),
        //        {
        //            method: "GET",
        //            headers: {access_token: session.get("access_token")}
        //        })
        //        .then(function (response) {
        //            response.json().then(function (data) {
        //                if (data.key != 200) {
        //
        //                } else {
        //                    alert('success')
        //                }
        //            })
        //        });
        //    fetch("/rest/admin/getOneArticle?articleId=" + "articleId",
        //        {
        //            method: "GET"
        //        })
        //        .then(function (response) {
        //            response.json().then(function (data) {
        //                if (data.key != 200) {
        //
        //                } else {
        //                    alert('success')
        //                }
        //            })
        //        });
    }
    initEditor() {
        // 生成编辑器
        var _this = this;
        var editor = new wangeditor(this.refs.wangEditor);
        editor.create();
        editor.$txt.html(this.state.content);
        editor.onchange = function () {
            _this.setState({content: this.$txt.html()});
            document.getElementById("preview").innerHTML = document.getElementById("editor-container").innerHTML;
        };
    }

    changeTitle(event) {
        this.setState({title: event.target.value})
    }

    addArticle() {
        let _this = this;
        var dataJson = {};
        if (_this.state.title === '') {
            _this.setState({tips1: '标题不能为空!'});
            return
        }
        if (_this.state.content === '') {
            _this.setState({tips2: '文章内容不能为空!'});
            return
        } else if (_this.state.title !== '' && _this.state.content !== '') {
            dataJson = {
                title: _this.state.title,
                content: _this.state.content,
                userId: _this.state.userId
            };
            _this.setNull();
        }
        fetch("/rest/admin/addArticle",
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(dataJson)
            })
            .then(function (response) {
                response.json().then(function (data) {
                    if (data.key != 200) {
                        _this.tips1 = data.str
                    } else {
                        _this.setNull();
                        alert("success!");
                    }
                })
            });
    }

    setNull() {
        this.setState({tips1: ''});
        this.setState({tips2: ''});
    }

    render() {
        return (
            <div className="AddArticle">
                <div className="top">
                    <h2 className="title">添加文章</h2>
                    <div className="mess">
                        <label>文章标题:</label>
                        <input type="text" className="inputText" onChange={this.changeTitle} value={this.state.title}/>
                        <i className="tips">{this.state.tips1}</i>
                        <span className="addBtn" onClick={this.addArticle}>提交</span>
                    </div>
                </div>
                <div className="articleContent clear">
                    <div id="editor-container" className="container pull-left" ref="wangEditor">
                        <div id="editor-trigger"><p>请输入内容</p></div>
                    </div>
                    <div id="preview" className="preview pull-right">
                    </div>
                </div>
            </div>
        );
    }
}

export {AddArticle};