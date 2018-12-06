import React from 'react'
import { Route , Switch} from "react-router-dom"
import { NavBar , WingBlank , WhiteSpace ,TabBar } from "antd-mobile"
import { connect } from "react-redux"

function Accept (){
    return <h2>接受着展示任务列表</h2>
}

function Release (){
    return <h2>发布任务者展示人物列表</h2>
}

function User (){
    return <h2>User</h2>
}

function Msg (){
    return <h2>Msg</h2>
}

class Dashboard extends React.Component{

    state = {

    }

    render(){
        console.log(this.props)
        const { type } = this.props

        const navList = [
            {
                path: "/accept",
                title:"发布任务列表",
                text:"任务列表",
                icon:"release",
                component:Accept,
                hide:type === "release"
            },
            {
                path: "/release",
                title:"能力者列表",
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
                    <Route component = {activeList.component}></Route>
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