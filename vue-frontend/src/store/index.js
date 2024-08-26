import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
// import { applyToken } from '@/service/AuthenticatedUser.js'
// import { useCookies } from 'vue3-cookies'

// const {cookies} = useCookies()

const apiURL = 'https://taahir-yakupha-node-project.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    recentProducts: null,
    viewProduct:null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setViewProduct(state, value){
      state.viewProduct = value
    }
  },
  actions: {
    async recentProducts(context) {
      try {
        const {results, msg} = await (await axios.get(`${apiURL}Products/recent`)).data
        console.log(results);
        if (results) {
          context.commit('setRecentProducts', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProducts(context) {
      try {
        const response = await axios.get(`${apiURL}products`)
        const results = response.data
       if (results) {
          context.commit('setProducts', results)
        } else {
          toast.error(`oops`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProduct(context, {id}) {
      try {
        console.log(id);
        const response = await axios.get(`${apiURL}products/${id}`)
        const result = response.data
        console.log('tester'+result)
        if (result) {
          context.commit('setProduct', result)
          
        } else {
          toast.error(`fcgvb`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchUsers(context) {
      try {
        const response =  await axios.get(`${apiURL}users`)
        const result = await response.data
        console.log(result);
        if (result) {
          context.commit('setUsers', result)
          
        } else {
          toast.error(`dfghjk`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchUser(context, {id}) {
      console.log(id)
      try {
        const response =  await axios.get(`${apiURL}users/${id}`)
        const data = response.data
        console.log(data)
        if (data) {
          context.commit('setUser', data)
          console.log(data)
        } else {
          toast.error(`jhgfd`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async editProduct({commit}, {id, name, amount, url, category, quantity,desc}){
        const res = await axios({
          method: "PATCH",
          data: {
            name: name,
            amount:amount,
            prodUrl:url,
            category: category,
            quantity: quantity,
            description:desc
          },
          withCredentials: true,
          url: `${apiURL}products/update/${id}`,
        })
        console.log(res.data)
        commit('setProducts',res.data)
      },

      async editUser({commit}, {id, first_name, last_name, user_age, gender, user_role, email_add, user_pass, user_profile}){
        console.log(id, first_name, last_name, user_age, gender, user_role, email_add, user_pass, user_profile)
        const res = await axios({
          method: "PATCH",
          data: {
            id,
            fname: first_name,
            lname: last_name,
            age: user_age,
            gender,
            role: user_role,
            email: email_add,
            password: user_pass,
            profile: user_profile
          },
          withCredentials: true,
          url: `${apiURL}users/update/${id}`,
        })
        console.log(res.data)
        commit('setUsers',res.data)
      },
    async deleteProduct({commit}, {id}){
      const res = await axios({
        method: "DELETE",
        url: `${apiURL}products/delete/${id}`,
        
    })
    console.log(res.data)
        commit('setProducts',res.data)
  },
    async addProduct({commit}, {name, amount,prodUrl, category, quantity, description}){
      console.log(description)
      const res = await axios({
        method: "POST",
        data: {
          name: name,
          amount: amount,
          prodUrl: prodUrl,
          category: category,
          quantity: quantity,
          description: description
        },
        withCredentials: true,
        url: `${apiURL}products/addProduct`
      })
      console.log(res.data)
        commit('setProducts',res.data)
    },
    async addUser({commit}, {newUserName, newLastName, newAge, newGender, newRole, newEmail, newPass, newUserProfile}){
      const res = await axios({
        method: "POST",
        data: {
          fname:newUserName,
          lname:newLastName,
          age:newAge, 
        gender:newGender, 
        role:newRole,
        email:newEmail,
        password:newPass,
        profile:newUserProfile

        },
        withCredentials: true,
        url: `${apiURL}users/register`
      })
      console.log(res.data)
        commit('setUsers',res.data)
    },
    async deleteUser({commit}, {id}){
      const res = await axios({
        method: "DELETE",
        url: `${apiURL}users/delete/${id}`,
        
    })
    console.log(res.data)
        commit('setUsers',res.data)
  },
  },
  
  modules: {
  }
})

