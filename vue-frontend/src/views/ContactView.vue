<template>
    <div class="container-fluid" v>
        
        <form   action="https://formcarry.com/s/Bt_uKkxI8fz" method="POST" enctype="multipart/form-data">
  
            <div class="row">
                <div class="col">
                    <h2>Got something you'll like to share?</h2>
                    <p>We are glistening</p>
                    <input type="text" placeholder="My query is related to..." name="query" id="query" required>
                    <input type="text" placeholder="Email Address" name="email" id="email" required>
                    <textarea placeholder="Message" name="message" id="message" required></textarea>
                </div>
                <div class="col">
                    <img src="https://yakuphantonintshi.github.io/myimages/Images/Diamond_ring.png" alt="pic" width="400px" height="430px">
                </div>
            </div>
            <button class="btn" type="submit">SEND MESSAGE</button>
        </form>
 
    </div>

</template>



<style scoped>
img{
   
    border-radius: 7px;
    margin-top: 4rem;
    background: transparent;
}
:is(input, textarea){
    display: block;
    margin: 4rem;
    height: 3rem;
    width: 400px;
    border-bottom: 4px solid #e7c162;
    background-color: transparent;
    color: white;
}
h2{
    color: #e7c162;
}
p{
    color: #e7c162;
    padding-top: 2rem;
}
.btn{
    width: 200px;
    height: 50px;
    color: #e7c162;
    margin-right: 400px;
    margin-top: 2rem;
    background-color: transparent;
    border: 2px solid #e7c162;
}
.btn:hover{
    color: white;
    background-color: #e7c162;
}
@media screen and (max-width: 400px){
    input{
        width: 280px;
    }
    img{
        width: 300px;
    }
    form{
        width: 300px;
    }
}




</style>