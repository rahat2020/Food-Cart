import foodlist from '../../FakeData/FakeData'

const initialState = {
    foodList: foodlist,

}

const foodReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_TO_FOOD_LIST' : {
            return state 
            // return state + action.payload
        }
        case 'REMOVE_FROM_FOOD_LIST' : {
            return state 
            // return state - action.payload
        }
        default : {
            return state 
        }
    }
}

export default foodReducer;