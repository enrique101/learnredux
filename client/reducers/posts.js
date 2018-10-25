function posts(state = [], action){
    switch(action.type){
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[1], likes : state[i].likes + 1},
                ...state.slice(i+1),
            ]
        default: 
            return state;

    }
    return state;
}

export default posts;