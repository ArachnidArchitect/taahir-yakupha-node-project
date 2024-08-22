<template>
  <div class="row">
    <div class="home-text ">
      <h1 class="radiant">RADIANT <span class="rubies"> RUBIES</span></h1>
      <p class="home-subtext">Beauty. Elegance. Demure.<br> Always</p>
      <button type="button" class="shopnow"><router-link to="/products">SHOP NOW</router-link>  
          
        </button>
    </div>


    <div class="home-column">
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

a{
  color: #e7c162;
  text-decoration: none;
}


.btn{
  background-color: #e7c162;
  color: white;
  border: 2px solid #e7c162;
}

.btn:hover{
  background-color: #e7c162;
  color: white;
  border: 2px solid #e7c162;
}
.home-text{
  display: flex;
  flex-direction: column ;
  width:60%;
  justify-content: space-around;
  padding-left: 5em;
  height: 50vh;
}
.home-column{width: 40%;}

.card{
  background-color: black;
  border: 4px solid #e7c162;
  color: white;
  box-shadow: 1px 1px 50px #e7c162a8;
}
.row{
text-align: start;
display: flex;
flex-direction: row;
align-items: end;
  
}


.shopnow{

  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;

  width: 200px;
  height: 4em;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid #e7c162;
  color: #e7c162;
}
.shopnow:hover{
  background-color: #e7c162 ;
}
.shopnow:hover a{
 color: white ;
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
  color: white;
  padding-left: 2em;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;

}


</style>
