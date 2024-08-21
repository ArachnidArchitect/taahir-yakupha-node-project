<template>
    <div class="container-fluid">
        <div class="row">
          <h2 class="display-2">Products</h2>
        </div>
        <div class="row gap-5 justify-content-center" v-if="recentProducts">
          <CardComp v-for="product in recentProducts" :key="product.productID" id="cardBorder">
            <template #cardHeader>
             <h1>{{ product.prodName }}</h1> 
            
              <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
            </template>
            <template #cardBody>
                <h5 class="card-title">{{ product.category }}</h5>
              <p class="lead">{{ product.prodDescri }}</p>
              <p class="lead">Amount: R{{ product.amount }}</p>
              <button>PRODUCT DETAILS</button>
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
  computed: {
    recentProducts() {
      return this.$store.state.recentProducts
    }
  },
  mounted() {
    this.$store.dispatch('recentProducts')
    console.log(this.recentProducts)
  }

}

    </script>
    
    <style scoped>
    h2{
        color: #e7c162;
    }
    #cardBorder{
  border: 3px solid #e7c162;
  background-color: transparent;
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
   
    </style>