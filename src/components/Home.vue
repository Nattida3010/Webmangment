<template  >  

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
    

      <template v-slot:cell(DETELE)="row"   >
          <b-button pill variant="outline-danger"  
            @click="deleteData(row.item.IMEI)" >Delete</b-button>
       </template>

      <template v-slot:cell(EDIT)="row">
        <b-form   >
          <b-button pill variant="outline-warning" 
              @click="edit( row.item.IMEI, 
                            row.item.SerialNumber , 
                            row.item.ManufacturerID, 
                            row.item.StaID,
                            row.item.Firmware,
                            row.item.contractnumberid,
                            row.item.applicationid,
                            row.item.ModelID,
                            row.item.GateWayID,
                            row.item.communication,
                          )" >EDIT</b-button> 
           
           </b-form>   
      </template>
    

      <template v-slot:cell(VIEW)="row" >    
        <b-form >
          <b-button   pill variant="outline-success" 
              @click="view( row.item)" 
                               >VIEW</b-button>   
            
        </b-form>
      </template>
  </b-table >  


<!-- กดปุ่ม edit แล้วโชว์ model  edit  -->

 <b-modal
    title="Edit Device  Detail"  size="lg" hide-footer  
    :id="'edit-'+infoEdit.id" 
  
    :header-bg-variant="headerBgVariant"
    :header-text-variant="headerTextVariant"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    :footer-bg-variant="footerBgVariant"
    :footer-text-variant="footerTextVariant">
  <div class="container" align="center">

  <b-form @submit="onSubmit" >  
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
               <b-form-select v-model="infoEdit.ModelID" :options=" model" required ></b-form-select>
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
     
       <b-button   type="submit" pill style="background-color:#4863A0 ;">SAVE </b-button>
        </div>        
  </b-form>
  </div>
  </b-modal>


     <b-pagination  align="center" size="md" :total-rows=" info.length"
         v-model="pageIndex" :per-page="pageSize">
    </b-pagination>
    
     
         <b-form-select
      v-model="selected"
      :options="infordata"
      class="mb-3"
      value-field="IMEI"
      text-field="IMEI"
      disabled-field="notEnabled"
      @change="test1(IMEI)"
    ></b-form-select>
     
    

  <div align="center"  >
      CurrentPage: {{pageIndex}}
  </div>  
  <!-- กดปุ่ม view แล้วโชว์ detail -->
  <b-modal  
          title="Device Detail"
          :id="'modal-'+infoModal.id" 
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

</div>
</template>

<script>
    import axios from "axios";
    export default {
      data() {
        return { 
          infordata:'',
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
            // { key: 'TESt', },   
            { key: 'DETELE', },      
            { key: 'EDIT', },
            { key: 'VIEW'} 
              ], 
      //info Modelของปุ่ม view
        infoModal: 
        {
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
        infoEdit: 
        {
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
          model: [
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
                    console.log( self.info);
                    
                    self.infordata =response.data;
                  }
              );        
            },
            methods:  {
              test1(x){
                    alert(x)
              },
                    // set ค่า detail เมื่อกดปุ่ม view               
                 view:function(item)
            { 
                // console.log(item);
                
              this.infoModal.id = item.IMEI,
              this.infoModal.SerialNumber = item.SerialNumber ,
              this.infoModal.Manufacturer = item.Manufacturer,
              this.infoModal.statusDevice = item.statusDevice,
              this.infoModal.FirmwareID = item.FirmwareID,
              this.infoModal.contractnumberid = item.contractnumberid,
              this.infoModal.GateWay =  item.GateWay,
              this.infoModal.AppPlatID = item.AppPlatID,
              this.infoModal.Model = item.Model,
              this.infoModal.CmTypeId = item.CmTypeId
              this.$root.$emit( 'bv::show::modal', 
                                'modal-'+this.infoModal.id ) 

        
              
            
              
              console.log('viwe');                           
              console.log('imei :'+item.IMEI); 
              console.log('Serial_Number :'+item.SerialNumber);
              console.log('Manufacturer :'+item.Manufacturer);
              console.log('status_Device :'+ item.statusDevice);
              console.log('firmwar :'+item.FirmwareID);
              console.log('contract_num :'+item.contractnumberid);
              console.log('Gate_Way :'+item.GateWay);
              console.log('AppPlat_ID :'+item.AppPlatID);
              console.log('Model : '+item.Model);
              console.log('CmTypeId : '+item.CmTypeId);

            },
        
                       // set ค่า detail เมื่อกดปุ่ม edit   
           edit: function(
                          imei,
                          Serial_Number,
                          Manufacturer,
                          StaID,
                          Firmware,
                          contractnumberid,
                          applicationid,
                          ModelID,
                          GateWayID,
                          communication
                          ) 
           {
         
            this.infoEdit.id = imei,
            this.infoEdit.SerialNumber = Serial_Number ,
            this.infoEdit.ManufacturerID = Manufacturer,
            this.infoEdit.StaID = StaID,
            this.infoEdit.Firmware = Firmware,
            this.infoEdit.contractnumberid = contractnumberid,
            this.infoEdit.applicationid = applicationid,
            this.infoEdit.ModelID = ModelID,
            this.infoEdit.GateWayID = GateWayID,
            this.infoEdit.communication = communication,
      
            this.$root.$emit('bv::show::modal', 
                             'edit-'+this.infoEdit.id 
                           
                           
                              )   

            console.log('edit');
            console.log('imei :'+imei); 
            console.log('Serial_Number :'+Serial_Number);
            console.log('Manufacturer :'+Manufacturer);
            console.log('StaID :'+StaID);
            console.log('Firmware :'+Firmware);
            console.log('contractnumberid :'+contractnumberid);
            console.log('applicationid :'+applicationid);
            console.log('ModelID :'+ModelID);
            console.log('GateWayID : '+GateWayID);
            console.log('CmTypeId : '+communication);
             
          },

            deleteData: function(id){
                 this.$swal({
                  title: 'Are you sure?',
                  text: 'You can\'t revert your action',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes Delete it!',
                  cancelButtonText: 'No, Keep it!',
                  showCloseButton: true,
                  showLoaderOnConfirm: true
                })
                .then((result) => {
                      if(result.value) {
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
                    this.$swal({
                        title: 'Are you sure?',
                        text: 'You won\'t be able to revert this!',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, Edit it!',
                        cancelButtonText: 'Cancel',
                        showCloseButton: true,
                        showLoaderOnConfirm: true
                  }).then((result) => {
                      if(result.value) {
                        this.$swal('Edit', 'Successfully ', 'success')
                        window.location.reload();
                    } else {
                      this.$swal('Cancelled', 'Cancel', 'info')
                      window.location.reload();
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
#save{
   margin-left: 50%;
}
</style>