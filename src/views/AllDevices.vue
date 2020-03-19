  
<template >

  <div  id="app"  >

    <div id="nav"  >

     <b-navbar toggleable="lg" type="dark"  >
   
        <b-navbar-brand > 
          <b-img :src="require('../img/device.png')"
             rounded="circle"  class="d-inline-block align-top" style="width:50px;height:50px;">
          </b-img></b-navbar-brand>
          <h6 id="h6">Device Management</h6>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" style="background-color:#F4D03F;" type="submit">Search</b-button>
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

    <div class="card-header h-100" >
      <b-card>
        <b-tabs  pills card vertical nav-wrapper-class="mytabs" active-nav-item-class="font-weight-bold text-light">
          <b-tab title="DEVICES " disabled > <About/></b-tab>
          <b-tab title=" ALL DEVICES" > <Home/></b-tab>
          <b-tab title="ADD DEVICE"><Add/></b-tab>
          <b-tab title=" IMPORT DEVICE"><ImportFile/></b-tab>
            <b-tab title=" UPDATE FILE"><UpdateFile/></b-tab>
          <b-tab title=" DELETE "><DeleteAll/></b-tab>
          <b-tab title="SIM" disabled> <Home/></b-tab>
          <b-tab title="CONTRACT" disabled> <About/></b-tab>
        </b-tabs>
      </b-card>
    </div>
</div>

</template>

<script>
import ImportFile from '@/components/ImportFile'
import UpdateFile from '@/components/UpdateFile'
import Home from '@/components/Home'
import Add from '@/components/Add'
import DeleteAll from '@/components/DeleteAll'

export default {
  components:{
    ImportFile , Home ,Add,DeleteAll,UpdateFile
  }


}
</script>

<style>

#nav {
background-color:	#16104E ;

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
</style>
