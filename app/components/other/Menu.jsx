/**
 * Created by zhaowei on 17/3/5.
 */
import React from 'react';
import './Menu.less';
import queryString from 'query-string';
import 'whatwg-fetch'
import session from '../../servers/session.jsx'
import {hashHistory} from 'react-router'

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            datas: [
                {'text': 'new post', 'icons': 'icon-new', 'active': true, url: '/article/addArticle'},
                {'text': 'content', 'icons': 'icon-content', 'active': false, url: '/article/articleList'},
                {'text': 'userList', 'icons': 'icon-team', 'active': false, url: '/user/userList'}
            ]
        };
    }

    componentDidMount() {
    }

    goto(item) {
        hashHistory.push(item.url);
        for (var i = 0; i < this.state.datas.length; i++) {
            this.state.datas[i].active = false;
        }
        item.active = true
    }

    render() {
        return (
            <div className="Menu height100">
                <div className="menuList">
                    <div className="logo"></div>
                    <ul class="ulList">
                        {this.state.datas.map(function (item) {
                            return <li onClick={this.goto.bind(this,item)}
                                       className={item.active?'active':''}>
                                <i className={'icon '+item.icons}></i>
                                {item.text}
                            </li>
                        }.bind(this))}
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