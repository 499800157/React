import React from 'react'
import { Card ,WingBlank, WhiteSpace} from "antd-mobile"
import PropTypes from "prop-types"


class CardList extends React.Component{

    static propTypes = {
        userlist:PropTypes.array.isRequired
    }

    render(){
        return (
            <WingBlank>
            {
                this.props.userlist ? this.props.userlist.map((item , index)=>(
                <div key = {index}>
                    <WhiteSpace></WhiteSpace>
                    <Card>
                        <Card.Header
                            title={item.user}
                            thumb={require(`../img/${item.avatar}.jpg`)}
                            thumbStyle = {{width:30}}
                            extra={<span>{item.title}</span>}
                        />
                        <Card.Body>
                            <div>{item.desc}</div>
                        </Card.Body>
                    </Card>
                    
                </div>
                )) : ""
            }
            </WingBlank>
        )
    }
}

export default CardList