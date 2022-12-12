<template>
    <div v-if="idProduct">
        <b-card>
            <b-card-img :src= idProduct.api_featured_image :alt= idProduct.name></b-card-img>
            <b-card-text>
                <h4>{{idProduct.brand}}</h4>
                <h5>{{idProduct.name}}</h5>
                <p><span>Product type: </span>{{idProduct.product_type}}</p>
                <div v-if="idProduct.category">
                    <p><span>Category: </span>{{idProduct.category}}</p>
                </div>
                <div class="card-description">
                    <p>{{idProduct.description}}</p>
                </div>
                <div v-if="(idProduct.product_colors.length != 0)">
                    <p><span>Color(s): </span>
                    <span v-for="(color, index) in idProduct.product_colors" :key="index">
                        <b-img :blank= true :blank-color= color.hex_value rounded="circle" :alt= color.colour_name :title= color.colour_name style="width: 1em; height: 1em" ></b-img>
                    </span></p>
                </div>
                <div v-if="idProduct.rating">
                    <p><span>Rating: </span>{{idProduct.rating}}<b-icon icon="star-fill"></b-icon></p>
                </div>
                <div class="card-price">
                    <p><span>Price: $</span>{{idProduct.price}}</p>
                </div>
                <div class="card-btn">
                    <b-button @click="addMyFavs(idProduct)" >Add to My Favorites</b-button>
                </div>
                <b-alert
                    :show="dismissCountDown"
                    fade
                    variant="primary"
                    @dismiss-count-down="countDownChanged"
                >
                <div class="msg-text">{{favsMSG}}</div>
                </b-alert>
            </b-card-text>
        </b-card>
    </div>
    <div v-else class="cards-loading">
        <h4>Loading product...</h4>
        <b-icon icon="arrow-clockwise" animation="spin" font-scale="2"></b-icon>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

    export default {
        name: 'ProductView.vue',
        props: ['id'],
        computed: {
            ...mapState(['idProduct', 'favsMSG', 'dismissCountDown']),
        },
        methods: {
            ...mapActions(['fetchProductById']),
            ...mapMutations(['addMyFavs', 'countDownChanged']),
        },
        mounted() {
            this.fetchProductById(this.id);
        }
    }
</script>

<style scoped>
    .card {
        margin: 0px 30px 30px 30px !important;
        width: auto;
        height: auto;
    }
    .card-img {
        max-width: 20%;
        height: fit-content;
    }
    .card-body {
        display: flex;
        flex-wrap: wrap;
    }
    .card-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 70vw;
        margin-left: 15px;
    }
    .card-description {
        text-align: start;
    }
    .card-price p {
        margin-bottom: 0;
    }
    .bi-star-fill {
        margin-left: 0.3em;
    }
    .rounded-circle {
        margin-left: 0.3em;
    }
    .card-btn {
        margin: 1em auto 0 0;
    }
    .cards-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        margin-bottom: 30px;
    }
    p {
        margin-bottom: 0.3em;
    }
    .alert {
        padding: 0.3em;
        margin-bottom: 0;
        margin-top: 1em;
    }
    .msg-text {
        font-size: x-small;
    }

    @media (min-width: 481px) and (max-width: 767px) {
        .card-body {
            flex-direction: column;
            align-items: center;
        }
        .card-img {
            max-width: 25%;
            height: fit-content;
        }
        .card-text {
            margin-left: 0;
            margin-top: 0.6em;
            text-align: start;
        }
        .card-price {
            margin-bottom: 0.6em;
        }
        .card-btn {
            margin: auto;
        }
        .alert {
            margin: 1em auto 0 auto;
        }
    }

    @media (min-width: 280px) and (max-width: 480px) {
        .card-body {
            padding: 0.6em;
            flex-direction: column;
            align-items: center;
        }
        .card-img {
            max-width: 50%;
            height: fit-content;
        }
        .card-text {
            margin-left: 0;
            margin-top: 0.6em;
            text-align: start;
        }
        .card-btn {
            margin: 0.6em auto 0.3em auto;
        }
        .alert {
            margin: 1em auto 0.3em auto;
        }
        .card-description {
            width: 100%;
        }
    }
</style>