<template>
    <div id="app">
        <app-header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header';

export default {
    name: "app",
    components: {
        "app-header": Header
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
</style>
