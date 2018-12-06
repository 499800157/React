import React from 'react'
import ReactDOM from 'react-dom'
import { createStore ,compose ,applyMiddleware} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import {BrowserRouter , Route , Switch , Redirect} from "react-router-dom"

import './index.css'
import App from './App'
import reducer from "./reducer"
import AuthRoute from "./component/authRoute/authRoute"
import Login from "./container/login/login"
import Register from "./container/register/register"
import AcceptInfo from "./component/acceptinfo/acceptinfo"
import ReleaseInfo from "./component/releaseinfo/releaseinfo"
import Dashboard from "./component/dashboard/dashboard"


const store = createStore(reducer , compose(
    applyMiddleware(thunk),
    window.devToolsExtension  ? window.devToolsExtension() : f => f 
))

ReactDOM.render(
        <Provider store = {store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Switch>
                        <Route exact path = "/" component = {App}></Route>
                        <Route path = "/login" component = {Login}></Route>
                        <Route path = "/register" component = {Register}></Route>
                        <Route path = "/acceptInfo" component = {AcceptInfo}></Route>
                        <Route path = "/releaseInfo" component = {ReleaseInfo}></Route>
                        <Route  component = {Dashboard}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
        ,document.getElementById('root'));

