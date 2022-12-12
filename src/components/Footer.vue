<template>
    <div class="footer">
        <b-navbar type="dark" variant="dark" bottom>
            <div class="credits">
                <div class="copyright">
                    <p>© 2022 Beauty Trends, Inc. All rights reserved.</p>
                </div>
                <div class="privacy">
                    <router-link to="#">
                        <p>Privacy Policy</p>
                    </router-link>
                    <router-link to="#" class="terms">
                        <p>Terms of Use</p>
                    </router-link>
                </div>
            </div>
            <div class="social">
                <a href="#"><b-icon-instagram></b-icon-instagram></a>
                <a href="#"><b-icon-facebook></b-icon-facebook></a>
                <a href="#"><b-icon-twitter></b-icon-twitter></a>
                <a href="#"><b-icon-youtube></b-icon-youtube></a>
            </div>
            <div class="slogan"> 
                <h4>We Belong to</h4>
                <h4>Something Beautiful</h4>
            </div>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
    .footer {
        margin-top: auto;
    }
    .privacy {
        display: flex;
    }
    .terms {
        margin-left: 1em;
    }
    .privacy p, .copyright p {
        text-align: start;
        margin: 0;
    }
    .privacy a {
        text-decoration: none;
        color: #fff;
    }
    .privacy a:hover {
        text-decoration: underline;
        text-decoration-color: #fff;
    }
    .social {
        display: flex;
        width: 10%;
        justify-content: space-evenly;
    }
    .navbar-expand {
        justify-content: space-between !important;
    }
    .navbar {
        color: #fff;
        background-color: #8ac9fe !important;
        align-items: flex-start !important;
        padding: 1em;
    }
    .slogan {
        text-align: start;
    }
    .slogan h4 {
        margin: 0;
    }
    .social a {
        color: #fff;
    }
    .social a:hover {
        color: #365e7d;
    }
    .credits {
        font-size: x-small; 
    }

    @media (min-width: 615px) and (max-width: 767px) {
        .social {
            column-gap: 0.2em;
        }
    }
    @media (min-width: 280px) and (max-width: 614px) {
        .social {
            column-gap: 0.2em;
        }
        .navbar {
            flex-direction: column;
            align-items: center !important;
            row-gap: 0.6em;
        }
        .slogan {
            text-align: center;
        }
    }
</style>