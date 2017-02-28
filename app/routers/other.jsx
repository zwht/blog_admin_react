import React from 'react'
import {Route} from 'react-router'

import {Page404} from './../components/other/404.jsx'
import {Login, Enter, Leave} from './../components/other/Login.jsx'


let OtherRouter =
    <Route>
        <Route path="login" component={Login} onEnter={Enter} onLeave={Leave}/>
        <Route path="*" component={Page404}/>
    </Route>;

export default OtherRouter;