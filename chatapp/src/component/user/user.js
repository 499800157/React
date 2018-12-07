import React from 'react'
import { Result } from  "antd-mobile"
import { connect } from "react-redux"


class User extends React.Component{
    render(){
        console.log(this.props)
        const props = this.props
        console.log(props.avatar)
        return (
            props.user ? (
                <div>
                <Result
                    img = {<img  src = {require(`../img/${props.avatar}.jpg`)} style = {{width : 50}}/>}
                    title= {props.user}
                    message={props.company ? props.company : null}
                />
            </div>
            ) : ""
        )
    }
}

User = connect(state => state.user)(User)
export default User