<template>
  <div>
    <div class="user">

<h2>USER TABLE</h2>

  <button
    type="button"
    class="add"
    data-bs-toggle="modal"
    data-bs-target="#user-table"
  >
    <i class="bi bi-plus-square"></i> | ADD NEW USER </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="user-table"
    tabindex="-1"
    aria-labelledby="user-tableLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="user-tableLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
           <input type="text" placeholder="user_name" id="new-user-name" />
            <input type="text" placeholder="user_lastname"  id="new-user-lastname"/>
            <input type="text" placeholder="user_age"  id="new-user-age"/>
            <input type="text" placeholder="user_gender"  id="new-user-gender"/>
            <input type="text" placeholder="user_role"  id="new-user-role"/>
            <input type="text" placeholder="email_add"  id="new-user-emailAdd"/>
            <input type="text" placeholder="user_pass"  id="new-user-pass"/>
            <input type="text" placeholder="user_profile"  id="new-user-profile"/>
          </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="addUser()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div class="table" v-if="users">
  <table class="table-dark">
    <tr>
      <th>user_id</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>User Role</th>
      <th>Email Address</th>
      <th>Password</th>
      <th>Profile</th>
      <th>Actions</th>
    </tr>
    <tr v-for="user in users" :key="user">
    
      <td>{{ user.user_id }}</td>
      <td>{{ user.first_name }}</td>
      <td>{{ user.last_name }}</td>
      <td>{{ user.user_age }}</td>
      <td>{{ user.gender }}</td>
      <td>{{ user.user_role }}</td>
      <td>{{ user.email_add }}</td>
      <td>{{ user.user_pass }}</td>
      <td><img :src="user.user_profile" alt="" width="200px" /></td>

      <td>
        <button type="button" class="edit" data-bs-toggle="modal" data-bs-target="#editUser">
          <i class="bi bi-pencil-square"></i>

<!-- Modal -->
<div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="editUserLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editUserLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" :value="user.first_name" id="firstName">
        <input type="text" :value="user.last_name" id="lastName">
        <input type="number" :value="user.user_age" id="age">
        <input type="text" :value="user.gender" id="gender">
        <input type="text" :value="user.user_role" id="role">
        <input type="text" :value="user.email_add" id="email">
        <input type="text" :value="user.user_pass" id="password">
        <input type="text" :value="user.user_profile" id="profile">
      </div>
      <div class="modal-footer">
        <!-- edit user save button -->
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- delete user button -->
        </button>
        <button type="button" class="delete" @click="deleteUser(user.user_id)">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  </table>
</div>
<div v-else>
<SpinnerComp/>
</div>
</div>
  <div class="product">
    <h2>PRODUCT TABLE</h2>
    <button
      type="button"
      class="add"
      data-bs-toggle="modal"
      data-bs-target="#add-product"
    >
      <i class="bi bi-plus-square"></i> | ADD NEW ITEM
    </button>
    <!-- this is the add item modal  -->
    <div
      class="modal fade"
      id="add-product"
      tabindex="-1"
      aria-labelledby="add-product-Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="add-product-Label">ADD PRODUCT</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input type="text" placeholder="product name" id="new-prod-name" />
            <input type="text" placeholder="amount"  id="new-prod-amount"/>
            <input type="text" placeholder="image url"  id="new-prod-url"/>
            <input type="text" placeholder="category"  id="new-prod-category"/>
            <input type="text" placeholder="quantity"  id="new-prod-quantity"/>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <!-- tabme -->
            <button type="button" class="btn btn-primary" @click="addProd()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="table" v-if="products">
      <table class="table-dark">
        <tr>
          <th>Product_id</th>
          <th>Product_name</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Product_image</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
        <tr v-for="product in products" :key="product">
          <td>{{ product.products_id }}</td>
          <td>{{ product.product_name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.category }}</td>
          <td><img :src="product.prodUrl" alt="" width="50px" /></td>
          <td>{{ product.description }}</td>
          <td>
            <button
              type="button"
              class="edit"
              data-bs-toggle="modal"
              data-bs-target="#edit-product"
              @click="currItem(product.products_id)"
            >
              <i class="bi bi-pencil-square"></i>
            </button>
