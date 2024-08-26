<template>
  <div class="mobile-admin">
    <div class="mobile-users-blob">
      <button
        type="button"
        class="add"
        data-bs-toggle="modal"
        data-bs-target="#user-table-mobile"
      >
        <i class="bi bi-plus-square"></i> | ADD NEW USER
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="user-table-mobile"
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
              <input
                type="text"
                placeholder="user_lastname"
                id="new-user-lastname"
              />
              <input type="text" placeholder="user_age" id="new-user-age" />
              <input
                type="text"
                placeholder="user_gender"
                id="new-user-gender"
              />
              <input type="text" placeholder="user_role" id="new-user-role" />
              <input
                type="text"
                placeholder="email_add"
                id="new-user-emailAdd"
              />
              <input type="text" placeholder="user_pass" id="new-user-pass" />
              <input
                type="text"
                placeholder="user_profile"
                id="new-user-profile"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" @click="addUser()">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 class="table-indicators">USERS</h1>

      <div class="admin-mobile-column">
        <div class="admin-mobile-row" v-if="users">
          <details v-for="userid in users" :key="userid">
            <summary @click="currUserId(userid.user_id)">
              <span class="id">{{ userid.user_id }}</span
              >{{ userid.first_name }} {{ userid.user_age }}
            </summary>

            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">id</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.user_id"
                  id="mobile-user-id-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">first_name</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.first_name"
                  id="mobile-user-fname-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">last_name</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.last_name"
                  id="mobile-user-lname-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">age</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.user_age"
                  id="mobile-user-age-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">gender</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.gender"
                  id="mobile-user-gender-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">Role</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.user_role"
                  id="mobile-user-role-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">Email</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.email_add"
                  id="mobile-user-email-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">password</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.user_pass"
                  id="mobile-user-password-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">profile</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="user in currUser()"
                :key="user"
              >
                <input
                  type="text"
                  :value="user.user_profile"
                  id="mobile-user-profile-input"
                />
              </div>
            </div>
            <button @click="deleteUser(userid.user_id)" class="delete">Delete User</button>
            <button @click="editMobileUser(userid.user_id)" class="save">
              Save 
            </button>
          </details>
        </div>
        <div class="admin-mobile-row" v-else>
          <SpinnerComp />
        </div>
      </div>

      <!-- end of bole blob -->
    </div>
    <!-- products blob -->
    <div class="mobile-products-blob">
      <button
        type="button"
        class="add"
        data-bs-toggle="modal"
        data-bs-target="#add-product-mobile"
      >
        <i class="bi bi-plus-square"></i> | ADD NEW ITEM
      </button>
      <!-- this is the add item modal  -->
      <div
        class="modal fade"
        id="add-product-mobile"
        tabindex="-1"
        aria-labelledby="add-product-Label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="add-product-Label">
                ADD PRODUCT
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                placeholder="product name"
                id="new-prod-name"
              />
              <input type="text" placeholder="amount" id="new-prod-amount" />
              <input type="text" placeholder="image url" id="new-prod-url" />
              <input
                type="text"
                placeholder="category"
                id="new-prod-category"
              />
              <input
                type="text"
                placeholder="quantity"
                id="new-prod-quantity"
              />
              <input
                type="text"
                placeholder="description"
                id="new-prod-desc"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
           
              <button type="button" class="btn btn-primary" @click="addProd()">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> 
      <h1 class="table-indicators">PRODUCTS</h1>
