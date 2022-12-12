<template>
    <div v-if="array.length">
        <b-card-group>
            <div v-for="(product, index) in array" :key="index">
                <b-card>
                    <b-card-img :src= product.api_featured_image :alt= product.name top></b-card-img>
                    <h5>{{product.name}}</h5>
                    <b-card-text>
                        <div v-if="product.category">
                            <p><span>Category: </span>{{product.category}}</p>
                        </div>
                        <div v-if="product.product_colors.length">
                            <p><span>Color(s): </span>
                            <span v-for="(color, index) in product.product_colors" :key="index">
                                <b-img :blank= true :blank-color= color.hex_value rounded="circle" :alt= color.colour_name :title= color.colour_name style="width: 1em; height: 1em" ></b-img>
                            </span></p>
                        </div>
                        <div v-if="product.rating">
                            <p><span>Rating: </span>{{product.rating}}<b-icon icon="star-fill"></b-icon></p>
                        </div>
                        <div class="card-price">
                            <p><span>Price: $</span>{{product.price}}</p>
                        </div>
                    </b-card-text>
                    <b-button :to="{name: 'product', params: {id: product.id}}">View product</b-button>
                </b-card>
            </div>
        </b-card-group>
    </div>
    <div v-else class="cards-loading">
        <h4>Loading products...</h4>
        <b-icon icon="arrow-clockwise" animation="spin" font-scale="2"></b-icon>
    </div>
</template>

<script>
    export default {
        name: 'CardsList',
        props: ['array']
    }
</script>

<style>
    .card-group {
        justify-content: space-evenly;
    }
    .card {
        margin: 15px !important;
        width: 20rem;
        height: auto;
        border-color: #365e7d;
    }
    .card-img-top {
        max-width: 40%;
        height: auto;
        margin-bottom: 15px;
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
    .cards-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        margin-bottom: 30px;
    }

    @media (min-width: 280px) and (max-width: 575px) {
        .card {
            margin: 15px auto !important;
        }
    }
    @media (min-width: 280px) and (max-width: 350px) {
        .card {
            width: 15rem;
        }
    }
</style>