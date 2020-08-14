<template>
    <div class="login">
        <figure>
            <img src='../assets/logo_mi_tienda.png' alt='Logo Mi Tienda'>
        </figure>
        <v-form v-model="valid">
            <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                <v-text-field
                    class="form-field"
                    label="Telefono"
                    outlined
                    color="#ffffff"
                    v-model="mobilephone"
                ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-btn rounded color="primary" @click="login">Login</v-btn>
                </v-col>
            </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    components: {},
    data () {
        return {
            mobilephone: null,
            categories: [],
            customer: null
        }
    },

    methods: {
        login() {
            let me = this
            let data = {
                mobilephone: me.mobilephone
            }

            fetch(`${this.$apiUrl}login/client`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(() => {
                        this.$router.push({
                            name: 'category'
                        })
                    })
                    .catch(error => {
                        console.error('Error:', error)
                    })
                    .finally( () => {
                        this.$router.push({
                            name: 'category'
                        })
                    })
        }
    }
}
</script>
<style>
    .login {
        background-image: url('../assets/login_background.jpg');
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        height: 100%;
        width: 100%;
        position: fixed;
        background-position: 50%;
        background-repeat: no-repeat;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: #ffffff;

        z-index: 20;
        margin-top: -15%;
    }
    .login figure {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login img {
        width: 60%;
    }

    .form-field.v-input__control.v-input__slot.v-text-field__slot > input {
        color: #ffffff !important;
    }

    .theme--light.v-input input, .theme--light.v-input textarea {
        color: #ffffff !important;
    }
    .theme--light.v-label {
        color: #ffffff !important;
    }
    .v-text-field--outlined fieldset{
        border-color: #ffffff;
    }
</style>
