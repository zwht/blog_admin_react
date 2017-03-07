import React from 'react';
import './addArticle.less';


import 'whatwg-fetch'

class AddArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "344333",
            content: "dsfjjdkdfkf",
            userId: '58bc14dff989c031d5f50417'
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