<!-- this is the edit button modal-->
<div
      class="modal fade"
      id="edit-product"
      tabindex="-1"
      aria-labelledby="edit-product-Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="edit-product-Label">EDIT PRODUCT</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" v-for="currProduct in currProd()" :key="currProduct">
            <input type="text" :value="currProduct.product_name"  id="edited-name" placeholder="Product Name"/>
            <input type="text" :value="currProduct.amount" id="edited-amount" placeholder="amount" />
            <input type="text" :value="currProduct.prodUrl" id="edited-url" placeholder="Image url" />
            <input type="text" :value="currProduct.quantity"  id="edited-quantity" placeholder="quantity">
            <input type="text" :value="currProduct.category"  id="edited-category" placeholder="category">
            <input type="text" :value="currProduct.description"  id="edited-description" placeholder="description">
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="editProd(selectedProd)">{{selectedProd}}Save changes</button>
          </div>
        </div>
      </div>
    </div>

            <button type="button" class="delete" @click="deleteProd(product.products_id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
 
</div>

</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  components: {
    SpinnerComp
  },
  data(){
    return {
      selectedProd:null,
    }
  },
 
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods:{
    currItem(id){
      this.selectedProd = id
      // console.log(this.selectedProd)
        this.$store.dispatch("fetchProduct", {id:id})
    },
    currProd(){
      return this.$store.state.product
    },
    editProd(id){
        // console.log(id)
        let editedName = document.getElementById('edited-name').value
        let editedAmount = document.getElementById('edited-amount').value
       let editedCategory = document.getElementById('edited-category').value
       let editedQuantity = document.getElementById('edited-quantity').value
       let editedUrl = document.getElementById('edited-url').value
       
       this.$store.dispatch("editProduct", {id:id, name:editedName, amount:editedAmount, url:editedUrl, category: editedCategory, quantity: editedQuantity})
       location.reload()
    },
    editUser(id) {
      let userName = document.querySelector('#firstName').value
      let lastname = document.querySelector('#lastName').value
      let age = document.querySelector('#age').value
      let gender = document.querySelector('#gender').value
      let userRole = document.querySelector('#role').value
      let email = document.querySelector('#email').value
      let password = document.querySelector('#password').value
      let profile = document.querySelector('#profile').value

      this.$store.dispatch("editUser", {id, userName, lastname, age, gender, userRole, email, password, profile })
      location.reload()
    },
    deleteProd(id){
      if(confirm("are you sure you want to delete this item")){
        this.$store.dispatch('deleteProduct', {id:id})
      }else{
        alert("action was aborted")
      }
      
    },
    // tabme
    addProd(){
      let newProdName = document.getElementById('new-prod-name').value
      let newProdAmount = document.getElementById('new-prod-amount').value
      let newProdUrl = document.getElementById('new-prod-url').value

      this.$store.dispatch('addProduct', {name:newProdName, amount:newProdAmount, prodUrl:newProdUrl})

    },
    addUser(){

      let newUserName = document.querySelector('#new-user-name').value
      let newLastName = document.querySelector('#new-user-lastname').value
      let newAge = document.querySelector('#new-user-age').value
      let newGender = document.querySelector('#new-user-gender').value
      let newRole = document.querySelector('#new-user-role').value
      let newEmail = document.querySelector('#new-user-emailAdd').value
      let newPass = document.querySelector('#new-user-pass').value
      let newUserProfile = document.querySelector('#new-user-profile').value

      this.$store.dispatch('addUser', {newUserName, newLastName, newAge, newGender, newRole, newEmail, newPass, newUserProfile})
      location.reload()
    },
    deleteUser(id){
      if(confirm("are you sure you want to delete this user")){
        this.$store.dispatch('deleteUser', {id:id})
        location.reload()
      }else{
        alert("action was aborted")
      }
    }

  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped>
table,
th,
td {
  /* border-collapse: collapse; */
  border: 4px solid white;
  color: white;
  width:80%;
}

th,
td {
  width: 300px;
}
.add {
  background-color: rgb(52, 216, 52);
  color: white;
  margin-left: 50rem;
  margin-bottom: 20px;
  padding: 7px;
  border-radius: 4px;
  border: transparent;
}
:is(.edit, .delete) {
  width: 50px;
  height: 50px;
  margin-inline: 20px;
  border: transparent;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
}
.edit {
  background-color: rgb(198, 198, 8);
  color: white;
}
.delete {
  background-color: red;
  color: white;
}
h2 {
  color: #e7c162;
  text-decoration: underline;
}
.users {
  margin-top: 4rem;
}
input {
  display: flex;
  width:75%;
  margin-block: 4rem;
  height: 3rem;
  border: 2px solid #e7c162;
  border-radius: 4px;
}
.modal-content {
  background-color: rgb(54, 50, 50);
}
#exampleModalLabel {
  color: #e7c162;
}

.btn {
  background-color: transparent;
  border: 3px solid #e7c162;
}
.btn:hover {
  border: 3px solid #e7c162;
  background-color: #e7c162;
}
#add-product-Label{
  color: #e7c162;
}
@media screen and(max-width: 400){
   
}
</style>
