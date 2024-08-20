<template>
  <div class="row">
    <div class="col">
      <h1 class="radiant">RADIANT <span class="rubies"> RUBIES</span></h1>
      <p class="home-subtext">Beauty. Elegance. Demure.<br> Always</p>
      <button class="shopnow">SHOP NOW</button>
    </div>


    <div class="col">
      <div class="card" style="width: 20rem;">
  <img src="https://yakuphantonintshi.github.io/myimages/Images/main_pic.png" class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">24K Gold Earrings</h5>
    <p class="card-text">R2000</p>
    <p class="card-text">500g</p>
    <a href="#" class="btn btn-primary">PRODUCT DETAILS</a>
  </div>
</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>

.btn{
  background-color: #e7c162;
  color: white;
  border: 2px solid #e7c162;
}

.card{
  background-color: transparent;
  border: 4px solid #e7c162;
  color: white;
}
.row{
  max-height: 50vh;
  margin-top: 5rem;
}


.shopnow{
  margin-top: 7rem;
  width: 10rem;
  height: 5rem;
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid #e7c162;
  color: #e7c162;
}
.radiant{
  color: #e7c162;
  font-family: "Tinos", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 3.5em;

}
.rubies{
  color: #decb9d;
}
.home-subtext{
  margin-top: 5rem;
  color: white;

  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;

}


</style>
