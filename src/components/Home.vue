<template  v-for="(results, imeiNum) in fields"  >  

<div  id="All" class="container" align="center"  >

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

<!-- หัวตาราง -->
  <b-table 
          striped hover 
          :items ="info" 
          :fields="fields" 
          :filter="filter"
          :per-page ="pageSize"
          :current-page="pageIndex" align="center"   >

      <template v-slot:cell(DETELE)="row" >
          <b-button pill style="background-color: #737CA1 ;" 
            @click="deleteData(row.item.IMEI)" >Delete</b-button>
       </template>

      <template v-slot:cell(EDIT)="row">
          <b-button pill style="background-color: #566D7E ;"  
              @click="edit( row.item.IMEI, 
                        row.item.SerialNumber , 
                        row.item.ManufacturerID, 
                        row.item.StaID,
                        row.item.Firmware,
                        row.item.contractnumberid,
                        row.item.GateWay,
                        row.item.applicationid,
                        row.item.ModelID,
                        row.item.GateWayID,
                        row.item.communication,
                       )" >EDIT</b-button>
      </template>
  
      <template v-slot:cell(VIEW)="row">             
          <b-button   pill style="background-color:#4863A0 ;" 
             @click="model( row.item.IMEI, 
                            row.item.SerialNumber , 
                            row.item.Manufacturer, 
                            row.item.statusDevice,
                            row.item.FirmwareID,
                            row.item.contractnumberid,
                            row.item.GateWay,
                            row.item.AppPlatID,
                            row.item.Model,
                            row.item.CmTypeId)">VIEW</b-button> 
         </template>
  </b-table >  
<!-- กดปุ่ม view แล้วโชว์ detail -->
  <b-modal  
          title="Device Detail"
          :id="infoModal.id" 
          :header-bg-variant="headerBgVariant"
          :header-text-variant="headerTextVariant"
          :body-bg-variant="bodyBgVariant"
          :body-text-variant="bodyTextVariant"
          :footer-bg-variant="footerBgVariant"
          :footer-text-variant="footerTextVariant">
              <pre><b> IMEI :</b>        {{infoModal.id }}</pre> 
              <pre><b> SerialNumber :</b>{{infoModal.SerialNumber }}</pre> 
              <pre><b> Status : </b>     {{ infoModal.statusDevice }}</pre>
              <pre><b> Model  : </b>   {{infoModal.Model }}</pre>
              <pre><b> Manufacturer :</b>{{infoModal.Manufacturer}} </pre>
              <pre><b> Firmware  : </b> {{ infoModal.FirmwareID }}</pre>
              <pre><b> Contractnumber  : </b>{{infoModal.contractnumberid }}</pre>
              <pre><b> GateWay  : </b>   {{infoModal.GateWay }}</pre>    
              <pre><b>Application  : </b>  {{infoModal.AppPlatID}}</pre>
              <pre><b>Communication Media Type  : </b> {{infoModal.CmTypeId}}</pre>  
         
  </b-modal>

