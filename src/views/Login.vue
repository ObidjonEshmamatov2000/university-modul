<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4">
                    <v-card
                        class="mx-auto mt-16 px-6 py-10"
                    >
                        <h2 class="headline pb-8">Sign Up</h2>
                        <v-form v-model="valid">
                            <v-text-field
                                label="Your email"
                                placeholder="enter your email adress"
                                outlined
                                dense
                                :rules="emailRules"
                                required
                                v-model="yourEmail"
                            ></v-text-field>

                            <v-text-field
                                label="Password"
                                placeholder="enter your email password"
                                outlined
                                dense
                                type="password"
                                v-model="yourPassword"
                            ></v-text-field>
                        </v-form>
                        <div class="mt-6 text-center terms">
                            <p>By clicking any of the Sign Up buttons, <br />I agree to the terms of service</p>
                        </div>
                        <v-card-actions>
                            <v-btn
                                class="error"
                                block
                                @click="signup"
                            >
                                Sign Up
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return{
            valid: true,
            yourEmail: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            yourPassword: '',
        }
    },
    methods: {
        signup() {
            this.$refs.form.validate()
            alert('you are signed successfully');
        }
    }
}
</script>

<style scoped>
    .terms {
        font-size: 15px;
        line-height: 1.6;
    }
</style>