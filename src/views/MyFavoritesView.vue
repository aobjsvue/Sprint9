<template>
    <div class="favorites">
        <h4>My Favorites products: </h4>
        <div v-if="favProducts.length">
            <b-card-group>
                <div v-for="(product, index) in favProducts" :key="index">
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
            <h5>No favorites products added yet!</h5>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name: 'MyFavoritesView',
        computed: {
            ...mapState(['favProducts']),
        },
    }
</script>

<style scoped>
    .favorites {
        margin-bottom: 1em;
    }
    .favorites h4 {
        margin-bottom: 0.6em;
    }
    @media (min-width: 280px) and (max-width: 480px) {
        .favorites h4 {
            font-size: 1.2em;
        }
    }
</style>