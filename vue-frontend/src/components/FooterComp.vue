<template>
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
</style>