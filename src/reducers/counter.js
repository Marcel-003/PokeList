const initialState = { caughtCounter: new Map() }


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            
            const increment = (counterMap, id) => {
                if (counterMap.has(id)) {
                    console.log("ada kok")
                    counterMap.get(id).count++;
                } else {
                    console.log("gada jir")
                    counterMap.set(id, {
                        pokedexid: id,
                        count: 1,
                    });
                }
                return counterMap;
            }
            // if (state.pokedexId === action.payload.pokedexId) {
            //     return [
            //         ...state,
            //         state[action.payload.pokedexId].count + 1
            //     ];
            // } else {
            //     console.log(state, "ini state");
            //     return [
            //         ...state,
            //         {
            //             pokedexId: action.payload.pokedexId,
            //             count: 1
            //         }
            //     ];
            // }

            return {

                ...state,
                caughtCounter: increment(state.caughtCounter, action.payload.pokedexId),
                // {
                //     pokedexId: action.payload.pokedexId,
                //     count: 1
                // }
            };
        case 'DECREMENT':
            const decrement = (counterMap, id) => {
                console.log("masuk decrement")

                console.log(id);
                if (counterMap.has(id)) {
                    console.log("ada kok")
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