import React from 'react'
import { List , Button , WhiteSpace,InputItem,TextareaItem ,NavBar} from  "antd-mobile"
import PropsTypes from "prop-types"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import SelectAvatar from "../selectAvatar/selectAvatar"
import Hoc from "../hoc/hoc"
import { infoUpdate } from "../../redux/user.redux"

class Acceptinfo extends React.Component{

    state = {
        avatar : ""
    }
    static propsType = {
        handleChange :PropsTypes.func.isRequired,
        state :PropsTypes.object.isRequired
    }

    save = () => {
        console.log(this.props.state)
        this.props.infoUpdate(this.props.state)
    }
    
    render(){
        const {handleChange , redirectTo} = this.props
        const {pathname} = this.props.location

        return (
            <div>
                    {redirectTo && redirectTo !== pathname ? <Redirect to = {this.props.redirectTo}></Redirect>  : null }
                    <NavBar
                        mode="dark"
                        >accept完善信息</NavBar>
                    <SelectAvatar avatarClick = { (v)  => {handleChange("avatar" , v)}} ></SelectAvatar>
                    <WhiteSpace></WhiteSpace>
                    <List>
                        <InputItem onChange = {(v) => {handleChange("title",v)}}>职称</InputItem>
                        <TextareaItem title = "简介" onChange = {(v) => {handleChange("desc",v)}} autoHeight></TextareaItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type = "primary" onClick = {this.save}>保存</Button>
            </div>
        )
    }
}
Acceptinfo = connect(state => state.user ,{infoUpdate})(Acceptinfo)
export default Hoc(Acceptinfo)