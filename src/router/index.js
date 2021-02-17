import Vue from "vue";
import VueRouter from "vue-router";
import Courses from "../views/manager/Courses.vue";
import Events from "../views/manager/Events.vue";
import Students from "../views/manager/Students.vue";
import StudentGroups from "../views/manager/StudentGroups.vue";
import Teacher from "../views/manager/Teacher.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/students",
    name: "Students",
    component: Students,
  },
  {
    path: "/student-groups",
    name: "StudentGroups",
    component: StudentGroups,
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: Teacher,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
