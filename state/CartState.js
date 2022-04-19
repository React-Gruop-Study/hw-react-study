let defaultState = 
	[
        {id: 0, title: '멋진신발', content: '멋짐', price: 50000, quan: 2},
        {id: 1, title: '멋진신발1', content: '멋짐1', price: 50000, quan: 5},
        {id: 2, title: '멋진신발2', content: '멋짐2', price: 50000, quan: 8},
	]

function reducer(state = defaultState, action){ // es6 신문법으로 기본 parameter값 설정해놓고 인자값 안넘어오면 기본값으로 사용

    if(action.type === '항목추가') {
        let copyState = [...state];
        let ad = copyState.findIndex((e)=>e.id === action.payload.shoe.id);
        if(copyState.findIndex((e)=>e.id === action.payload.shoe.id) === -1){
            if(!action.payload.shoe.quan){
                console.log('수량넣음');
                action.payload.shoe.quan = 50;
            }
            copyState.push(action.payload.shoe);
            console.log('추가됨');
        } else {
            console.log('이미 담음');
        }

        return copyState;
    }

	if(action.type === '수량증가') {
		let copyState = [...state];
		copyState[action.payload.i].quan++;
		return copyState;
	} else if(action.type === '수량감소') {
		let copyState = [...state];
		copyState[action.payload.i].quan < 1 ? copyState[action.payload.i].quan : copyState[action.payload.i].quan--;
		return copyState;
	} else {
		return state; // 항상 state값 반환해야함
	}
}


export default reducer;
