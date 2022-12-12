<template>
    <div @click.self="toggleLoginModal" class="modal-wrapper">
        <div class="modal">
            <div class="form-container">
                <form class="form" @submit.prevent="validateInputs">
                    <h4>Sign In</h4>
                    <p>Sign in or create an account to enjoy "My Favorites" feature.</p>
                    <input type="text" placeholder="Email Address" v-model="email" ref="email" autocomplete="email" />
                    <p class="error">{{ emailError }}</p>
                    <input type="password" placeholder="Password" v-model="password" ref="password" autocomplete="current-password" />
                    <p class="error">{{ passwordError }}</p>
                    <button>Sign In</button>
                </form>
            <b-alert
                :show="dismissCountDown"
                fade
                variant="primary"
                @dismiss-count-down="countDownChanged"
            >
            <div class="msg-text">{{logMSG}}</div>
            </b-alert>
            <a @click="toggleModals">New? Create an Account here!</a>
            </div>
            <div class="close-modal" @click="toggleLoginModal">
                <b-icon icon="x-lg"></b-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState } from "vuex";

    export default {
        data() {
            return {
                email: "",
                emailError: "",
                password: "",
                passwordError: "",
            };
        },
        computed: {
            ...mapState(['logMSG', 'dismissCountDown']),
        },
        methods: {
            ...mapMutations(["toggleLoginModal", "logIn", "toggleModals", 'countDownChanged']),
            validateInputs() {
                let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;
                let emailValidation = emailPattern.test(this.email);
                if (!emailValidation) {
                this.$refs.email.style.outline = "1px solid #ff0000";
                this.$refs.email.style.color = "#ff0000";
                this.emailError = "Please enter a valid email address.";
                } else {
                this.$refs.email.style.outline = "none";
                this.$refs.email.style.color = "#8ddaa7";
                this.emailError = "";
                }

                let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/gm;
                let passwordValidation = passwordPattern.test(this.password);
                if (!passwordValidation) {
                this.$refs.password.style.outline = "1px solid #ff0000";
                this.$refs.password.style.color = "#ff0000";
                this.passwordError = "Wrong password.";
                } else {
                this.$refs.password.style.outline = "none";
                this.$refs.password.style.color = "#8ddaa7";
                this.passwordError = "";
                }
        
                if (emailValidation && passwordValidation) {
                this.logIn({ email: this.email.toLowerCase(), password: this.password });
                }
            },
        },
    }
</script>