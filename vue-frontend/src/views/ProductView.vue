<template lang="">
    <div class="row" v-for="product in getProduct()" :key="product">
        <div class="column product-image"><h1>{{product.product_name}}</h1><img :src="product.prodUrl" class="display" alt="">QTY:{{product.quantity}} R{{product.amount}}</div>
        <div class="column product-desc"></div>
    </div>
</template>
<script>
export default {
    methods: {
        getProduct(){
            return this.$store.state.product
        }
    },
    computed:{
        fetchData(){
        let  myId = this.$route.params.id
        return this.$store.dispatch('fetchProduct', {id: myId})
    } 
    },
    mounted() {
        this.fetchData
    },
}
</script>
<style >
.row{
    display:flex;
    flex-direction: row;
    width:100vw;
}
.column{
    display: flex;
    flex-direction: column;
    width:50%;
    /* text-align:left; */
    color: white !important; 
    align-items:center;
}
img.display{
    width: 25%;
}
    h1{
        color:white;
    }
</style>