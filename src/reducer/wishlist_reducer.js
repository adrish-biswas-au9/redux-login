export default function(state=[],action){
    switch(action.type){
        case 'WISHLIST':
            console.log(action.payload,'inside get reducer file')
            return [...state]
        case 'WISHLIST_ADD':
            console.log(action.payload,'inside add reducer file')
            return [ ...state, action.payload ]
        case 'WISHLIST_DELETE':
            console.log(action.payload,'inside delete reducer file')
            const wishlist = state.filter(function(item) { //deleting the particular data in action.payload by using filter method
                return item !== action.payload;
            });
            return [...wishlist];
        default:
            return state
    }
}