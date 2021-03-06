export const catchMon = (pokemon) => {
    return {
        type: 'CATCH',
        payload: {
            nickname: pokemon.name,
            detail: pokemon
        }
    };
};

export const releaseMon = (pokemon) => {
    return {
        type: 'RELEASE',
        payload: {
            id: pokemon.id,
        }
    };
};

export const increment = (pokemon) => {
    return {
        type: 'INCREMENT',
        payload: {
            pokedexId: pokemon.id
        }
    };
};

export const decrement = (pokemon) => {
    return {
        type: 'DECREMENT',
        payload: {
            pokedexId: pokemon.detail.id
        }
    };
};