const INCREASE_PRODUCT = 'INCREASE_PRODUCT'
const DECREASE_PRODUCT = 'DECREASE_PRODUCT'

const inProduct = (data) => ({ type: INCREASE_PRODUCT,data:data });
const deProduct = () => ({ type: DECREASE_PRODUCT });

let initState = {
	
}

export function products(state = initState,action){
	switch (action.type){
		case INCREASE_PRODUCT:
			Object.keys(action.data).forEach((key)=>{
				if (state[key]){
					state[key].quantity += action.data[key].quantity
				}else{
					state = {...state,[key]:action.data[key]}
				}
			})
			return state;
		case DECREASE_PRODUCT:
			return state;
		default:
			return state
	}
}

export const productsType = {
	inProduct,
	deProduct
}
