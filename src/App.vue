<template>
    <div id="app">
        <nav>
            <router-link to="/users">Users</router-link>
            <router-link to="/albums">Albums</router-link>
        </nav>
        <transition name="fade" mode="out-in">      
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {};
    }
};
</script>

<style lang="scss">
</style>
