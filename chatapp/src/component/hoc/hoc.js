import React from "react"

export default function Hoc( Comp ) {
    return class HocWrap extends React.Component{
        constructor (props){
            super(props)
            this.state = {}

        }

        handleChange  = (key , val ) =>{
            this.setState({
                [key] : val
            })
        }

        render(){
            return <Comp  state = { this.state }  handleChange = { this.handleChange } { ...this.props }  ></Comp>
        }
    }
}