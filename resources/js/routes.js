let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;

let logout = require('./components/auth/logout.vue').default;

// End Authentication 

// Employee Component
let Storeemployee = require('./components/employee/create.vue').default;
let employee = require('./components/employee/index.vue').default;
let editemployee = require('./components/employee/edit.vue').default;
// Employee Component  end 

// Supplier Component

let Storesupplier = require('./components/supplier/create.vue').default;
let supplier = require('./components/supplier/index.vue').default;
let editsupplier = require('./components/supplier/edit.vue').default;


// Category Component
let Storecategory = require('./components/category/create.vue').default;
let category = require('./components/category/index.vue').default;
let editcategory = require('./components/category/edit.vue').default;

// Product  Component
let Storeproduct = require('./components/product/create.vue').default;
let product = require('./components/product/index.vue').default;
let editproduct = require('./components/product/edit.vue').default;

let home = require('./components/home.vue').default;



                 


export const routes = [
  { path: '/', component: login, name:'/'},
  { path: '/register', component: register, name:'register'},
  { path: '/forget', component: forget, name:'forget'},
  { path: '/home', component: home, name:'home'},
  { path: '/logout', component: logout, name:'logout'},
  // Employee Route   Start 
  { path: '/store-employee', component: Storeemployee, name:'store-employee'},
  { path: '/employee', component: employee, name:'employee'},
  { path: '/edit-employee/:id', component: editemployee, name:'edit-employee'},
  

  // Supplier Route   Start 
  { path: '/store-supplier', component: Storesupplier, name:'store-supplier'},
  { path: '/supplier', component: supplier, name:'supplier'},
  { path: '/edit-supplier/:id', component: editsupplier, name:'edit-supplier'},
  
   // Category  Route   Start 
   { path: '/store-category', component: Storecategory, name:'store-category'},
   { path: '/category', component: category, name:'category'},
   { path: '/edit-category/:id', component: editcategory, name:'edit-category'},
   // Product   Route   Start 
   { path: '/store-product', component: Storeproduct, name:'store-product'},
   { path: '/product', component: product, name:'product'},
   { path: '/edit-product/:id', component: editproduct, name:'edit-product'},



]
