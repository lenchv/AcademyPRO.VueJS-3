import userService from '../../services/userService';

const actions = {
    fetchUsers({ commit }) {
        userService.getUsers().then(users => {
            commit('SET_USERS', users);    
        });
    },

    addUser({ commit }, data) {
        userService.addUser(data).then(user => {
            commit('ADD_USER', user);
        });
    },

    editUser({ commit }, user, data) {
        userService.editUser(user, data).then(user => {
            commit('EDIT_USER', user);
        });
    },

    deleteUser({ commit }, user) {
        userService.deleteUser(user).then(() => {
            commit('DELETE_USER', user.id);
        });
    }
};

export default actions;