<!-- tabme -->
      <div class="admin-mobile-column">
        <div class="admin-mobile-row" v-if="products">
          <details v-for="product in products" :key="product">
            <summary @click="currItem(product.products_id)">
              <span class="id">{{ product.products_id }}</span
              >{{ product.product_name }}
            </summary>

            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">id</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="product in currProd()" :key="product"
              >
                <input
                  type="text"
                  :value="product.products_id"
                  id="mobile-user-product-id-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">Product Name</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="product in currProd()" :key="product"
              >
                <input
                  type="text"
                  :value="product.product_name"
                  id="mobile-user-product-name-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">quantity</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="product in currProd()" :key="product"
              >
                <input
                  type="text"
                  :value="product.quantity"
                  id="mobile-user-product-quantity-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">amount</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="product in currProd()" :key="product"
              >
                <input
                  type="text"
                  :value="product.amount"
                  id="mobile-user-product-amount-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">Category</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="product in currProd()" :key="product"
              >
                <input
                  type="text"
                  :value="product.category"
                  id="mobile-user-product-category-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">Image Link</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="product in currProd()" :key="product"
              >
                <input
                  type="text"
                  :value="product.prodUrl"
                  id="mobile-user-product-link-input"
                />
              </div>
            </div>
            <div class="mobile-users-table-row">
              <div class="mobile-users-table-column alt1">Description</div>
              <div
                class="mobile-users-table-column alt2"
                v-for="product in currProd()" :key="product"
              >
                <input
                  type="text"
                  :value="product.description"
                  id="mobile-user-product-description-input"
                />
              </div>
            </div>
            <button @click=" deleteProd(product.products_id)" class="delete">Delete Item</button>
            <button @click="editProd(product.products_id)" class="save">
              Save 
            </button>
          </details>
        </div>
        <div class="admin-mobile-row" v-else>
          <SpinnerComp />
        </div>
      </div>

      <!-- end of bole blob -->
    </div>
  </div>

  <!-- code for desktop -->
  <div class="desktop-admin">
    <div class="user">
      <h2>USER TABLE</h2>

      <button
        type="button"
        class="add"
        data-bs-toggle="modal"
        data-bs-target="#user-table"
      >
        <i class="bi bi-plus-square"></i> | ADD NEW USER
      </button>

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
              <input
                type="text"
                placeholder="user_lastname"
                id="new-user-lastname"
              />
              <input type="text" placeholder="user_age" id="new-user-age" />
              <input
                type="text"
                placeholder="user_gender"
                id="new-user-gender"
              />
              <input type="text" placeholder="user_role" id="new-user-role" />
              <input
                type="text"
                placeholder="email_add"
                id="new-user-emailAdd"
              />
              <input type="text" placeholder="user_pass" id="new-user-pass" />
              <input
                type="text"
                placeholder="user_profile"
                id="new-user-profile"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" @click="addUser()">
                Save changes
              </button>
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
            <th class="th-actions">Actions</th>
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

            <td class="td-actions">
              <button
                type="button"
                class="edit"
                data-bs-toggle="modal"
                data-bs-target="#editUser"
              >
                <i class="bi bi-pencil-square"></i>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="editUser"
                  tabindex="-1"
                  aria-labelledby="editUserLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editUserLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <input
                          type="text"
                          :value="user.first_name"
                          id="firstName"
                        />
                        <input
                          type="text"
                          :value="user.last_name"
                          id="lastName"
                        />
                        <input type="number" :value="user.user_age" id="age" />
                        <input type="text" :value="user.gender" id="gender" />
                        <input type="text" :value="user.user_role" id="role" />
                        <input type="text" :value="user.email_add" id="email" />
                        <input
                          type="text"
                          :value="user.user_pass"
                          id="password"
                        />
                        <input
                          type="text"
                          :value="user.user_profile"
                          id="profile"
                        />
                      </div>
                      <div class="modal-footer">
                        <!-- edit user save button -->
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- delete user button -->
              </button>
              <button
                type="button"
                class="delete"
                @click="deleteUser(user.user_id)"
              >
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
        <SpinnerComp />
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
              <h1 class="modal-title fs-5" id="add-product-Label">
                ADD PRODUCT
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                placeholder="product name"
                id="new-prod-name"
              />
              <input type="text" placeholder="amount" id="new-prod-amount" />
              <input type="text" placeholder="image url" id="new-prod-url" />
              <input
                type="text"
                placeholder="category"
                id="new-prod-category"
              />
              <input
                type="text"
                placeholder="quantity"
                id="new-prod-quantity"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
           
              <button type="button" class="btn btn-primary" @click="addProd()">
                Save changes
              </button>
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
            <th class="th-actions">Actions</th>
          </tr>
          <tr v-for="product in products" :key="product">
            <td>{{ product.products_id }}</td>
            <td>{{ product.product_name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.category }}</td>
            <td><img :src="product.prodUrl" alt="" width="50px" /></td>
            <td>{{ product.description }}</td>
            <td class="td-actions">
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
                      <h1 class="modal-title fs-5" id="edit-product-Label">
                        EDIT PRODUCT
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div
                      class="modal-body"
                      v-for="currProduct in currProd()"
                      :key="currProduct"
                    >
                      <input
                        type="text"
                        :value="currProduct.product_name"
                        id="edited-name"
                        placeholder="Product Name"
                      />
                      <input
                        type="text"
                        :value="currProduct.amount"
                        id="edited-amount"
                        placeholder="amount"
                      />
                      <input
                        type="text"
                        :value="currProduct.prodUrl"
                        id="edited-url"
                        placeholder="Image url"
                      />
                      <input
                        type="text"
                        :value="currProduct.quantity"
                        id="edited-quantity"
                        placeholder="quantity"
                      />
                      <input
                        type="text"
                        :value="currProduct.category"
                        id="edited-category"
                        placeholder="category"
                      />
                      <input
                        type="text"
                        :value="currProduct.description"
                        id="edited-desc"
                        placeholder="description"
                      />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="editProd(selectedProd)"
                      >
                        {{ selectedProd }}Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="delete"
                @click="deleteProd(product.products_id)"
              >
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
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  components: {
    SpinnerComp,
  },
  data() {
    return {
      selectedProd: null,
    };
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    currItem(id) {
      this.selectedProd = id;
      // console.log(this.selectedProd)
      this.$store.dispatch("fetchProduct", { id: id });
    },
    currUserId(id) {
      console.log(id);
      this.$store.dispatch("fetchUser", { id: id });
    },
    currProd() {
      return this.$store.state.product;
    },
    currUser() {
      return this.$store.state.user;
    },
    editProd(id) {
      // console.log(id)
      let editedName = document.getElementById("edited-name").value ||document.getElementById("mobile-user-product-name-input").value ;
      let editedAmount = document.getElementById("edited-amount").value ||document.getElementById("mobile-user-product-amount-input").value ;
      let editedCategory = document.getElementById("edited-category").value ||document.getElementById("mobile-user-product-category-input").value ;
      let editedQuantity = document.getElementById("edited-quantity").value ||document.getElementById("mobile-user-product-quantity-input").value ;
      let editedUrl = document.getElementById("edited-url").value ||document.getElementById("mobile-user-product-link-input").value ;
      let editedDesc = document.getElementById("edited-desc").value ||document.getElementById("mobile-user-product-description-input").value ;

      console.log(editedName, editedAmount, editedCategory, editedQuantity, editedUrl, editedDesc)

      this.$store.dispatch("editProduct", {
        id: id,
        name: editedName,
        amount: editedAmount,
        url: editedUrl,
        category: editedCategory,
        quantity: editedQuantity,
        desc: editedDesc,
      });
      // location.reload();
    },
    editUser(id) {
      let userName = document.querySelector("#firstName").value;
      let lastname = document.querySelector("#lastName").value;
      let age = document.querySelector("#age").value;
      let gender = document.querySelector("#gender").value;
      let userRole = document.querySelector("#role").value;
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;
      let profile = document.querySelector("#profile").value;

      this.$store.dispatch("editUser", {
        id,
        userName,
        lastname,
        age,
        gender,
        userRole,
        email,
        password,
        profile,
      });
      location.reload();
    },
    editMobileUser(id) {
      let first_name = document.getElementById("mobile-user-fname-input").value;
      let last_name = document.querySelector("#mobile-user-lname-input").value;
      let user_age = document.querySelector("#mobile-user-age-input").value;
      let gender = document.querySelector("#mobile-user-gender-input").value;
      let user_role = document.querySelector("#mobile-user-role-input").value;
      let email_add = document.querySelector("#mobile-user-email-input").value;
      let user_pass = document.querySelector(
        "#mobile-user-password-input"
      ).value;
      let user_profile = document.querySelector(
        "#mobile-user-profile-input"
      ).value;

      this.$store.dispatch("editUser", {
        id,
        first_name,
        last_name,
        user_age,
        gender,
        user_role,
        email_add,
        user_pass,
        user_profile,
      });
      location.reload();
    },
    deleteProd(id) {
      if (confirm("are you sure you want to delete this item")) {
        this.$store.dispatch("deleteProduct", { id: id });
      } else {
        alert("action was aborted");
      }
    },
    // tabme
    addProd() {
      let newProdName = document.getElementById("new-prod-name").value;
      let newProdAmount = document.getElementById("new-prod-amount").value;
      let newProdUrl = document.getElementById("new-prod-url").value;
      let newProdCat = document.getElementById("new-prod-category").value;
      let newProdQuantity = document.getElementById("new-prod-quantity").value;
      let newProdDesc = document.getElementById("new-prod-desc").value;
      console.log(newProdDesc)

      this.$store.dispatch("addProduct", {
        name: newProdName,
        amount: newProdAmount,
        prodUrl: newProdUrl,
        category:newProdCat,
        quantity:newProdQuantity,
        description:newProdDesc,
      });
    },
    addUser() {
      let newUserName = document.querySelector("#new-user-name").value;
      let newLastName = document.querySelector("#new-user-lastname").value;
      let newAge = document.querySelector("#new-user-age").value;
      let newGender = document.querySelector("#new-user-gender").value;
      let newRole = document.querySelector("#new-user-role").value;
      let newEmail = document.querySelector("#new-user-emailAdd").value;
      let newPass = document.querySelector("#new-user-pass").value;
      let newUserProfile = document.querySelector("#new-user-profile").value;

      this.$store.dispatch("addUser", {
        newUserName,
        newLastName,
        newAge,
        newGender,
        newRole,
        newEmail,
        newPass,
        newUserProfile,
      });
      location.reload();
    },
    deleteUser(id) {
      if (confirm("are you sure you want to delete this user")) {
        this.$store.dispatch("deleteUser", { id: id });
        location.reload();
      } else {
        alert("action was aborted");
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped>
/* tabme */
.admin-mobile{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height:100%;
}
.mobile-products-blob{
  margin-top: 3em;
}
.mobile-admin{
  display:none;
}
details {
  color: white;
}
.table-indicators{
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: left;
}
.mobile-users-table-row {
  display: flex;
  flex-direction: row;
  background-color: #decb9d;
}
summary {
  text-align: left;
  background-color: #decb9d;
  height: 120%;
  margin: 1px;
}
summary > span.id {
  padding: 0 1em 0 1em;
  height: 100%;
  background-color: #e7c162;
}

.mobile-users-table-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2em;
}
.mobile-users-table-column > input {
  height: 1.5em;
  margin: 0;
}
.alt1 {
  width: 8em;
  background-color: #e7c162;
}

/* desktop code */
table{
  width:100dvw;
}

th,
td {
  /* border-collapse: collapse; */
  border: 4px solid white;
  color: white;
}

td{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 120px;
}
.td-actions{
  min-width:180px;
}

.add {
  background-color: rgb(52, 216, 52);
  color: white;
  padding: 7px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: transparent;
  float:right
}
:is(.edit, .delete,.save) {
  width: 50px;
  height: 38px;
  margin-inline: 20px;
  border: transparent;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
}
.edit {
  background-color: rgb(198, 198, 8);
  color: white;
  width: 25%;
}
.delete {
  background-color: red;
  color: white;
  width: 25%;
}
.save{
  background-color: rgb(52, 216, 52);
  color: white;
  width: 25%;
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
  width: 75%;
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
#add-product-Label {
  color: #e7c162;
}
@media screen and (max-width: 800px) {
  .desktop-admin{
    display:none;
  }
  .mobile-admin{
    display:block
  }
}
</style>
