import React from 'react'
import {Route} from 'react-router'

import {Menu} from './../components/other/Menu.jsx'
import {AddArticle} from './../components/article/addArticle.jsx'


let UserRouter =
    <Route path="article" component={Menu}>
        <Route path="addArticle" component={AddArticle}/>
    </Route>;

export default UserRouter;