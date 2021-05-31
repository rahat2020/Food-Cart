
export const addToFoodList = (payload) => {

    return {
        type: 'ADD_TO_FOOD_LIST',
        payload,
    }
}

export const removeFromFoodList = (payload) => {

    return {
        type: 'REMOVE_FROM_FOOD_LIST',
        payload,
    }
}