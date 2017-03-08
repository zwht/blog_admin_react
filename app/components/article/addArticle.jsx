import React from 'react';
import './addArticle.less';
import 'whatwg-fetch'
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
        this.changeContent = this.changeContent.bind(this);
        this.setNull = this.setNull.bind(this);
    }


    componentDidMount() {

    }

    changeTitle(event) {
        this.setState({title: event.target.value})
    }

    changeContent(event) {
        this.setState({content: event.target.value})
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
                <div className="messContent">
                    <h2 className="title">添加文章</h2>
                    <div className="mess">
                        <label>标题:</label>
                        <input type="text" className="inputText" onChange={this.changeTitle} value={this.state.title}/>
                        <i className="tips">{this.state.tips1}</i>
                    </div>
                    <div className="mess">
                        <label className="articleLabel">内容:</label>
                        <textarea className="articleContent" onChange={this.changeContent}
                                  value={this.state.content}></textarea>
                        <i className="tips">{this.state.tips2}</i>
                    </div>
                    <div className="addBtn" onClick={this.addArticle}>提交</div>
                </div>
            </div>
        );
    }
}

export {AddArticle};