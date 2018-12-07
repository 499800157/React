import React from 'react'
import CardList from "../cardList/cardList"
import { connect } from "react-redux"

import { getUserLIst } from "../../redux/chat.redux"

class Release extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUserLIst("accept")
    }
    render(){
        const {userlist} =  this.props
        return (
            <div>
                <CardList  userlist = {userlist} ></CardList>
            </div>
        )
    }
}

Release = connect( state => state.chat , {getUserLIst})(Release)
export default Release