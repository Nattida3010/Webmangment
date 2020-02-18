<template  v-for="(results, imeiNum) in fields" >  

<div  id="All" class="container" align="center" >
<div>
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

      <template v-slot:cell(EDIT)="">
          <b-button pill variant="outline-info" v-b-modal.modal-lg >EDIT</b-button>
      </template>
  
      <template v-slot:cell(VIEW)="row">             
          <b-button   pill variant="outline-info"   size="sm"
           @click="model( row.item.IMEI, row.item.SerialNumber , row.item.Manufacturer, row.item.statusDevice,
                        row.item.Firmware,row.item.contractnumber,row.item.GateWay,
                        row.item.AppPlatID,row.item.Model)" 
           class="mr-1">VIEW </b-button> 
      </template>
      
  </b-table > 
    <b-modal id="modal-lg" size="lg"   title=" Edit Device Detail"
          :header-bg-variant="headerBgVariant"
          :header-text-variant="headerTextVariant"
          :body-bg-variant="bodyBgVariant"
          :body-text-variant="bodyTextVariant"
          :footer-bg-variant="footerBgVariant"
          :footer-text-variant="footerTextVariant">
    
  
   <label id="text-req" >* indicated a required field </label>
    <div class="container" align="center" id="jum">
       
   <b-form   >         
 <b-row class="my-1">
    <b-col sm="4">
      <label  >GateWay Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select  v-model="InsertGateWayID" :options="GateWay" required></b-form-select>
                     
    <!-- <div class="mt-3"> <strong>{{ selected }}</strong></div> -->
     <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
        <b-row class="my-1">
    <b-col sm="4">
      <label>Application Name*:</label>
    </b-col>
    <b-col sm="5">
            <b-form-select   v-model= "InsertAppID"  :options="Application"  required></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col sm="4">
      <label >IMEI* :</label>
    </b-col>
    <b-col sm="5">
           <b-form-input   type="text" v-model="infoModal.id" required ></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
      <b-row class="my-1">
    <b-col sm="4">
      <label >Serial number*:</label>
    </b-col>
    <b-col sm="5">
             <b-form-input  type="text" v-model="InsertSerialNumber" required ></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
  <b-row class="my-1">
    <b-col sm="4">
      <label>Manufacturer Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="InsertManufacturer" :options="manufacturer" required  ></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
     <b-row class="my-1">
    <b-col sm="4">
      <label>Firmware*:</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="InsertFirmware" :options="firmware " required  ></b-form-select>
   
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
   <b-row class="my-1">
    <b-col sm="4">
      <label>Model Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="InsertModelID" :options="modelname"   required  ></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
 
 
      <b-row class="my-1">
    <b-col sm="4">
      <label >Communication Media Type * :</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="CmTypeID" :options="communication" required ></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
     <b-row class="my-1">
    <b-col sm="4">
      <label > Contractnumber * :</label>
    </b-col>
    <b-col sm="5">
      <b-form-select v-model="contractnumber" :options="contractnum" required  ></b-form-select>
  
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col sm="4">
      <label > Device status * :</label>
    </b-col>
    <b-col sm="5">
          <b-form-select   type="text" v-model="statusDevice" :options="status" required ></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
     <div style="margin-left : 60%" > 
    
       <b-button   type="submit" pill variant="info" >Edit</b-button>
  </div>
    </b-form>
  
    </div>
  </b-modal>
        <b-modal  
          title="Device Detail"
          :id="infoModal.id" 
          :header-bg-variant="headerBgVariant"
          :header-text-variant="headerTextVariant"
          :body-bg-variant="bodyBgVariant"
          :body-text-variant="bodyTextVariant"
          :footer-bg-variant="footerBgVariant"
          :footer-text-variant="footerTextVariant" >
               <!-- <input v-model="infoModal.id"> -->
            <pre>  <b-row class="my-1">
    <b-col sm="4">
      <label >IMEI* :</label>
    </b-col>
    <b-col sm="5">
           <b-form-input   type="text" v-model="infoModal.id" required ></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row> </pre> 
              <!-- <pre><b> IMEI :</b>        {{infoModal.id }}</pre>  -->
              <pre><b> SerialNumber :</b>{{infoModal.SerialNumber }}</pre> 
              <pre>     <b-row class="my-1">
    <b-col sm="4">
      <label > Device status * :</label>
    </b-col>
    <b-col sm="5">
          <b-form-select   type="text" v-model="infoModal.statusDevice " :options="status" required ></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
   </b-row>  </pre>
              <pre>    <b-row class="my-1">
    <b-col sm="4">
      <label>Model Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="infoModal.Model" :options="modelname"   required  ></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
</pre>        
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

</div>

</template>

<script>
    import axios from "axios";
    export default {
  data() {
    return {
   //show table
      info: {
         IMEI: "",
         SerialNumber: "",
         statusDevice:"",
      },
      // input edit
     form: {
      InsertIMEI: '',
      InsertSerialNumber : '',
      InsertManufacturer: '',
      InsertFirmware : '',
      InsertGateWayID : '',
      InsertAppID: '',
      InsertModelID: '',
      CmTypeID: '',
      statusDevice : '',
      contractnumber : '' ,
      },
     // Default value of options 
      InsertIMEI: null,
      InsertSerialNumber : null,
      InsertManufacturer: null,
      InsertFirmware : null,
      InsertGateWayID : null,
      InsertAppID: null,
      InsertModelID: null,
      CmTypeID: null,
      statusDevice : null,
      contractnumber : null,
       //options 
        GateWay : [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'GW001', text: 'Ocean Connect' },
        ],
        manufacturer: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'M0001', text: 'Arrow Tech Co.,Ltd' },
        ],
        communication: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'CT001', text: '4G' },
          { value: 'CT002', text: '3G' },
          { value: 'CT003', text: 'NB-IOT' },
          { value: 'CT004', text: 'LORA' },
        ],
          status : [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'S0001', text: 'online' },
          { value: 'S0003', text: 'offline' },
          { value: 'N/A', text: ' N/A' },
          
        ],
          firmware : [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'N/A', text: ' N/A' },
          
        ],
         Application : [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'AP001', text: 'Tamroi' },
            { value: 'N/A', text: ' N/A' },
          
        ],
         contractnum : [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'S0001', text: 'S001' },
            { value: 'PE012', text: 'PE012' },
          
        ],
          modelname: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'M0001', text: 'A' },
          { value: 'M0002', text: 'B' },
          { value: 'M0003', text: 'C' },
          { value: 'M0004', text: 'D' },
        ],
      //model 
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
       // TAble
       fields: [
      
          { key: 'IMEI',  sortable: true },
          { key: 'SerialNumber', sortable: false },
          { key: 'statusDevice', label: 'Status',sortable: true, },  
          { key: 'DETELE', },      
          { key: 'EDIT', },
          { key:"VIEW"}
        
            ], 
            // data in model (button View)
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

        },
        
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
               
                        },
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