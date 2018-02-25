<template>
    <div>
        <h1>User List</h1>
        <user-item v-for="userId in users" 
            :key="userId"
            :user="usersData[userId]"
        />
    </div>
</template>


<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import UserItem from './UserItem';

export default {
    components: {
        UserItem
    },

    data() {
        return {
        };
    },

    methods: {
        ...mapActions('user', [
            'fetchUsers',
        ]),
    },

    computed: {
        ...mapGetters('user', [
            'filteredUsers',
        ]),

        ...mapState('user', {
            usersData: 'data'
        }),

        users() {
            return this.filteredUsers('');
        }
    },

    created() {
        this.fetchUsers();
    }
}
</script>
