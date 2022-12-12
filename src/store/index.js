import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brandProducts: [],
    typeProducts: [],
    idProduct: [],
    loginModal: false,
    registerModal: false,
    logged: false,
    loggedUser: "",
    usersDB: [],
    favProducts: [],
    dismissSecs: 5,
    dismissCountDown: 0,
    favsMSG: '',
    logMSG: '',
  },
  mutations: {
    setBrandProducts(state, brandProductsInfo) {
      state.brandProducts = brandProductsInfo;
    },
    setProductsByType(state, productsByType) {
      state.typeProducts = productsByType;
    },
    setProductById(state, productById) {
      state.idProduct = productById;
    },
    clearBrandProducts(state) {
      state.brandProducts = [];
    },
    clearTypeProducts(state) {
      state.typeProducts = [];
    },
    toggleLoginModal(state) {
      state.loginModal = !state.loginModal;
    },
    toggleRegisterModal(state) {
      state.registerModal = !state.registerModal;
    },
    createAccount(state, userData) {
      const checkEmail = state.usersDB.map((user) => user.email.toLowerCase());
      if (!checkEmail.includes(userData.email.toLowerCase())) {
        state.usersDB.push(userData);
        state.registerModal = false;
        localStorage.setItem('user', JSON.stringify(state.usersDB));
        console.log("Register completed. You can log in now!");
      } else {
        console.log("A user already exists with that e-mail address.");
      }
    },
    logIn(state, userData) {
      if (state.usersDB.some((user) => userData.email === user.email)) {
        if (state.usersDB.some((user) => userData.password === user.password)) {
          state.loggedUser = userData.email;
          state.logged = true;
          state.loginModal = false;
          console.log("Log in successful!");
        } else {
          state.logged = false;
          state.logMSG = "Wrong email address or password.";
          state.dismissCountDown = state.dismissSecs;
        }
      } else {
        state.logged = false;
        state.loginModal = false;
        state.registerModal = true;
        console.log("There is no registered user with that e-mail address.");
      }
    },
    logOut(state) {
      state.logged = false;
      state.loggedUser = '';
      router.push({name: 'home'});
      console.log("Log out successful!")
    },
    toggleModals(state) {
      state.loginModal = !state.loginModal;
      state.registerModal = !state.registerModal;
    },
    checkDataBase(state) {
      const dataBase = JSON.parse(localStorage.getItem('user'));
      if ( dataBase === null) {
        state.usersDB = [];
      } else {
        state.usersDB = dataBase;
      }
    },
    addMyFavs(state, product) {
      if (state.favProducts.length >= 0) {
        const productID = state.favProducts.map((product) => product.id);
        if (productID.includes(product.id)) {
          state.favsMSG = 'Already added to My Favorites!';
          state.dismissCountDown = state.dismissSecs;
        } else {
          state.favProducts.push(product);
          state.favsMSG = 'Successfully added to My Favorites!';
          state.dismissCountDown = state.dismissSecs;
        }
      }
    },
    countDownChanged(state, dismissCountDown) {
      state.dismissCountDown = dismissCountDown;
    }
  },
  actions: {
    async fetchBrandProducts ({commit}, brand) {
      const response = await fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
      const data = await response.json();
      commit('setBrandProducts', data);
    },
    async fetchProductsByType ({commit}, type) {
      const response = await fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`);
      const data = await response.json();
      commit('setProductsByType', data);
    },
    async fetchProductById ({commit}, id) {
      const response = await fetch (`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
      const data = await response.json();
      commit('setProductById', data);
    }
  }
})
