import storageService from './storageService';

export default {
    id: 1,

    getId() {
        return this.id++;
    },

    getUser(data) {
        return {
            id: data.id || this.getId(),
            name: data.name,
            email: data.email
        };
    },

    addUser(data) {
        return storageService.addUser(this.getUser(data));
    },

    editUser(user, data) {
        user.name = data.name;
        user.email = data.email;

        return storageService.editUser(user);
    },

    deleteUser(user) {
        return storageService.deleteUser(user);
    },

    getUserById(id) {
        return storageService.getUserById(id);
    },

    getUsers() {
        return new Promise((resolve, reject) => {
            storageService.getUsers()
                .then(data => {
                    let users = {};

                    data.forEach((user) => {
                        users[user.id] = user;
                    });

                    resolve(users);
                })
                .catch(reject);
        });        
    }
};
