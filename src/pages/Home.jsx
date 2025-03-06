import StoreProvider from '../hooks/useGlobalReducer';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'; 

function Home() {
	return (

		<Provider store={store}>

		  
		</Provider>
	  );
	}

export default Home;