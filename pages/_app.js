import '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CartState from '../state/CartState.js';                   

let alertState = true;

function reducer2(state = alertState, action){
	if(action.type === 'closeAlert') {
		state = false;
		return state
	} else {
		state = true;
		return state
	}
}
   
let store = createStore(combineReducers({CartState,reducer2}));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout /> 
      <Provider store={ store }>
        <Component {...pageProps} /> 
      </Provider>
    </>
  )
}

export default MyApp
