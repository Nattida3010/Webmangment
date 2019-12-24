  
<template>
  <div class="f">
   <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand >NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <router-link style="color:white;" to="/about">About</router-link>
      </b-navbar-nav>
      <div>
         <b-navbar-nav>
        <router-link style="color:white; margin-left:10px;" to="/home">Home</router-link>
       
      </b-navbar-nav>
      </div>
      <div>
         <b-navbar-nav>
        <router-link style="color:white; margin-left:10px;" to="/button">button</router-link>
       
      </b-navbar-nav>
      </div>
      <div>
         <b-navbar-nav>
        <router-link style="color:white; margin-left:10px;" to="/model">model</router-link>
       
      </b-navbar-nav>
      </div>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item >Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <router-view/>
    <div>
<button  @click="test" id = "make">Make Multiple Requests</button></div> 
 <!-- <input type="text" v-model="id"> -->
<template v-for="(value) in info" >
  <div :key="value">
      <!-- {{value.SubjectNameTH}}
      <br>
      {{value.Grade}} -->
  </div>
</template>
  </div>

 
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      info: "",
      // id:""
    }
  },
    methods: {
      async test(){
        let res = await axios.get("https://localhost:44362/student/NameMethod2")
        this.info = res.data.data;
        console.log(this.info);
        
      }

},

}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Dancing+Script|Taviraj&display=swap');
</style>