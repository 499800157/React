import React from 'react'
import { Result , List ,WhiteSpace , Modal} from  "antd-mobile"
import { connect } from "react-redux"
import browserCookies from "browser-cookies"
import { Redirect } from "react-router-dom"

import { logout } from "../../redux/user.redux"

class User extends React.Component{
    
    
    logout = () => {
        const alert = Modal.alert
        console.log("退出")
        alert("注销","确定要退出吗？",[
            {text:"取消",onPress : () => console.log("cancel")},
            {text:"确定",onPress : () => {
                console.log("成功")
                browserCookies.erase("userid")
                this.props.logout()
            }}
        ])
        
    }

    render(){
        console.log(this.props)
        const props = this.props
        console.log(props.avatar)
        const Item = List.Item
        const Brief = Item.Brief

        return (
            props.user ? (
                <div>
                    <Result
                        img = {<img  src = {require(`../img/${props.avatar}.jpg`)} style = {{width : 50}}/>}
                        title= {props.user}
                        message={props.company ? props.company : null}
                    />
                    <List renderHeader = { () => "简介"}>
                        <Item multipleLine>
                            {props.title}
                            {
                                props.desc.split("\n").map((v) => {
                                    return <Brief key = {v}>{v}</Brief>
                                })
                            }
                            {props.money ? <Brief >{props.money}</Brief> : null }
                        </Item>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <List>
                        <Item onClick = {this.logout}>退出登录</Item>
                    </List>
            </div>
            ) : <Redirect to = {props.redirectTo}></Redirect>
        )
    }
}

User = connect(state => state.user ,{logout})(User)
export default User