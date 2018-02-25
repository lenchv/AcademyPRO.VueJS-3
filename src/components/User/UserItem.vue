<template>
    <div>
        <router-link :to="'/user/' + user.id">{{ user.name }}</router-link>
        <a href="#" @click.prevent="deleteUser(user)">Delete</a>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },

    methods: {
        ...mapActions('user', [
            'deleteUser'
        ])
    }
}
</script>
