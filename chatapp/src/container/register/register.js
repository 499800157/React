import React from 'react'
import { List ,WhiteSpace ,Button , InputItem , WingBlank , Radio} from "antd-mobile"
import PropsTypes from  "prop-types"
import { connect } from "react-redux"
import {Redirect} from "react-router-dom"

import Logo from "../../component/logo/logo"
import Hoc  from "../../component/hoc/hoc"
import { register } from "../../redux/user.redux"

class Register extends React.Component{

    static propsTypes = {
        handleChange : PropsTypes.func.isRequired,
        state : PropsTypes.object.isRequired,
        register : PropsTypes.func
    }
    
    Register = ()=> {
        this.props.register(this.props.state)
    }
    componentDidMount (){
        this.props.handleChange("type" , "release")
        console.log(this.props)
    }
    render(){
        const RadioItem = Radio.RadioItem
        const {state ,handleChange } = this.props
        return (
            <div>
                {this.props.redirectTo ? <Redirect to = {this.props.redirectTo}></Redirect> : null }
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg ? <div className = "error-msg">{this.props.msg}</div> : null }
                        <InputItem onChange = {(v) => handleChange("user" , v)} >用户名</InputItem>
                        <InputItem onChange = {(v) => handleChange("pwd" , v)} type = "password">口令</InputItem>
                        <InputItem onChange = {(v) => handleChange("repeatpwd" , v)} type = "password" >确认口令</InputItem>
                        <RadioItem checked = {state.type === "release" }
                            onClick = {() => handleChange("type" , "release")}
                            >任务发布者</RadioItem>
                        <RadioItem checked = {state.type === "accept"} 
                            onClick = {() => handleChange("type" , "accept")}
                        >接受任务者</RadioItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type = "primary" onClick = {this.Register}>注册</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick = {() => this.props.history.push("/login")}>已有用户</Button>
                </WingBlank>
            </div>
        )
    }
}

Register = connect(state => state.user , {register})(Register)
Register = Hoc(Register)
export default Register