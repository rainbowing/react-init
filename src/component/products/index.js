import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { productsType } from '../../redux/products'

class Products extends React.Component{
	constructor (props){
		super(props)
		this.state = {
			productsJson:{}
		}
	}
	buy (){
		let productsJson = {}
		let quantity_a = parseInt(this.refs.pro_a.value);
		let quantity_b = parseInt(this.refs.pro_b.value);
		
		if (quantity_a){
			productsJson.pro_a = {
				'pro_name':'pro_a',
				'price':100,
				'quantity':quantity_a
			}
		}
		if (quantity_b){
			productsJson.pro_b = {
				'pro_name':'pro_b',
				'price':600,
				'quantity':quantity_b
			}
		}
		this.setState({
			productsJson
		})
		this.props.actions.inProduct(productsJson);
	}
	render (){
		return (
			<div>
				<h1>products</h1>
				<div>
					<div>
						<span>商品A: $100 </span> <input ref='pro_a' placeholder="请输入件数"/>
						<br/>
						<span>商品B: $600 </span> <input ref='pro_b' placeholder="请输入件数"/>
						<br/>
						<button onClick={this.buy.bind(this)}>购买</button>
						<br/>
						{'---' + this.props.todos}
						<br/>
						{this.props.counter.num}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  products: state.products,
  todos:	state.todos,
  counter:  state.counter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(productsType, dispatch)
})

export default connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Products)