<template>

<div id="app" ref="app" style=" background-image: linear-gradient(135deg,#667eea,#764ba2);
">
  <slider
     
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
      :links="[
        {'id': 1, 'text': 'Link 1', 'url': 'https://github.com'},
        {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'},
        {'id': 3, 'text': 'Link 3', 'url': 'https://github.com'}
      ]"
    >
    </slider>
       <div id="nav">

     <b-navbar toggleable="lg" type="dark" >
        <b-navbar-brand   id="round-button"></b-navbar-brand>
          <h6 id="h6">Device Management</h6>
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
      
      <div>
        <b-navbar-nav>
          <router-link style="color:white; margin-left:10px;" to="/AllDevices">AllDevices</router-link>
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
      <b-card  class="a"  >
        <b-tabs pills card vertical nav-wrapper-class="w-10" active-nav-item-class="font-weight-bold text-light" >
          <b-tab  title="DEVICES" disabled > <About/></b-tab>

          <b-tab title=" ALL DEVICES" > <About/></b-tab>
        
          <b-tab title="ADD DEVICE"><Add/></b-tab>
          <b-tab title=" IMPORT DEVICE"><Table/></b-tab>
          <b-tab title="DEVICES" disabled> <About/></b-tab>
        
        </b-tabs>
      </b-card>
    </div>
  
</div>


</template>

  


<script>
    
import axios from 'axios'
import Table from '@/components/Table'
import About from '@/components/About'
import Add from '@/components/Add'
import Slider from '@jeremyhamm/vue-slider'

export default {
  components:{
    Table , About ,Add,'slider': Slider
  },
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
        console.log(this.info,"dsdsdsdsdsd");
      },
    
},

}
</script>

<style>

#nav {
        /* background: linear-gradient(to top left, #6600cc 0%, #333399 100%); */
          /* background:#7C5083; */
          background-image: linear-gradient(135deg,#667eea,#764ba2);

}
#round-button {
display:block;
width:50px;
height:50px;
line-height:50px;
border: 2px solid #f5f5f5;
border-radius: 50%;
color:#f5f5f5;
text-align:center;
text-decoration:none;
background : #f5f5f5;
box-shadow: 0 0 3px #f5f5f5;
font-size:20px;
font-weight:bold;
}
#h6{
  color: #f5f5f5
}
#nav-collapse{
  margin-left: 5%;
}
#bar{
  height:588px;
   width: 150px;
}
#tabs{
  background-image: linear-gradient(135deg,#667eea,#764ba2);
}
.a {

  background-color:	#667eea, !important;

}

</style>