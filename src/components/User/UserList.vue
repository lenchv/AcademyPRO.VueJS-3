<template>
    <div>
        <h1>User List</h1>
        <router-link v-for="userId in users" 
            v-bind:key="userId" 
            :to="'/user/' + userId"
        >{{ usersData[userId].name }}</router-link>
    </div>
</template>


<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
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
