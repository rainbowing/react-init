import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { productsType } from '../../redux/products'

class Cart extends React.Component{
	render (){
		let data = this.props.products
		let node = [];
		let totalCost = 0;
		Object.keys(data).forEach((key,index)=>{
			node.push(
				<li key={index}>
					{data[key].pro_name}  ----  {data[key].quantity} --- {data[key].price}
				</li>
			)
			totalCost += data[key].quantity * data[key].price
		})
		return (
			<div>
				<h1>Cart</h1>
				<ul>{node}</ul>
				<div>总价:{totalCost}</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(productsType, dispatch)
})

export default connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Cart)