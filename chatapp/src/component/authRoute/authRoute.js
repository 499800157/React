import React from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"
import { connect} from "react-redux"

import { authSuccess } from "../../redux/user.redux"

class AuthRoute extends React.Component{

    componentDidMount(){
        console.log(this.props)
        const publicList = [ "/login" , "/register"]
        const pathname = this.props.location.pathname
        if(publicList.includes(pathname)){
            return null
        }

        axios.get("/user/info")
            .then( res => {
                console.log(res.data)
                if(res.status === 200 && res.data.code === 0){
                    // 更新用户信息
                    this.props.authSuccess(res.data.data)
                    console.log(res.data.data)
                }else{
                    this.props.history.push("/login")
                }
            })
    }
    render(){
        return null
    }
}

AuthRoute = connect( state => state.user , {authSuccess})(AuthRoute)
export default withRouter(AuthRoute)