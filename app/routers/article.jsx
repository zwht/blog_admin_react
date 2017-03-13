import React from 'react'
import {Route} from 'react-router'

import {Menu} from './../components/other/Menu.jsx'
import {AddArticle} from './../components/article/addArticle.jsx'
import {ArticleList} from './../components/article/articleList.jsx'

let UserRouter =
    <Route path="article" component={Menu}>
        <Route path="addArticle" component={AddArticle}/>
        <Route path="articleList" component={ArticleList}/>
    </Route>;

export default UserRouter;