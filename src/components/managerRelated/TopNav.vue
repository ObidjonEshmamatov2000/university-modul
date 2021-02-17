<template>
    <div>
        <v-app-bar
            color="gray darken-4 white--text"
            dark
        >
        <v-toolbar-title>School Education</v-toolbar-title>

        <v-spacer></v-spacer>

        <span class="hidden-sm-and-up">
            <v-btn @click="drawer = !drawer" text>
                <v-icon color="grey lighten-5">fa-bars</v-icon>
            </v-btn>
        </span>

        <v-toolbar-items class="hidden-xs-only">
            <v-btn to="/" text>
                Courses
            </v-btn>
            <v-btn to="events" text>
                Events
            </v-btn>
            <v-btn to="teacher" text>
                Teachers
            </v-btn>
            <v-btn to="students" text>
                Students
            </v-btn>
            <v-btn to="student-groups" text>
                Student Groups
            </v-btn>
        </v-toolbar-items>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
            class="transition pt-8"
        >
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    link
                >
                    <v-btn text>
                        {{ item.title}}
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Courses', link: '/'},
                { title: 'Events', link: '/events'},
                { title: 'Teachers', link: '/teacher'},
                { title: 'Students', link: '/students'},
                { title: 'Student Groups', link: '/student-groups'},
            ]
        }
    }
}
</script>

<style scoped>
    .transition {
        transition: .5s ease all;
    }
</style>