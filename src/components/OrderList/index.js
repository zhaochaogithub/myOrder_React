import React, { Component } from 'react';
import OrderItem from '../OrderItem';

class OrderList extends Component {

    constructor(){
        super();
        this.state = {list:[]};
    }

    componentDidMount() {
        fetch('/data.json').then(res => {
            return res.json();
        }).then(data => {
            this.setState({list:data});
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map(item => <OrderItem key={item.id} {...item} />)
                }
            </div>
        );
    }
}

export default OrderList;