<template>
    <nav class="navbar navbar-expand-lg  bg-dark sticky-top">
      <div class="container-fluid main-nav">
        <router-link class="navbar-brand" to="/">
            <img src="../assets/Group 6.png" alt="logo" class="img-fluid" loading="lazy" width="50px">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse w-75" id="navbarSupportedContent">
          <ul class="navbar-nav w-75 d-flex justify-content-evenly">
            <li class="nav-item">
              <router-link class="nav-link" id="navBar" aria-current="page" to="/home">home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"  id="navBar" to="/about">about</router-link>
            </li>
    
    
            <li class="nav-item">
              <router-link class="nav-link"  id="navBar" to="/products">products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"  id="navBar" to="/admin">admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"  id="navBar" to="/contact">contact us</router-link>
            </li>
            </ul>
        </div>
      </div>
    </nav>
    </template>
<style scoped>
.main-nav{
  width: 85%;
}
nav{
  background-image: linear-gradient(to bottom, black , rgba(0, 0, 0, 0)80%);
  font-family: "Tinos", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.5em;
}
#navBar:hover{
  color: #DECB9D;

}
.navbar-collapse{
  justify-content: flex-end;

}

</style>
