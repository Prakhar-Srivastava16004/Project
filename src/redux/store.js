let products = () => {
    console.log(sessionStorage.getItem("products"));
    return sessionStorage.getItem("products")? JSON.parse(sessionStorage.getItem("products")) : []
}
const initialState = {
    productList: products(),
};

export const getProductList = store => store.productList;

const myReducer = (state = initialState, action) => {

    const newState = {...state};
    if(action.type === 'ADD'){
        newState.productList.push(action.value);
        sessionStorage.setItem("products",JSON.stringify(newState.productList));
    }
    return newState;
}

export default myReducer;