<!-- กดปุ่ม edit แล้วโชว์ model  edit  -->
 <b-modal  
    title="Edit Device  Detail"  size="lg" hide-footer
    :id="infoEdit.id" 
    :header-bg-variant="headerBgVariant"
    :header-text-variant="headerTextVariant"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    :footer-bg-variant="footerBgVariant"
    :footer-text-variant="footerTextVariant">
  <div class="container" align="center">
  <b-form @submit="onSubmit">  
        <b-row class="my-1">
          <b-col sm="4"><label> IMEI :</label> </b-col>
          <b-col sm="5">
            <b-form-input  v-model="infoEdit.id" disabled ></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1"> 
          <b-col sm="4"><label >Serial number*:</label></b-col>
          <b-col sm="5">
            <b-form-input v-model="infoEdit.SerialNumber" required ></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1"> 
          <b-col sm="4"> <label > Device status * :</label></b-col>
          <b-col sm="5">
            <b-form-select  v-model="infoEdit.StaID" :options="status" required ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="my-1"> 
          <b-col sm="4"> <label > Model * :</label></b-col>
          <b-col sm="5">
               <b-form-select v-model="infoEdit.ModelID" :options=" modelname" required ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="my-1"> 
          <b-col sm="4"> <label > Manufacturer * :</label></b-col>
          <b-col sm="5">
              <b-form-select v-model="infoEdit.ManufacturerID" :options="manufacturer" required ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="my-1"> 
          <b-col sm="4"> <label > Firmware * :</label></b-col>
          <b-col sm="5">
          <b-form-select  v-model= infoEdit.Firmware :options="firmware" required ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="my-1"> 
          <b-col sm="4"> <label > Contractnumber * :</label></b-col>
          <b-col sm="5">
            <b-form-select  v-model="infoEdit.contractnumberid" :options="contractnum" required ></b-form-select>
          </b-col>
        </b-row>

        
        <b-row class="my-1"> 
          <b-col sm="4"> <label > Application * :</label></b-col>
          <b-col sm="5">
            <b-form-select   v-model="infoEdit.applicationid" :options="Application" required ></b-form-select>
          </b-col>
        </b-row>  

         <b-row class="my-1"> 
          <b-col sm="4"> <label > GateWay * :</label></b-col>
          <b-col sm="5">
          <b-form-select  v-model="infoEdit.GateWayID" :options="GateWay" required ></b-form-select>
          </b-col>
        </b-row>  

        <b-row class="my-1"> 
          <b-col sm="4"> <label > Communication Media Type * :</label></b-col>
          <b-col sm="5">
          <b-form-select  v-model="infoEdit.communication" :options="communication" required ></b-form-select>
          </b-col>
        </b-row>  
  
       <div id="save"> 
     <!-- <router-link to="/AllDevices"><b-button   pill variant="success" >ADD </b-button></router-link>  -->
       <b-button   type="submit" pill style="background-color:#4863A0 ;">SAVE </b-button>
        </div>        
  </b-form>
  </div>
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
      headerBgVariant: 'info',
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
          { key: 'VIEW'} 
            ], 
      //info Modelของปุ่ม view
      infoModal: {
      id: '',
      SerialNumber: '',
      Manufacturer: '',
      statusDevice:'',
      FirmwareID: '',
      contractnumberid:'',
      GateWay:'',
      AppPlatID:'',
      Model:'',
      CmTypeId:''  
     
     
        },
       //info Modelของปุ่ม edit
      infoEdit: {
      id: '',
      SerialNumber: '',
      ManufacturerID: '',
      StaID:'',
      Firmware: '',
      contractnumberid:'',
      applicationid:'',
      ModelID:'',
      GateWayID:'',
      communication:'',

      

        },
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
          { value: 'CT002', text: 'NB-IOT' },
          { value: 'CT003', text: '3G' },
          { value: 'CT004', text: 'LORA' },
        ], 
          status : [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'S0001', text: 'online' },
          { value: 'S0002', text: 'offline' },
          { value: 'S0003', text: ' N/A' },
          
        ],
          firmware : [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'F0001', text: ' N/A' },
          { value: 'F0002', text: 'test' },
          
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
        
            };
          },
              mounted() {
                var self = this;
                axios
                  .get("https://localhost:44322/view/allDevice")
                  .then(function(response) {
                  // console.log(JSON.stringify(response.data));
                    self.info = response.data;
                  }
              );
              
           },
               methods: {
                    // set ค่า detail เมื่อกดปุ่ม view               
                      model(imei,
                            Serial_Number,
                            Manufacturer,
                            status_Device,
                            firmwar,
                            contract_num,
                            Gate_Way,
                            AppPlat_ID,
                            Model,
                            CmTypeId,
                           ) 
                           
                      {  
                           
                      console.log('a :'+imei); 
                      console.log('b :'+Serial_Number);
                      console.log('c :'+Manufacturer);
                      console.log('d :'+ status_Device);
                      console.log('e :'+firmwar);
                      console.log('f :'+contract_num);
                      console.log('h :'+Gate_Way);
                      console.log('i :'+AppPlat_ID);
                      console.log('j : '+Model);
                      console.log('CmTypeId : '+CmTypeId);
                      this.infoModal.id = imei,
                      this.infoModal.SerialNumber = Serial_Number ,
                      this.infoModal.Manufacturer = Manufacturer,
                      this.infoModal.statusDevice = status_Device,
                      this.infoModal.FirmwareID = firmwar,
                      this.infoModal.contractnumberid = contract_num,
                      this.infoModal.GateWay =  Gate_Way,
                      this.infoModal.AppPlatID = AppPlat_ID,
                      this.infoModal.Model = Model,
                      this.infoModal.CmTypeId = CmTypeId
                   
                      this.$root.$emit('bv::show::modal', imei,Serial_Number,Manufacturer,status_Device,
                                       firmwar,contract_num, Gate_Way,AppPlat_ID,Model,CmTypeId)
                    },
                       // set ค่า detail เมื่อกดปุ่ม edit   
                      edit(a,b,c,d,e,f,g,h,i,j,k) {
                      console.log('a :'+a); 
                      console.log('b :'+b);
                      console.log('c :'+c);
                      console.log('d :'+d);
                      console.log('e :'+e);
                      console.log('f :'+f);
                      console.log('h :'+h);
                      console.log('i :'+i);
                      console.log('j : '+j);
                      console.log('CmTypeId : '+k);
                      this.infoEdit.id = a,
                      this.infoEdit.SerialNumber = b ,
                      this.infoEdit.ManufacturerID = c,
                      this.infoEdit.StaID = d,
                      this.infoEdit.Firmware = e,
                      this.infoEdit.contractnumberid = f,
                      this.infoEdit.applicationid = h,
                      this.infoEdit.ModelID = i,
                      this.infoEdit.GateWayID = j,
                      this.infoEdit.communication = k,
                      this.$root.$emit('bv::show::modal', a,b,c,d,e,f,g,h,i,j,k)
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
                                     window.location.reload();
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
                  onSubmit (evt) {
                  evt.preventDefault();
                    console.log(JSON.stringify(this.infoEdit));
                      // send a POST request
                      this.axios({
                        method: 'put',
                        url: 'https://localhost:44322/update/device',
                          data: {     
                                    InsertIMEI : this.infoEdit.id,
                                    InsertSerialNumber :this.infoEdit.SerialNumber,
                                    InsertManufacturer: this.infoEdit.ManufacturerID,
                                    InsertFirmware : this.infoEdit.Firmware,
                                    InsertGateWayID : this.infoEdit.GateWayID,
                                    InsertAppID: this.infoEdit.applicationid,
                                    InsertModelID:this.infoEdit.ModelID,
                                    statusDevice :this.infoEdit.StaID,
                                    contractnumberid : this.infoEdit.contractnumberid,
                                    communication : this.infoEdit.communication,
                       
                                }
                                })
                                .then(function (response) {
                                    console.log(response);
                                    window.location.reload();
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                              
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
        #save{
          margin-left: 50%;
        }
</style>