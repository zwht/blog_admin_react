import React from 'react'
import {Route} from 'react-router'

import {Menu} from './../components/other/Menu.jsx'
import {AddUser} from './../components/user/AddUser.jsx'
import {UserList} from './../components/user/UserList.jsx'


let UserRouter =
    <Route path="user" component={Menu}>

        <Route path="addUser" component={AddUser}/>
        <Route path="userList" component={UserList}/>
    </Route>;

export default UserRouter;