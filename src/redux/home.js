const ADD_NUM = 'ADD_NUM'
const MINUS_NUM = 'MINUS_NUM'

//reducer
const initState = {
   num:10
}
export function counter(state=initState, action){
   switch (action.type){
       case ADD_NUM:
       		console.log(action)
           return {...state, num:state.num+1}
       case MINUS_NUM:
           return {...state, num:state.num-1}
       default:
           return state
   }
}

//action creater
const  addNum = (data) => ({type:ADD_NUM,data:data})
const  minuxNum = () => ({type:MINUS_NUM})
const  addNumAsync = () => {
	return dispatch=>{
		setTimeout(()=>{
          	dispatch(addNum({data:'data'}));
       	}, 2000)
	}
}

export const counterType = {
	addNum,
	minuxNum,
	addNumAsync
}