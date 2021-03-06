const initialState = { caughtCounter: new Map() }


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            
            const increment = (counterMap, id) => {
                if (counterMap.has(id)) {
                    counterMap.get(id).count++;
                } else {
                    counterMap.set(id, {
                        pokedexid: id,
                        count: 1,
                    });
                }
                return counterMap;
            }
            return {

                ...state,
                caughtCounter: increment(state.caughtCounter, action.payload.pokedexId),
            };
        case 'DECREMENT':
            const decrement = (counterMap, id) => {                
                if (counterMap.has(id)) {
                    counterMap.get(id).count--;
                }
                return counterMap;
            
            }
            return {
                ...state,
                caughtCounter : decrement(state.caughtCounter, action.payload.pokedexId),

            };
        default:
            return state;
    }
}
export default counterReducer;