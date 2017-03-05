/**
 * Created by zhaowei on 17/3/5.
 */
import React from 'react';
import './Menu.less';
import queryString from 'query-string';
import 'whatwg-fetch'

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: 'myaoyao',
            passWord: '123456'
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Menu height100">
                <div className="menuList">
                    fuck
                </div>
                <div className="mainBox height100">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export {Menu};
