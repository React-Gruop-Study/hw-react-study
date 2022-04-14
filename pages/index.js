import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import shoeData from '../data/data.js';
import Router from 'next/router';

export default function App() {

  	let [shoes, shoes변경] = useState(shoeData);

	const SendQuery = (shoe) => {
		Router.push({
		pathname: '/detail',
		query: { shoe: JSON.stringify(shoe) },
		}, '/detail/'+shoe.id);
	}; 
	
	return (
		<div className="App">
			<div className={styles.background}>
				<h1>20% Season Off</h1>
			</div>
			<div className='container'>
				<div className='row'>
				{
					shoes.map((shoe, i)=>{
						return <SheosComponent shoe={ shoe } i={ i } key={ i }/>
					})
				}
				</div>
			</div>
		</div>
	)
	
	function SheosComponent (props) {
		return	(
			<div className="col-md-4">
				<img src={'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) +'.jpg'} 
					width="100%"
					onClick={ ()=>{SendQuery(props.shoe)} }
				/>
				<h4 onClick={ ()=>{SendQuery(props.shoe)} }>{ props.shoe.title }</h4>
				<p>{ props.shoe.content }</p>
			</div>
		)
	}
}




