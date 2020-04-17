import React, { Component } from 'react';
import './style.css';

class OrderItem extends Component {

    render() {
        return (
            <div className='orderItem'>
                <div className='orderItem_img'>
                    <img alt='这是一个图片' src={process.env.PUBLIC_URL + this.props.imageUrl}/>
                </div>   
                <div className='orderItem_product'>
                    <div className='orderItem_productName'>{this.props.productName}</div>
                    <div className='orderItem_shop'>{this.props.shopName}</div>
                    <div className='orderItem_detail'>
                        <div className='orderItem_price'>￥{this.props.price}</div>
                        <div><button className={this.props.isEvaluate ? "orderItem__btn_gray":"orderItem__btn_red"}>{this.props.isEvaluate ? "已评价":"评价"}</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;