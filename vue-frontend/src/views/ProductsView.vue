<template>
    <div class="container-fluid">
        <h2 class="display-2">Products</h2>
        <input type="text" placeholder="search..." class="input">
        
        <div class="card-display" v-if="products">
          <CardComp v-for="product in products" :key="product.products_id" id="cardBorder">
            <template #cardHeader>
             <h1>{{ product.product_name }}</h1> 
            
              <img :src="product.prodUrl" loading="lazy" class="img-fluid prod-prev" :alt="product.product_name">
            </template>
            <template #cardBody>
                <div class="row">
              <div class="lead">Qty:{{ product.quantity }}</div >
              <div >R{{ product.amount }}</div >
            </div>
              <button type="button" class="product" @click="setViewProduct(product.products_id)">VIEW MORE DETAILS</button>
            </template>
          </CardComp>
        </div>
        <div v-else>
          <SpinnerComp/> 
        </div>
      </div>
    </template>
    
    <script>
    
    
    import CardComp from '@/components/CardComp.vue'
    import SpinnerComp from '@/components/SpinnerComp.vue'

    export default {
      name: 'ProductView',
      components: {
        CardComp, 
        SpinnerComp
      },
      methods:{
        setViewProduct(id){
          this.$router.push({name: 'singleProduct', params: {id: id}})
        }
      },
  computed: {
    products() {
      return this.$store.state.products

    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
}

    </script>
    
    <style scoped>
    h2{
        color: #e7c162;
    }

    .card-display{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        width: 80%;
        margin: 0 auto;
        
    }

 :is(p, h5) {
    color: white;
 }
 .card-title{
    font-size: 2rem;
    color: #e7c162;
    text-decoration: underline;
    padding-bottom: 2rem;
 }
 h1{
    color: #e7c162;
 }
 .prod-prev{
    width: 250px;
    height: auto;
 }
 .product{
    width: 150px;
    border-radius: 4px;
    background-color: transparent;
    color: #e7c162;
    border-top: 2px solid #e7c162;
    border-left: 2px solid #e7c162;
 }
 .product:hover{
    background-color: #e7c162;
    color: white;
 }
 .input{
    border-radius: 5px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 15rem;
    width: 180px;
    padding-left: 8px;
 }
 img{
    border: 2px solid #e7c162;
 }
 .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    width: 75%;
  
 }
 .row>*{
    width: fit-content;
 }


    </style>