const actions = {
    fetchUsers({ commit }) {
        commit('SET_USERS', {
            1: {
                id: 1,
                name: 'Ivan',
                email: 'ivan@mail.com'
            },
            2: {
                id: 2,
                name: 'Petro',
                email: 'petr@mail.com'
            }
        });
    },

    addUser({ commit }, data) {
        commit('ADD_USER', data);
    }
};

export default actions;
