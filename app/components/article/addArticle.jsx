import React from 'react';
import './addArticle.less';
import 'whatwg-fetch'

class AddArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "fuck",
            content: "快手快脚风景快结束的九分裤，可就是打开房间，开始觉得减肥控件",
            userId: '58bee08f0fc018094d67f7bd'
        };
    }


    componentDidMount() {
        var json = {
            title: this.state.title,
            content: this.state.content,
            userId: this.state.userId
        };
        fetch("/rest/admin/addArticle",
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
                <input type="text" value={this.state.title}/>
                <input type="text" value={this.state.content}/>
                <input type="text" value={this.state.userId}/>
            </div>
        );
    }
}

export {AddArticle};