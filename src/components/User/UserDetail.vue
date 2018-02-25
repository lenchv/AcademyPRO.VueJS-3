<template>
    <div>
        <div v-if="user">
            <h1>{{ user.name }}</h1>
            <div>{{ user.email }}</div>
            <a href="#" @click.prevent="onDeleteUser()">Delete</a>
        </div>
        <div v-else>User not find!</div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            id: this.$route.params.id,
            user: null
        };
    },
    computed: {
        ...mapGetters('user', [
            'getUserById'
        ])
    },

    methods: {
        ...mapActions('user', [
            'deleteUser'
        ]),
        
        onDeleteUser() {
            this.deleteUser(this.user);
            this.user = null;
            this.$router.push('/users');
        },

        setUser(id, next) {
            this.getUserById(this.id).then((user) => {
                this.user = user;
                next();
            }).catch(() => {
                this.user = null;
                next();            
            });
        }
    },

    created() {
        this.setUser(this.id, () => {});
    },

    beforeRouteUpdate(to, from, next) {
        this.setUser(to.params.id, next);
    }
}
</script>
