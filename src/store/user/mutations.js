const mutations = {
    ADD_USER (state, user) {
        state.data[user.id] = user;
        state.map.push(user.id);
    },
    
    DELETE_USER (state, userId) {
        const i = state.map.indexOf(userId);

        state.map = [...state.map.slice(0, i), ...state.map.slice(i + 1, state.map.length)];
        state.data = {...state.data};

        delete state.data[userId]
    },
    
    EDIT_USER (state, user) {
        state.data = {...state.data};
        state.data[user.id] = {...user};
    },

    SET_USERS (state, users) {
        state.data = users;
        state.map = Object.keys(users);
    }
};

export default mutations;
