<template>
  <div class="container-fluid">
  <div class="row">
    <h2 class="about-us">ABOUT <span class="us">US</span></h2>
      <div class="col">
          <img src="https://yakuphantonintshi.github.io/myimages/Images/about_pic.png" alt="about" width="500px" height="500px" >
        </div>
          <div class="col">
            <p>At Radiant Rubies, we believe that jewelry is more than just an accessory—it's a statement of elegance, a symbol of love, and a reflection of individuality. Founded in 1986, our mission has always been to offer exquisite, timeless pieces that not only enhance your beauty but also tell a unique story.</p>
          </div>
      </div>
  </div>
</template>


<style scoped>
  .col{
    display: flex;
    flex-direction: row;
  }
  p{
    color: white;
  }
  p{
    font-size: 1.5rem;
    padding-top: 5.5rem;
  }
 h2{
  font-size: 4rem;
  color: #e7c162;
 }
 span{
  color: #decb9d;
 }
@media screen and (max-width : 400px){
  img{
    width: 280px;
    --bs-gutter-x: 0;
  }
}
 


  
  
</style>
