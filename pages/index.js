import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function App() {

	let [게시물, 게시물변경] = useState([{'제목' : '남자 코트 추천', '따봉' : 0}, {'제목' : '강남 우동 맛집', '따봉' : 0}]);

	let [modal, modal변경] = useState(false);

	let [선택게시물, 선택게시물변경] = useState(0);

	function 따봉관리(index){
		var newArray = [...게시물];
		newArray[index].따봉 = newArray[index].따봉 + 1 ;
		console.log(newArray);
		게시물변경( newArray );
	}
	function modal관리(index){
		
		// modal ? modal변경(false) : modal변경(true);
		modal변경(!modal);
		선택게시물변경(index);
		
	}
	return (
		<div className="App">
			<div className={styles.blackNav}>
				<div>꺼지라그램</div>
			</div>
			{
				게시물.map((글,index)=>{
					return	(
						<div className={styles.list}>
							<h3 onClick={ ()=>{ modal관리(index) } }>{ 글.제목 }</h3>
							<span onClick={ ()=>{ 따봉관리(index) } }>👍</span> { 글.따봉 }
							<p>2월 17일 발행</p>
							<hr/>
						</div>
					)
				})
			}


			{
				modal
				? <Modal 게시물={ 게시물 } 선택게시물={ 선택게시물 }/>
				: null
			}

		</div>
	)
}

function Modal(props){
	return (
		<div className={styles.modal}>
			<h2>{ props.게시물[props.선택게시물].제목 }</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}