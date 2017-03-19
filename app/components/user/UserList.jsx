/**
 * Created by myao on 17/3/19.
 */
import React from 'react';
import './UserList.less';
import 'whatwg-fetch';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {userId: '1', userName: '孟瑶瑶'},
                {userId: '2', userName: '赵日弄'}
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        var items = [];
        for (var i = 0; i < this.state.users.length; i++) {
            items.push(<li id={this.state.users[i].userId}>{this.state.users[i].userName}</li>);
        }
        return (
            <div className="UserList">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }

}
export {UserList};