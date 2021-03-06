import React from 'react'
import CardList from "../cardList/cardList"
import { connect } from "react-redux"

import { getUserLIst } from "../../redux/chat.redux"

class Accept extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUserLIst("release")
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

Accept = connect( state => state.chat , {getUserLIst})(Accept)
export default Accept