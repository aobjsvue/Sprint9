<template>
    <CardsList :array="typeProducts"/>
</template>

<script>
import CardsList from '@/components/CardsList.vue'
import { mapActions, mapMutations, mapState } from 'vuex';

    export default {
        name: 'TypeProductsView.vue',
        components: { CardsList },
        props: ['type'],
        computed: {
            ...mapState(['typeProducts']),
        },
        methods: {
            ...mapActions(['fetchProductsByType']),
            ...mapMutations(['clearTypeProducts']),
        },
        watch: {
            type: function (newType) {
                this.clearTypeProducts();
                this.fetchProductsByType(newType);
            }
        },
        mounted() {
            this.fetchProductsByType(this.type);
        }
    }
</script>