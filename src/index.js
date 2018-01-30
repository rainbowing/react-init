import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './assets/images/logo.svg';
import registerServiceWorker from './registerServiceWorker';

//router
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//component
import Products from './component/products'
import Cart from './component/cart'
import Home from './component'

//redux
import {createStore,applyMiddleware} from 'redux';	//applyMiddleware是thunk需要的函数
import {Provider} from 'react-redux';//这个组件使得它内部的组件可以使用connect()
import reducer from "./redux";
import thunk from 'redux-thunk';	//引入thunk

const store = createStore(reducer,applyMiddleware(thunk));	//使用applyMiddleware包装下

class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
	    	<Router>
		      <div className="App">
		        <header className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1 className="App-title">Welcome to React</h1>
		        </header>
		        <div>
		        	<ul>
		        		<li><Link to="/">home</Link></li>
				        <li><Link to="/products">products</Link></li>
				        <li><Link to="/cart">cart</Link></li>
				      </ul>
		        </div>
		        <div>
		        	<Route exact path="/" component={Home}/>
				      <Route exact path="/products" component={Products}/>
				      <Route path="/cart" component={Cart}/>
		        </div>
		      </div>
	      </Router>
	    </Provider>  
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
