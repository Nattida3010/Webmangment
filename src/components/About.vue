<template>  

<div  id="All" class="container" align="center" >
  
  <b-row >
    <b-col md="6" class="my-1"  id="search"  >
      <b-form-group horizontal  class="mb-0" >
        <b-input-group id="input" > 
          <b-form-input v-model="filter" placeholder="Type to Search" />
          <b-input-group-append>
            <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
  </b-row>
  <div id="bt-add"> 
      <b-button  pill variant="success" >ADD</b-button>
  </div>
  <b-table 
          striped hover 
          :items="info" 
          :fields="fields" 
          :filter="filter"
          :per-page ="pageSize"
          :current-page="pageIndex" align="center" >
      <template v-slot:cell(DETELE)="row">
          <b-button pill variant="outline-danger" v-b-modal.modal-center>DETELE</b-button>
       </template>
      <template v-slot:cell(EDIT)="row">
          <b-button pill variant="outline-warning" v-on:click="showAlert" >EDIT</b-button>
      </template>
      <template v-slot:cell(VIWE)="row">
      <b-button pill variant="outline-info"   v-b-modal.modal-lg >VIEW</b-button>
      </template>
       <template  v-slot:cell(show_details)="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
      
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
         
            <li v-for="(value, key) in row.item" :key="key">{{key}}: {{ value}}</li>
              
        
        </b-card>
      </template>
   </b-table>  
<div>
  
    <b-modal id="modal-center" centered title="Alert">
        <p class="my-4">Are you sure you want to delete this device?</p>
    </b-modal>
    <b-modal id="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</b-modal>
</div>
     <b-pagination  align="center" size="md" :total-rows=" info.length" v-model="pageIndex" :per-page="pageSize">
    </b-pagination>
  <div align="center"  >
      CurrentPage: {{pageIndex}}
  </div>  
</div>

</template>

<script>
    import axios from "axios";
    export default {
  data() {
    return {
      info: {
         IMEI: "",
         SerialNumber: "",
        //  ModelID:'',
        //  Manufacturer: "", 
        //  IoTPlatID:"",
        //  AppPlatID: "",
         StatusID:"",
      },
       pageSize:10,
       pageIndex:1,
       filter: null,
       fields: [
          // { key: 'NO', sortable: true },
          { key: 'IMEI',  sortable: true },
          { key: 'SerialNumber', sortable: false },
          // { key: 'ModelID', sortable: true },
          // { key: 'Manufacturer',sortable: true,},
          // { key: 'IoTPlatID',  sortable: true,},
          // { key: 'AppPlatID',  sortable: true,  },
          { key: 'StatusID', label: 'Status',sortable: true, },  
          { key: 'DETELE', },      
          { key: 'EDIT', },
          { key: 'VIWE',}, 
         {key:"show_details",label: 'Detail'}
        
          ], };
          },
            computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
              mounted() {
                var self = this;
                axios
                  .get("https://localhost:44322/device/testdata")
                  .then(function(response) {
                    console.log(JSON.stringify(response.data.data));
                    self.info = response.data;
                  });
              },
            
                  methods: {
                    showAlert(){
                      // Use sweetalret2
                      this.$confirm("Are you sure?").then(() => {
                      //do something...
                      });
                    }
                  }
                };
</script>


<style >
        #search{
        margin-left:15%;
      
        }
        #input{
        margin-bottom:2%;
        }
        #bt-add{
        margin-bottom:3%;
        margin-left:80%;
        }

        #test{
          width:50%;
        }
 
</style>