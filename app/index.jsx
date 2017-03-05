import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory, IndexRedirect} from 'react-router'
import OtherRouter from './routers/other.jsx'


const App = React.createClass({
    render: function () {
        return (
            <div className="height100">
                <div>
                    app
                </div>
                <div className="height100">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

let routes =
    <Route path="/" component={App}>
        {OtherRouter}
    </Route>;

render((<Router routes={routes} history={hashHistory}></Router>), document.getElementById('app'));



