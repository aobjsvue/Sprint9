<template>
    <div @click.self="toggleRegisterModal" class="modal-wrapper">
        <div class="modal">
        <h4>Create an Account</h4>
        <p>Beauty INSIDER</p>
        <p>Join the Beauty Insider loyalty program. Create an account & get access to "My Favorites" feature, and more.</p>
        <div class="form-container">
        <form class="form" @submit.prevent="validateForm">
            <input type="text" placeholder="First Name" v-model="fName" ref="name" autocomplete="name" />
            <p class="error">{{ fNameError }}</p>
            <input type="text" placeholder="Last Name" v-model="lName" ref="lastName" />
            <p class="error">{{ lNameError }}</p>
            <input type="text" placeholder="Email Address" v-model="email" ref="email" autocomplete="email" />
            <p class="error">{{ emailError }}</p>
            <input type="password" placeholder="Password (at least 8 characters)" v-model="password" ref="password" autocomplete="current-password" />
            <p class="error">{{ passwordError }}</p>
            <div class="news">
            <p>By clicking “Join Now” you acknowledge that you are a U.S. or Canada resident and have read our Privacy Policy and Notice of Financial Incentive, agree to Terms of Use, Beauty Insider Terms, and to automatically receive Beauty Insider offers and notifications via email.</p>
            </div>
            <button>Join Now</button>
        </form>
        <a href="#" @click="toggleModals">Already a Beauty INSIDER? Sign In here!</a>
        </div>
        <div class="close-modal" @click="toggleRegisterModal">
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
                fName: "",
                fNameError: "",
                lName: "",
                lNameError: "",
                email: "",
                emailError: "",
                password: "",
                passwordError: "",
            };
        },
        computed: {
            ...mapState(['favProducts']),
        },
        methods: {
            ...mapMutations(["toggleRegisterModal", "createAccount", "toggleModals"]),
            validateForm() {
                let namePattern = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i;
                let nameValidation = namePattern.test(this.fName);
                if (!nameValidation) {
                this.$refs.name.style.outline = "1px solid #ff0000";
                this.$refs.name.style.color = "#ff0000";
                this.fNameError = "Please enter your first name.";
                } else {
                this.$refs.name.style.outline = "none";
                this.$refs.name.style.color = "#edd700";
                this.fNameError = "";
                }
                
                let lNameValidation = namePattern.test(this.lName);
                if (!lNameValidation) {
                this.$refs.lastName.style.outline = "1px solid #ff0000";
                this.$refs.lastName.style.color = "#ff0000";
                this.lNameError = "Please enter your last name.";
                } else {
                this.$refs.lastName.style.outline = "none";
                this.$refs.lastName.style.color = "#edd700";
                this.lNameError = "";
                }
                
                let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;
                let emailValidation = emailPattern.test(this.email);
                if (!emailValidation) {
                this.$refs.email.style.outline = "1px solid #ff0000";
                this.$refs.email.style.color = "#ff0000";
                this.emailError = "Please enter a valid email address.";
                } else {
                this.$refs.email.style.outline = "none";
                this.$refs.email.style.color = "#edd700";
                this.emailError = "";
                }
                
                let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
                let passwordValidation = passwordPattern.test(this.password);
                if (!passwordValidation) {
                this.$refs.password.style.outline = "1px solid #ff0000";
                this.$refs.password.style.color = "#ff0000";
                this.passwordError = "Password must be at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.";
                } else {
                this.$refs.password.style.outline = "none";
                this.$refs.password.style.color = "#edd700";
                this.passwordError = "";
                }
                
                if (nameValidation && lNameValidation && emailValidation && passwordValidation) {
                this.createAccount({ firstName: this.fName, lastName: this.lName, email: this.email.toLowerCase(), password: this.password, favorites: this.favProducts });
                this.fName = "";
                this.lName = "";
                this.email = "";
                this.password = "";
                }
            },
        },
    };
</script>
    
<style>
    .modal-wrapper {
        position: fixed;
        top: 0;
        background: rgba(21, 21, 21, 0.8);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 16;
    }
    .modal {
        width: 50% !important;
        background: #fff;
        position: relative !important;
        padding: 2em;
        word-spacing: 0.2em;
        display: block !important;
        height: auto !important;
        border-radius: 1em;
        border: 1px solid #365e7d;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form {
        width: 100%;
    }
    .form input[type="text"],
    .form input[type="password"] {
        box-sizing: border-box;
        width: 70%;
        border: 1px solid #8ac9fe;
        border-radius: 0.6em;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        letter-spacing: 0.06em;
    }
    .form input:hover {
        border-color: #365e7d;
    }
    .form input:focus {
        border-color: #365e7d;
        outline: 1px solid #365e7d;
    }
    .form-container a {
        cursor: pointer;
        color: #365e7d;
    }
    .form-container a:hover {
        color: #365e7d;
        text-decoration: underline !important;
    }
    .error {
        color: #ff0000;
        margin: 0.6em auto;
        font-size: smaller;
        font-weight: 300;
        text-align: left;
        width: 70%;
    }
    .form button {
        margin: 0.8em 0;
        background-color: #8ac9fe;
        border: 1px solid #365e7d;
        color: #fff;
        border-radius: 2em;
        padding: 0.6em 1.5em;
    }
    .form button:hover {
        background-color: #365e7d;
    }
    .close-modal {
        position: absolute;
        top: 0.2em;
        right: 0.6em;
        cursor: pointer;
    }
    .news {
        width: 80%;
        margin: auto;
        text-align: justify;
    }
    .news p {
        word-spacing: normal;
        font-weight: 300;
        font-size: x-small;
        margin: 1em 0 0 0;
    }
    @media (min-width: 952px) and (max-width: 1144px) {
        .modal {
            width: 60% !important;
        }
    }
    @media (min-width: 816px) and (max-width: 951px) {
        .modal {
            width: 70% !important;
        }
    }
    @media (min-width: 714px) and (max-width: 815px) {
        .modal {
            width: 80% !important;
        }
    }
    @media (min-width: 280px) and (max-width: 713px) {
        .modal {
            width: 90% !important;
        }
    }
    @media (min-width: 280px) and (max-width: 480px) {
        .form input[type="text"],
        .form input[type="password"] {
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: x-small;
        }
        .news {
            width: 100%;
        }
        .modal {
            padding: 1em;
        }
        .modal h4 {
            font-size: 1em;
        }
        .modal p {
            font-size: 0.7em;
        }
        .form a {
            font-size: 1em;
        }
    }
</style>