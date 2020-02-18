<template  v-for="(results, imeiNum) in fields" >  

<div  id="All" class="container" align="center" >

  <b-row >
    <b-col md="6" class="my-2"  id="search"   >
      <b-form-group horizontal  class="mb-0" >
        <b-input-group id="input"  > 
          <b-form-input v-model="filter" placeholder=" Search" />
          <b-input-group-append>
            <b-btn :disabled="!filter" @click="filter = ''" style="background-color:#4863A0 ;"  >Clear</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
  </b-row>

  <b-table 
          striped hover 
          :items ="info" 
          :fields="fields" 
          :filter="filter"
          :per-page ="pageSize"
          :current-page="pageIndex" align="center"   >

      <template v-slot:cell(DETELE)="row">
          <b-button pill variant="outline-info"  @click="deleteData(row.item.IMEI)" >Delete</b-button>
       </template>

      <template v-slot:cell(EDIT)="row">
          <b-button pill variant="outline-info"   >EDIT</b-button>
      </template>
  
      <template v-slot:cell(VIEW)="row">             
          <b-button   pill variant="outline-info"   size="sm"
           @click="model( row.item.IMEI, row.item.SerialNumber , row.item.Manufacturer, row.item.statusDevice,
                        row.item.Firmware,row.item.contractnumber,row.item.GateWay,
                        row.item.AppPlatID,row.item.Model)" 
           class="mr-1">VIEW
          </b-button> 
      </template>
    
  
  
  </b-table >  
        <b-modal  
          title="Device Detail"
          :id="infoModal.id" 
          :header-bg-variant="headerBgVariant"
          :header-text-variant="headerTextVariant"
          :body-bg-variant="bodyBgVariant"
          :body-text-variant="bodyTextVariant"
          :footer-bg-variant="footerBgVariant"
          :footer-text-variant="footerTextVariant" 
         >
              <pre><b> IMEI :</b>        {{infoModal.id }}</pre> 
              <pre><b> SerialNumber :</b>{{infoModal.SerialNumber }}</pre> 
              <pre><b> Status : </b>     {{ infoModal.statusDevice }}</pre>
              <pre><b> Model  : </b>   {{infoModal.Model }}</pre>        
              <pre><b> Manufacturer :</b>{{infoModal.Manufacturer}} </pre>
              <pre><b> Firmware  : </b> {{ infoModal.Firmware }}</pre>
              <pre><b> Contractnumber  : </b>{{infoModal.contractnumber }}</pre>
              <pre><b> GateWay  : </b>   {{infoModal.GateWay }}</pre>    
               <pre><b> Application  : </b>  {{infoModal.AppPlatID}}</pre>
                   
         </b-modal>


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
         statusDevice:"",
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
      
          { key: 'IMEI',  sortable: true },
          { key: 'SerialNumber', sortable: false },
          { key: 'statusDevice', label: 'Status',sortable: true, },  
          { key: 'DETELE', },      
          { key: 'EDIT', },
          { key:"VIEW"}
        
            ], 
           infoModal: {
          id: '',
          SerialNumber: '',
          Manufacturer: '',
          statusDevice:'',
          Firmware: '',
          contractnumber:'',
          GateWay:'',
          AppPlatID:'',
          Model:'',

        }
            };
          },
              mounted() {
                var self = this;
                axios
                  .get("https://localhost:44322/view/allDevice")
                  .then(function(response) {
                   console.log(JSON.stringify(response.data.data));
                    self.info = response.data;
                  }
              );
              
           },
            
               methods: {
                     
                      model(a,b,c,d,e,f,g,h,i) {
                    // console.log(a,b,c);
                      this.infoModal.id = a,
                      this.infoModal.SerialNumber = b ,
                      this.infoModal.Manufacturer = c,
                      this.infoModal.statusDevice = d,
                      this.infoModal.Firmware = e,
                      this.infoModal.contractnumber = f,
                      this.infoModal.GateWay = g,
                      this.infoModal.AppPlatID = h,
                      this.infoModal.Model = i,
                      this.$root.$emit('bv::show::modal', a,b,c,d,e,f,g,h,i)
                    },
                  deleteData: function(id){
                    //this.axios.post('https://localhost:44322/delete/device/' + 1234)
                  this.$swal({
                    title: 'Are you sure?',
                    text: 'You can\'t revert your action',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes Delete it!',
                    cancelButtonText: 'No, Keep it!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                  }).then((result) => {
                    if(result.value) {
                      // this.$swal('Deleted', 'You successfully deleted this file', 'success')
                         this.axios({
                            method: 'delete',
                            url: 'https://localhost:44322/delete/device',
                            data: {
                                        IMEI : id
                                    }
                                })
                                .then(function (response) {
                                    console.log(response);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                                console.log(JSON.stringify(id));
                    } else {
                      this.$swal('Cancelled', 'Your file is still intact', 'info')
                    }
                  })
               
                        }
              }
        
    }
              
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
        margin-bottom:10%;
        margin-left:15%;
  
        }
        #bt-add{
        margin-left:80%;
        }

        #test{
          width:50%;
        }


     

     
</style>