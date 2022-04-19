import React, { useEffect } from 'react';
import { Table, Alert } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(){
    useEffect(()=>{
        
    },[]);
    let cartState = useSelector((state)=>state.CartState);
    let reducer2 = useSelector((state)=>state.reducer2);
    let dispatch = useDispatch();
    return (
        <div>
            <Table responsive>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
                </tr>
                {
                    cartState.map((item, i)=>{
                        return (
                            <tr item={ item } key={ item.id }>
                                <td>{ item.id }</td>
                                <td>{ item.title }</td>
                                <td>{ item.quan }</td>
                                <td>
                                    <button onClick={()=>{ dispatch({ type: '수량증가', payload: {i: i} }) }}>+</button>
                                    <button onClick={()=>{ dispatch({ type: '수량감소', payload: {i: i} }) }}>-</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </Table>
            {
                reducer2 === true ? 
                (
                    <Alert style={{'textAlign': 'center'}}>
                        <p>지금 구매하시면 신규할인 20%</p>
                        <button className="btn btn-warning" onClick={()=>{ dispatch({ type: 'closeAlert' }) }}>닫기</button>
                    </Alert>
                )
                :
                null
            }
            <button className="btn btn-warning" onClick={()=>{ history.back(); }}>뒤로가기</button>
        </div>
    )
}

// function stateToProps(state){
//     console.log(state);
//     return {
//         cartState: state.CartState,
//         state2: state.reducer2
//     }
// }

// export default connect(stateToProps)(Cart);
export default Cart;
