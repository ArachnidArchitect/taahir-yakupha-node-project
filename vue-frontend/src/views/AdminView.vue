<template>
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
            <input type="text" placeholder="product name" />
            <input type="text" placeholder="image url" />
            <input type="text" placeholder="amount" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="table" v-if="products">
      <table class="table-dark">
        <tr>
          <th>product_id</th>
          <th>product_name</th>
          <th>product_image</th>
          <th>actions</th>
        </tr>
        <tr v-for="product in products" :key="product">
          <td>{{ product.products_id }}</td>
          <td>{{ product.product_name }}</td>
          <td><img :src="product.prodUrl" alt="" width="50px" /></td>
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
            <input type="text" :value="currProduct.product_name"  id="edited-name" />
            <input type="text" :value="currProduct.amount" id="edited-amount" />
            <input type="text" :value="currProduct.prodUrl" id="edited-url" />
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
            <button type="button" class="btn btn-primary" @click="editProd(currProd.products_id)">Save changes</button>
          </div>
        </div>
      </div>
    </div>

            <button type="button" class="delete">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div class="users">
    <h2>USER TABLE</h2>
    <button
      type="button"
      class="add"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <i class="bi bi-plus-square"></i> | ADD NEW USER
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <table>
      <tr>
        <th>user_id</th>
        <th>user_name</th>
        <th>user_password</th>
        <th>actions</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button type="button" class="edit">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button type="button" class="delete">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
 
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods:{
    currItem(id){
        this.$store.dispatch("fetchProduct", {id:id})
    },
    currProd(){
      return this.$store.state.product
    },
    editProd(id){
        console.log(id)
        let editedName = document.getElementById('edited-name').value
        let editedAmount = document.getElementById('edited-amount').value
       let editedUrl = document.getElementById('edited-url').value

       this.$store.dispatch("editProduct", {id:id, name:editedName, amount:editedAmount, url:editedUrl})
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
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
</style>
