<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="4" offset="4">
                    <v-form>
                        <v-select
                        v-model="group"
                        :items="studentItems"
                        :rules="[v => !!v || 'Item is required']"
                        label="Group name"
                        required
                        ></v-select>
                    </v-form>
                </v-col>
                <v-col cols="10" offset="1">
                    <Timetable />
                </v-col>
            </v-row>
        </v-container>
        
      
    </div>
</template>

<script>
import Timetable from '../../components/managerRelated/Timetable'
export default {
    components: {
        Timetable
    },
    data() {
        return {
            studentItems: ['714-19-group', '715-19-group', '715-19-group', '716-19-group', '717-19-group', '719-19-group'],
            group: ''
        }
    }
}
</script>