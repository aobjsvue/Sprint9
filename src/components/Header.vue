<template>
    <div class="header">
        <div class="nav-header">
            <div class="logo">
                <router-link to="/"><h1>Beauty Trends</h1></router-link>
            </div>
            <div class="log-in">
                <div v-if="logged">
                    <b-button to="/my_favorites" class="btn-left" variant="outline-light">My Favorites<b-badge pill variant="light">{{favProducts.length}}</b-badge></b-button>
                    <b-button @click="logOut" variant="outline-light">Sign out</b-button>
                </div>
                <div v-if="!logged">
                    <b-button @click="toggleLoginModal" class="btn-left" variant="outline-light">Sign In </b-button>
                    <b-button @click="toggleRegisterModal" variant="outline-light"> Create Account</b-button>
                </div>
            </div>
        </div>
        <nav class="nav-bar">
            <b-button to="/" class="home-link" variant="outline-light">Home</b-button>
            <b-dropdown text="Brands" variant="outline-light">
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'benefit'}}">Benefit</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'clinique'}}">Clinique</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'colourpop'}}">Colourpop</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'dior'}}">Dior</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'fenty'}}">Fenty</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'glossier'}}">Glossier</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'l\'oreal'}}">L'Oreal</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'maybelline'}}">Maybelline</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'milani'}}">Milani</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'nyx'}}">NYX</b-dropdown-item>
                <b-dropdown-item :to="{name: 'brand', params: {brand: 'stila'}}">Stila</b-dropdown-item>
            </b-dropdown>
            <b-dropdown text="Eyes" variant="outline-light">
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'eyeliner'}}">Eyeliner</b-dropdown-item>
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'eyeshadow'}}">Eyeshadow</b-dropdown-item>
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'mascara'}}">Mascara</b-dropdown-item>
            </b-dropdown>
            <b-dropdown text="Brows" variant="outline-light">
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'eyebrow'}}">Eyebrow</b-dropdown-item>
            </b-dropdown>
            <b-dropdown text="Face" variant="outline-light">
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'blush'}}">Blush</b-dropdown-item>
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'bronzer'}}">Bronzer</b-dropdown-item>
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'foundation'}}">Foundation</b-dropdown-item>
            </b-dropdown>
            <b-dropdown text="Lips" variant="outline-light">
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'lip_liner'}}">Lip liner</b-dropdown-item>
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'lipstick'}}">Lipstick</b-dropdown-item>
            </b-dropdown>
            <b-dropdown text="Nails" variant="outline-light">
                <b-dropdown-item :to="{name: 'product_type', params: {type: 'nail_polish'}}">Nail polish</b-dropdown-item>
            </b-dropdown>
        </nav>
        <div v-if="loginModal">
            <Login />
        </div>
        <div v-if="registerModal">
            <Register />
        </div>
    </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
    components: { Login, Register },
    data() {
        return {
            text: ''
        }
    },
    computed: {
        ...mapState(["loginModal", "registerModal", "logged", "loggedUser", 'favProducts'])
    },
    methods: {
        ...mapMutations(["toggleLoginModal", "toggleRegisterModal", "logOut"]),
        ...mapActions(['fetchProductsByType']),
    }
}

</script>

<style scoped>
    .logo a, .logo a:hover {
        color: #365e7d;
        text-decoration: none;
    }
    .logo h1 {
        margin-bottom: 0;
        font-family: 'La Belle Aurore', cursive;
        font-weight: bold;
    }
    .nav-header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 30px 0;
        background-image: url(@/assets/img/headerbackground.png);
        background-position: center;
        background-repeat: repeat;
    }
    nav {
        margin-bottom: 30px;
        background-color: #8ac9fe;
        padding: 1em 0;
    }
    .nav-bar {
        display: flex;
        justify-content: center;
        column-gap: 0.3em;
    }
    .btn-left {
        margin-right: 0.3em;
    }
    .log-in button, .log-in a {
        background-color: #8ac9fe;
        border-color: #365e7d !important;
    }
    .log-in button:hover, .log-in a:hover {
        background-color: #fff;
        color: #365e7d;
    }
    .badge {
        margin-left: 0.4em;
        background-color: #365e7d;
        color: #fff;
    }

    @media (min-width: 280px) and (max-width: 767px) {
        .nav-bar {
            flex-direction: column;
            padding: 30px;
            row-gap: 0.2em;
        }
    }
    @media (min-width: 280px) and (max-width: 529px) {
        .nav-header {
            row-gap: 1em;
            flex-direction: column;
        }
        .btn-left {
            margin-bottom: 0.2em;
        }
    }
</style>