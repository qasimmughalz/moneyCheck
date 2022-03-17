


export function reducer(state, action){
    switch(action.type){
        case 'add':
            return [...state, action.payload.data]  
        default:
            return state;
    }
} 
