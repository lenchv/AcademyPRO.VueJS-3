import Vue from "vue";
import Router from "vue-router";

const AlbumList = () => import("../components/Album/AlbumList");
const AlbumDetail = () => import("../components/Album/AlbumDetail");
const UserList = () => import("../components/User/UserList");
const UserDetail = () => import("../components/User/UserDetail");

Vue.use(Router);

export const router = new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
        path: "/",
        redirect: "/users"
    },
    {
        path: "/users",
        component: UserList
    },
    {
        path: "/user/:id",
        component: UserDetail
    },
    {
        path: "/albums",
        component: AlbumList
    },
    {
        path: "/album/:id",
        component: AlbumDetail
    }
  ]
});

export default router;
