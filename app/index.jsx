import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory, IndexRedirect} from 'react-router'
import OtherRouter from './routers/other.jsx'
import UserRouter from './routers/user.jsx'

const App = React.createClass({
    render: function () {
        return (
            <div className="height100">
                {this.props.children}
            </div>
        );
    }
});

let routes =
    <Route path="/" component={App}>
        {UserRouter}
        {OtherRouter}
    </Route>;

render((<Router routes={routes} history={hashHistory}></Router>), document.getElementById('app'));



