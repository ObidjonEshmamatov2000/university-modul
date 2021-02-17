<template>
    <div>
        <v-container>
            <h2 class="text-center my-6 headline">Schedule a new lesson</h2>
            <v-row class="mb-6">
                <v-col cols="6" offset="3" class="elevation-2">
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-select
                        v-model="selectTeacher"
                        :items="teacherItems"
                        :rules="[v => !!v || 'Item is required']"
                        label="Teacher name"
                        required
                        ></v-select>

                        <v-text-field
                            v-model="subject"
                            label="Subject name"
                            disabled
                        >

                        </v-text-field>

                        <v-select
                        v-model="selectTeacher"
                        :items="studentItems"
                        :rules="[v => !!v || 'Item is required']"
                        label="Group name"
                        required
                        ></v-select>

                        <v-row class="mt-6">
                            <v-col class="d-flex justify-center">
                                <v-date-picker
                                    v-model="picker"
                                    show-adjacent-months
                                ></v-date-picker>
                            </v-col>
                            <v-col class="d-flex justify-center">
                                <div>
                                    <vue-timepicker :format="yourFormat" v-model="yourData"></vue-timepicker>
                                </div>                                
                            </v-col>
                            <v-col class="d-flex align-end justify-end">
                                <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4 ml-16"
                                @click="add"
                                >
                                Add
                                </v-btn>
                            </v-col>
                        </v-row>

                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import VueTimePicker from "vue2-timepicker";
import 'vue2-timepicker/dist/VueTimepicker.css'
export default {
    components: {
        'vue-timepicker': VueTimePicker
    },
    data() {
        return {
            valid: true,
            selectTeacher: "",
            selectGroup: "",
            subject: 'Math',
            teacherItems: [
            'Laziz Sharipov',
            'Erkin Vohidov',
            'Murod Jumayev',
            'Olim Turdiyev',
            ],
            studentItems: ['714-19-group', '715-19-group', '715-19-group', '716-19-group', '717-19-group', '719-19-group'],
            yourFormat: 'hh:mm a',
            picker: '',
            yourData: {
            hh: '08',
            mm: '05',
            a: 'am'
            }
        }
    },
    methods: {
        add() {
            this.$refs.form.validate();
            alert(this.yourData.hh)
        }
    }
}
</script>

<style scoped>
    .bordered {
        border: 2px solid black;
    }
</style>