
 
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
          :current-page="pageIndex" 
           align="center" >

      <template v-slot:cell(DETELE)="row">
          <b-button pill variant="outline-danger" v-b-modal.modal-center>DETELE</b-button>
       </template>

      <template v-slot:cell(EDIT)="row">
          <b-button pill variant="outline-warning" v-on:click="showAlert" >EDIT</b-button>
      </template>

  <template v-slot:cell(VIEW)="row">
        <b-button size="sm" @click="test(row.item.IMEI , row.item.SerialNumber , row.item.Manufacturer )" class="mr-1">
          Info modal
        </b-button>
        
      </template>

      
       <template  v-slot:cell(show_details)="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button  pill variant="outline-info" size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>

      <!-- <template slot="row-details" slot-scope="row">
        <b-card>
            <li v-for="(value, key) in row.item" :key="key">{{key}}: {{ value}}</li>
        </b-card>
      </template> -->
      
      <template v-slot:row-details="row">
        <b-card>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>IMEI :</b></b-col>
            <b-col>{{ row.item.IMEI }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b> SerialNumber : </b></b-col>
            <b-col>{{ row.item.SerialNumber }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b> Status : </b></b-col>
            <b-col>{{ row.item.NameS}}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Manufacturer :</b></b-col>
            <b-col>{{ row.item.Manufacturer }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b> App_Name : </b></b-col>
            <b-col>{{ row.item.NameA}}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b> IOT_Name : </b></b-col>
            <b-col>{{ row.item.NameI}}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>

        </b-card>
      </template>
  </b-table>  
  <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
      <pre>{{infoModal.id }}</pre> 
       <pre>{{infoModal.title }}</pre>
    </b-modal>
<div>
    <b-modal id="modal-center" centered title="Alert">
        <p class="my-4">Are you sure you want to delete this device?</p>
    </b-modal>

    <b-modal id="modal-lg" size="lg" title="Large Modal">
        Hello Large Modal!
    </b-modal>
</div>

     <b-pagination  align="center" size="md" :total-rows=" info.length"
         v-model="pageIndex" :per-page="pageSize">
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
         NameS:"",
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
          { key: 'NameS', label: 'Status',sortable: true, },  
       
          {key:"VIEW"}
        
              ], 
                   infoModal: {
          id: '',
          title: '',
          content: ''
        }
            };
          },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
     },

              mounted() {
                var self = this;
                axios
                  .get("https://localhost:44322/device/deviceJoin")
                  .then(function(response) {
                   console.log(JSON.stringify(response.data.data));
                    self.info = response.data;
                  }
              );
           },
    methods: {
      // eslint-disable-next-line vue/no-dupe-keys
      test(a,b,c) {
      console.log(a,b,c);
        this.infoModal.id = a,
        this.infoModal.title = b ,
        this.infoModal.content = c,
        this.$root.$emit('bv::show::modal', a, c ,b)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
     

 
    }
  }
</script>


