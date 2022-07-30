const initialData = {
    list:[]
}

const productsReducer =(state=initialData,action) =>{
    switch(action.type){
        case "PRODUCTS":
            return{
                ...state,
                list: [
                    ...state.list,
                    action.payload  
                ]
            }
        default :
            return state;
    }

}
export default productsReducer;