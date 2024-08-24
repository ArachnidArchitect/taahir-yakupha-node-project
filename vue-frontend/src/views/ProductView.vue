<template>
    <div v-if="getProduct()">
    <div class="row" v-for="product in getProduct()" :key="product">
        <div class="col product-image"><img :src="product.prodUrl" class="display" alt="">
        </div>
        <div class="col product-desc">
            <h1>{{product.product_name}}</h1>
            <p>{{product.description}}</p>
            QTY:{{product.quantity}} R{{product.amount}}
        </div>
    </div>
</div>
<div v-else> <SpinnerComp/></div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
    components: {
        SpinnerComp
    },
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
<style scoped >
.row{
    display:flex;
    flex-direction: row;
    width:100vw;
    padding-top: 10rem;
}
.col{
    display: flex;
    flex-direction: column;
    width:50%;
    /* text-align:left; */
    color: white !important; 
    align-items:center;
}
img.display{
    width: 70%;
    border: 2px solid #e7c162;
    margin-top: 2rem;
    margin-left: 5rem;

}
h1{
    color:white;
}

p{
    font-size: 1.7rem;
    padding-top: 3rem;
}


</style>