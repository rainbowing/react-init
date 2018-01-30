import React from 'react'
import { connect } from 'react-redux';
import { counterType } from '../redux/home'

@connect(
	state=>({counter: state.counter}),
	counterType
)

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>num:{this.props.counter.num}</h1>
                <button onClick={()=>this.props.addNum()}>num加一</button>
                <button onClick={()=>this.props.minuxNum()}>num减一</button>
                <button 
				    onClick={()=>this.props.addNumAsync()}>
				    num两秒后加一
				</button>
            </div>
        );
    }
}

export default Home