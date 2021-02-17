<template>
    <v-container>
        <h2 class="text-center my-4 headline">Create a new group</h2>
        <v-row>
            <v-col cols="10" offset="1">
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                        label="Name of the Group"
                        v-model.lazy="groupName"
                        required
                        width="100"
                    ></v-text-field>

                    <v-combobox
                        v-model.lazy="studentsInNewGroup"
                        :items="items"
                        label="Select Students to add to the group"
                        multiple
                    ></v-combobox>
                    <template v-slot:selection="data">
                        <v-chip
                        :key="JSON.stringify(data.item)"
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        :disabled="data.disabled"
                        @click:close="data.parent.selectItem(data.item)"
                        >
                        <v-avatar
                            class="accent white--text"
                            left
                            v-text="data.item.slice(0, 1).toUpperCase()"
                        ></v-avatar>
                        {{ data.item }}
                        </v-chip>
                    </template>
                </v-form>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="blue lighten-5" cols="10" offset="1">
                <h2 class="text-center headline my-4">New Group: <span class="ml-3 indigo--text text-uppercase">{{ groupName }}</span></h2>
                    <ol class="ml-5">
                        <li v-for="(student, i) in studentsInNewGroup" :key="i">
                            {{student}}
                        </li>
                    </ol>
                    
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="10" offset="1" class="d-flex justify-end">
                <v-btn :disabled="!creating" class="float-left primary">Create</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            groupName: '',
            valid: true,
            items: ['Azizov Erkin', 'Narzullayev Nodir', 'Malikov Anvar', 'Temirov Umid', 'Ochilov Mirjamol', 'Adizov Lazizbek'],
            studentsInNewGroup: ""
        }
    },
    computed: {
        creating: function() {
            return this.studentsInNewGroup.length > 2
        }
    }
}
</script>