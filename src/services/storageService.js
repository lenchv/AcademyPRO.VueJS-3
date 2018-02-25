const persistanceData = {
    users: [
        { id: 1, name: 'Ivan', email: 'ivan@mail.com' },
        { id: 2, name: 'Petro', email: 'petro@mail.com' }
    ]
};

export default {
    addUser(user) {
        return new Promise((resolve, reject) => {
            persistanceData['users'].push(user);

            resolve(user);
        });
    },
    editUser(user) {
        return new Promise((resolve, reject) => {
            const i = persistanceData['users'].findIndex(data => data.id == user.id);

            if (i !== -1) {
                persistanceData['users'][i] = user;

                resolve(user);
            } else {
                reject();
            }
        });
    },
    deleteUser(user) {
        return new Promise((resolve, reject) => {
            const i = persistanceData['users'].findIndex(data => data.id == user.id);
            
            if (i !== -1) {
                persistanceData['users'].splice(i, 1);

                resolve();
            } else {
                reject();
            }
        });
    },
    getUserById(id) {
        return new Promise((resolve, reject) => {
            resolve(persistanceData['users'].find(data => data.id == id));
        });
    },
    getUsers() {
        return new Promise((resolve, reject) => {
            resolve(persistanceData['users']);
        });
    }
};