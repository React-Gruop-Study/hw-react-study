import styles from '../styles/Home.module.css';
import React, { useContext, useState } from 'react';
import shoeData from '../data/data.js';
import Router from 'next/router';
import axios from 'axios';

let stockContext = React.createContext();

export default function App() {

  	let [shoes, setShoes] = useState(shoeData);
	let [stock, setStock] = useState([10, 11, 12]);

	const SendQuery = (shoe) => {
		Router.push({
		pathname: '/Detail',
		query: { shoe: JSON.stringify(shoe), stock: stock, setStock: setStock },
		}, '/Detail/'+shoe.id);
	}; 
	
	return (
		<div className="App" style={{textAlign: 'center'}}>

			<div className={styles.background}>
				<h1>20% Season Off</h1>
			</div>
			<div className='container'>
				<stockContext.Provider value={ stock }>
					<div className='row'>
					{
						shoes.map((shoe, i)=>{
							return <SheosComponent shoe={ shoe } i={ i } key={ i }/>
						})
					}
					</div>
				</stockContext.Provider>
			</div>
			<button className="btn btn-primary" onClick={ ()=>{
				
				axios.get('https://codingapple1.github.io/shop/data2.json')
				.then((result)=>{ 
					// let newArray = [...shoes];
					// result.data.forEach((item, i) => {
					// 	newArray.push(item);
					// });
					// setShoes(newArray);
					setShoes([...shoes, ...result.data]);
				 })
				.catch(()=>{  
					console.log('실패');
				});

			} }>더보기</button>
		</div>
	)
	
	function SheosComponent (props) {

		let stock = useContext(stockContext);

		return	(
			<div className="col-md-4" onClick={ ()=>{SendQuery(props.shoe)} }>
				<img src={'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) +'.jpg'} 
					width="100%"
				/>
				<h4>{ props.shoe.title }</h4>
				<p>{ props.shoe.content }</p>
				<Test i={props.i}/>
			</div>
		)
	}

	function Test(props){
		let stock = useContext(stockContext);
		return (
			<p>{ stock[props.i] }</p>
		)
	}
}




