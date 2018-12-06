import React from 'react'
import { List ,WhiteSpace ,Button , InputItem , WingBlank,Toast} from "antd-mobile"
import PropsTypes from  "prop-types"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import Logo from "../../component/logo/logo"
import Hoc  from "../../component/hoc/hoc"
import { login } from "../../redux/user.redux"

class Login extends React.Component{

    static propsTypes = {
        handleChange : PropsTypes.func.isRequired
    }

    login = ()=> {
        this.props.login(this.props.state)
    }


    render(){
        return (
            <div>
                {this.props.redirectTo ? <Redirect to = {this.props.redirectTo}></Redirect> : null }
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg ? <div className = "error-msg">{this.props.msg}</div> : null }
                        <InputItem onChange = {(v) => this.props.handleChange("user" , v)} >用户名</InputItem>
                        <InputItem onChange = {(v) => this.props.handleChange("pwd" , v)} type = "password">口令</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type = "primary" onClick = {this.login}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick = {() => this.props.history.push("/register")}>没有用户</Button>
                </WingBlank>
            </div>
        )
    }
}
Login = connect( state => state.user , {login})(Login)
Login = Hoc(Login)
export default Login