import Router from 'next/router';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from '../styles/Detail.module.scss';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";
import HeadInfo from '../components/HeadInfo.js';
import { connect } from 'react-redux';


let Box = styled.div`
    padding: 5px;
`;
let Name = styled.h4`
    font-size: 25px;
    color: ${ props => props.color }
`



function Detail(props) {

    // 컴포넌트가 mount 되었을 때
    // 컴포넌트가 update 될 때
    // 특정 코드를 실행할 수 있음
    let [alert, setAlert] = useState(true);
    let [inputData, setInputData] = useState('');
    let [clickTab, setClickTab] = useState(0);
    let [tabSwitch, setTabSwitch] = useState(false);

    useEffect(()=>{
        let alertTimer = setTimeout(()=>{
            setAlert(false);
        }, 2000);
        return ()=>{ clearTimeout(alertTimer) } //언마운트될때
    },[alert]); //[]안에 아무것도 없으면 처음 한번만 useEffect 실행됨 일종의 trick

    //useEffect는 순서대로 실행됨
    // useEffect(()=>{

    // })
	const SendQuery = () => {
		Router.push({
		pathname: '/Cart',
		}, '/Cart/');
	}; 

    const router = useRouter();
    const shoe = JSON.parse(router.query.shoe);
    const stock = router.query.stock;
	return (
        <div className="container">
            <HeadInfo title="Sibal"/>
            <Box>
                <Name className={styles.red}>Detail</Name>
                {/* <Name color={ 'blue' }>Detail</Name> */}
            </Box>

            <input onChange={ (e)=>{ setInputData(e.target.value) } }/>
            { inputData }
            {
                alert ?
                <Alert />
                :
                null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes'+(shoe.id+1)+'.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ shoe.title }</h4>
                    <p>{ shoe.content }</p>
                    <p>{ shoe.price }</p>
                    <Info stock={ stock } id={ shoe.id }/>
                    <button className="btn btn-primary"
                        onClick={()=>{
                            props.dispatch({ type: '항목추가', payload: {shoe: shoe} });
                        }}>장바구니 담기</button> 
                    <button className="btn btn-warning" 
                        style={{'marginLeft' : '5px'}}
                        onClick={() => Router.back()}
                    >뒤로가기</button> 
                    <button className="btn btn-warning" 
                        style={{'marginLeft' : '5px'}}
                        onClick={() => { SendQuery() }}
                    >장바구니 Go</button> 
                </div>
            </div>
            
            <Nav variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{ setTabSwitch(false); setClickTab(0) }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{ setTabSwitch(false); setClickTab(1) }}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={ tabSwitch } classNames="wow" timeout={ 500 }>
                <TabContent clickTab={ clickTab } setTabSwitch={ setTabSwitch } tabSwitch={ tabSwitch }/>
            </CSSTransition>

        </div> 
	)
}

function TabContent(props){

    useEffect(()=>{
        props.setTabSwitch(true);
    })

    if (props.clickTab === 0){
      return <div>내용0</div>
    } else if (props.clickTab === 1){
      return <div>내용1</div>
    } else if (props.clickTab === 2){
      return <div>내용2</div>
    }
  }

const Info = (props)=>{
    return (
        <p>재고: {props.stock[props.id]}</p>
    )
}

const Alert = ()=>{
    return (
        <div className={styles.myAlert}>
            <p>재고가 얼마 남지 않았습니다.</p>
        </div>
    )

}

function stateToProps(state){
    console.log(state);
    return {
        cartState: state.CartState,
        state2: state.reducer2
    }
}

export default connect(stateToProps)(Detail);
