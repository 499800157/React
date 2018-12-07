import React from 'react'
import { Route , Switch} from "react-router-dom"
import { NavBar , WingBlank , WhiteSpace ,TabBar } from "antd-mobile"
import { connect } from "react-redux"

import Accept from "../accept/accept"
import Release  from "../release/release"
import User from "../user/user"

function Msg (){
    return <h2>Msg</h2>
}

class Dashboard extends React.Component{

    render(){
        console.log(this.props)
        const { type } = this.props

        const navList = [
            {
                path: "/accept",
                title:"任务列表",
                text:"任务列表",
                icon:"release",
                component:Accept,
                hide:type === "release"
            },
            {
                path: "/release",
                title:"用户列表",
                text:"用户列表",
                icon:"accept",
                component:Release,
                hide:type === "accept"
            },
            {
                path : "/msg",
                text : "消息",
                icon : "msg",
                title : "消息列表",
                component : Msg,
            },
            {
                path : "/me",
                text : "我",
                icon : "user",
                title : "个人中心",
                component : User,
            },
        ]
        const {pathname} =  this.props.location
        const activeList = navList.find( (v) => pathname === v.path )
        console.log(activeList)
        const showList = navList.filter( (v) => {
            return !v.hide
        })


        return (
            <div>
                <NavBar>{activeList.title}</NavBar>
                <div style = {{marginTop : 45 , marginBottom : 55}}>
                    <Route component = {activeList.component}></Route>
                </div>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    >
                    {
                        showList.map( (item,index) => (
                            <TabBar.Item
                                title={item.text}
                                key={index}
                                icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+require(`../img/${item.icon}.png`)+') center center /  21px 21px no-repeat' }}
                                />
                                }
                                selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+require(`../img/${item.icon}-active.png`)+') center center /  21px 21px no-repeat' }}
                                />
                                }
                                selected={pathname === item.path}
                                badge={1}
                                onPress={() => {
                                    this.props.history.push(item.path)
                                }}
                                data-seed="logId"
                            >
                            </TabBar.Item>   
                        ))
                    }
                
                </TabBar>

            </div>
        )
    }
}
Dashboard = connect( state => state.user )(Dashboard)
export default Dashboard