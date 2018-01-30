import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { counterType } from '../redux/home'
class Home extends React.Component{
	
	addNum(){
	    this.props.actions.addNum();
	}
    minusNum(){
       this.props.actions.minuxNum();
    }
    render(){
        return(
            <div>
                <h1>num:{this.props.counter.num}</h1>
                <button onClick={()=>this.addNum()}>num加一</button>
                <button onClick={()=>this.minusNum()}>num减一</button>
                <button 
				    onClick={()=>this.props.actions.addNumAsync()}>
				    num两秒后加一
				</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(counterType, dispatch)
})

export default connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Home)
