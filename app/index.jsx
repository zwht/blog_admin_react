import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import Login from './components/other/Login.jsx'

const App = React.createClass({
    render : function(){
        return (
            <div>777888997667hghggh
                {this.props.children}
            </div>
        );
    }
})
const About = React.createClass({
    render : function(){
        return (
            <div>
            <h1>about</h1>
            </div>
        );
    }
})
const NoMatch = React.createClass({
    render: function () {
        return (<h2>NoMatch</h2>);
    }
})

const Users = React.createClass({
    render() {
        return (
            <div>dsjdffjkk</div>
        )
    }
})

const User = React.createClass({
    componentDidMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            user: findUserById(this.props.params.userId)
        })
    },

    render() {
        return (
            <div>
            <h2>{this.state.user.name}</h2>
        {/* etc. */}
        </div>
    )
    }
})

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="users" component={Users}>
                <Route path="/user/:userId" component={User}/>
            </Route>
            <Route path="login" component={Login}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('app'));



