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

//redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';//这个组件使得它内部的组件可以使用connect()
import reducer from "./redux";

const store = createStore(reducer);

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
				        <li><Link to="/products">products</Link></li>
				        <li><Link to="/cart">cart</Link></li>
				      </ul>
		        </div>
		        <div>
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
