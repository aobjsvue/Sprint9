<template>
    <CardsList :array="brandProducts"/>
</template>

<script>
    import CardsList from '@/components/CardsList.vue'
    import { mapActions, mapMutations, mapState } from 'vuex';

    export default {
        name: 'BrandProductsView',
        components: { CardsList },
        props: ['brand'],
        computed: {
            ...mapState(['brandProducts']),
        },
        methods: {
            ...mapActions(['fetchBrandProducts']),
            ...mapMutations(['clearBrandProducts']),
        },
        mounted() {
            this.clearBrandProducts();
            this.fetchBrandProducts(this.brand);
        }
    }
</script>