let lastId = 0;
const mylistReducer = (state = [], action) => {
    switch (action.type) {
        case 'CATCH':
            return [
                ...state,
                {
                    id: ++lastId,
                    nickname: action.payload.nickname,
                    detail: action.payload.detail
                }
            ];
        case 'RELEASE':
            return state.filter(pokemon => pokemon.id !== action.payload.id);
        default:
            return state;
    }
}

export default mylistReducer;