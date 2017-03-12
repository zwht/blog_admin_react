/**
 * Created by zhaowei on 17/3/5.
 */
import React from 'react';
import './Menu.less';
import queryString from 'query-string';
import 'whatwg-fetch'
import session from '../../servers/session.jsx'

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: session.get("userId"),
            datas: []
        };
    }

    componentDidMount() {
        let _this = this;
        fetch("/rest/admin/getArticleList?userId=" + this.state.userId,
            {
                method: "GET",
                headers: {access_token: session.get("access_token")},
            })
            .then(function (response) {
                response.json().then(function (data) {
                    if (data.key != 200) {
                        alert(data.str)
                    } else {
                        _this.setState({datas: data.data});
                        console.log(_this.state.datas);
                        alert('success')
                    }
                })
            });
    }

    render() {
        var items = [];
        for (var i = 0; i < this.state.datas.length; i++) {
            items.push(<li id={this.state.datas[i]._id}><a>{this.state.datas[i].title}</a></li>)
        }
        return (
            <div className="Menu height100">
                <div className="menuList">
                    <div className="logo"></div>
                    <ul>
                        {items}
                    </ul>
                </div>
                <div className="mainBox height100">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export {Menu};