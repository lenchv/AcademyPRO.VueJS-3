<template>
    <div id="app">
        <app-header />
        <transition name="fade" mode="out-in">      
            <router-view></router-view>
        </transition>
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
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
</style>
