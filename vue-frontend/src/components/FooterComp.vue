<template>
  <div class="footer-line"></div>
    <footer class="container-fluid">
      
          <span class="footer">All rights reserved &copy; 

            {{ cYear }}             
      </span>
      <span >RR</span>
      <span></span>
  
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
 footer {
    color: #decb9d;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:#0E0F10;
    border-top: 2px solid #C79945;
    padding:1em;
    font-size: 2ch;

    font-family: "Tinos", serif;
  font-weight: 700;
  font-style: normal;

 }
span.footer{
  font-weight: 400;
}
</style>