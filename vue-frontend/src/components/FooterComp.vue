<template>
  <div class="footer-line"></div>
    <footer class="container-fluid">
      <div class="row">
          <p class="footer">All rights reserved &copy; 

            {{ cYear }}

            <span class="footer">RR</span>

             
      </p>
      </div>
  
    </footer>
  </template>

<script>
export default {
    name: "FooterComp",
    data(){
        return{
            cYear: new Date().getUTCFullYear()
        }
    }, 

}
</script>

<style scoped>
 .footer {
    color: #decb9d;
 }
 .footer-line {
    height: 1px; 
    background-color: #decb9d;
    margin-bottom: 10px;
}
</style>