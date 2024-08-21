<template>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
            <img src="https://yakuphantonintshi.github.io/myimages/Images/proj_logo.png" alt="logo" class="img-fluid" loading="lazy">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
nav{
  background-image: linear-gradient(to bottom, black , rgba(0, 0, 0, 0)80%);
}
#navBar:hover{
  color: white;
  font-size: 1.2rem;
}
</style>
