<template>
  <v-container>
    <h2 class="text-center my-4 headline">Add a new teacher</h2>
      <v-row>
          <v-col cols="8" offset="2">
              <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="phone"
                    :counter="10"
                    :rules="phoneRules"
                    label="Phone number"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>

                    <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Subject"
                    required
                    ></v-select>


                    <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="add"
                    >
                    Add
                    </v-btn>

                    <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                    >
                    Reset Form
                    </v-btn>

                </v-form>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 25) || 'Name must be less than 10 characters',
      ],
      phone: '',
      phoneRules: [
          v => !!v || 'phone number is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
        items: [
        'Math',
        'Phyzics',
        'English',
        'Chemics',
        'Biology',
        'History'
        ],
    }),

    methods: {
      add () {
        this.$refs.form.validate();
        alert('star')
      },
      reset () {
        this.$refs.form.reset()
      }
    },
  }
</script>