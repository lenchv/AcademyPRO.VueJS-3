import userService from '../../services/userService';

const getters = {
    filteredUsers: state => query => {
        return state.map;
    },

    getUserById: state => id => {
        return new Promise((resolve, reject) => {
            if (state.data[id]) {
                resolve(state.data[id]);
            } else {
                userService.getUserById(id).then(resolve).catch(reject);
            }
        });
    }
};

export default getters;
