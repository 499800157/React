import React from 'react'
import { List  , WhiteSpace ,Grid} from "antd-mobile"
import PropsTypes from "prop-types"


class SelectAvatar extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        icon : "",
        text: ""
    }
    static propsTypes = {
        avatarClick : PropsTypes.func.isRequired
    }
    handleClick = (ele , index) => {
        this.setState({
            icon : ele.icon,
            text : ele.text
        })

        this.props.avatarClick(ele.text)
    }

    render(){
        const gridHeader = this.state.icon ? (
            <div>
                <span>已选择头像</span>
                <img  src = {this.state.icon} style = {{width : 18 ,height:16,verticalAlign :"top",marginLeft:5}}  alt=""  />
            </div>
        )  : <div>请选择头像</div>

        const data = "1,2,3,4,5,6".split(",").map((item)=>{
            return {
                icon : require(`../img/${item}.jpg`),
                text : item
            }
        })
        return (
            <div style = {{marginTop:45}}>
                <List renderHeader = {() => gridHeader}>
                    <Grid data={data} activeStyle={false} columnNum = {3} onClick = {this.handleClick}></Grid>
                </List>
            </div>
        )
    }
}

export default SelectAvatar