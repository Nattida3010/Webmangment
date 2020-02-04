<template  >  

<div  id="All" class="container" align="center" >
  <div>
  <b-jumbotron id = "jumhead" >
   
    <!-- <div id="bt-add"> 
      <b-button  pill variant="success" >ADD</b-button>
  </div> -->
  <b-row >
    <b-col md="6" class="my-2"  id="search"   >
      <b-form-group horizontal  class="mb-0" >
        <b-input-group id="input"  > 
          <b-form-input v-model="filter" placeholder=" Search" />
          <b-input-group-append>
            <b-btn :disabled="!filter" @click="filter = ''" variant="primary" >Clear</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
  </b-row>
    
</b-jumbotron> 
</div>

<div>
<b-jumbotron  id="jumbody">
  <b-table 
          striped hover 
          :items="info" 
          :fields="fields" 
          :filter="filter"
          :per-page ="pageSize"
          :current-page="pageIndex" align="center"   >

      <template v-slot:cell(DETELE)="row">
          <b-button pill variant="outline-danger" v-b-modal.modal-center>DETELE</b-button>
       </template>

      <template v-slot:cell(EDIT)="row">
          <b-button pill variant="outline-warning" v-on:click="showAlert" >EDIT</b-button>
      </template>
      <template v-slot:cell(VIEW)="row">
          <b-button   pill variant="outline-info"   size="sm"
           @click="test( row.item.IMEI, row.item.SerialNumber , row.item.Manufacturer, row.item.NameS,row.item.NameA,row.item.NameI)" 
           class="mr-1">VIEW
          </b-button> 
      </template>
    
  
  
  </b-table >  
      <!-- Info modal -->
    <!-- <b-modal  :id="infoModal.id" :title= "infoModal.id" ok-only @hide="resetInfoModal"> -->
        <b-modal  
          title="Device Detail"
          :id="infoModal.id" 
          :header-bg-variant="headerBgVariant"
          :header-text-variant="headerTextVariant"
          :body-bg-variant="bodyBgVariant"
          :body-text-variant="bodyTextVariant"
          :footer-bg-variant="footerBgVariant"
          :footer-text-variant="footerTextVariant" 
          ok-only @hide="resetInfoModal">
              <pre><b> IMEI :</b>        {{infoModal.id }}</pre> 
              <pre><b> SerialNumber :</b>{{infoModal.title }}</pre> 
              <pre><b> Status : </b>     {{ infoModal.NameS }}</pre>
              <pre><b> Manufacturer :</b>{{infoModal.content}} </pre>
              <pre><b> Application Platform Name  : </b> {{ infoModal.NameA }}</pre>
              <pre><b> IOT Platform Name  : </b>   {{infoModal.NameI }}</pre>           
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
</b-jumbotron> 
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
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'primary',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'light',
      footerTextVariant: 'dark',
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
          { key: 'DETELE', },      
          { key: 'EDIT', },
          {key:"VIEW"}
        
            ], 
           infoModal: {
          id: '',
          title: '',
          content: '',
          NameS:'',
          NameA: '',
          NameI:''

        }
            };
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
                    test(a,b,c,d,e,f) {
                    // console.log(a,b,c);
                      this.infoModal.id = a,
                      this.infoModal.title = b ,
                      this.infoModal.content = c,
                      this.infoModal.NameS = d,
                      this.infoModal.NameA = e,
                      this.infoModal.NameI = f,
                      this.$root.$emit('bv::show::modal', a,b,c,d,e,f)
                    },
                    // resetInfoModal() {
                    //   this.infoModal.title = ''
                    //   this.infoModal.content = ''
                    // },
     

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

        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

        html, body {
          font-family: 'Montserrat', sans-serif;
        }

        #app {
        font-family: 'Montserrat', sans-serif;
        }
        #search{
        margin-left:15%;
        margin-bottom:10%;
      
        }
        #input{
        margin-bottom:30%;
        margin-left:15%;
  
        }
        #bt-add{
        margin-left:80%;
        }

        #test{
          width:50%;
        }

        #jumhead{
            /* background-image: linear-gradient(135deg,#83a4d4,#b6fbff); */
          /* background-image: url("/img/jum.jpg"); *
          /* background-image: linear-gradient(135deg,#667eea,#764ba2); */
          height: 200px;
          background-position: center;
          background-image: linear-gradient(#FFFFFF,#D7E1EC);
          background-size: cover;
          position: relative;
      
        }

        #jumbody{
           /* background-image: url("/img/jum.jpg"); */
          margin-top:2%;
        background-image: linear-gradient(#FFFFFF,#D7E1EC);
          background-position: center;
        
          background-size: cover;
          position: relative;
  
        }

     
</style>