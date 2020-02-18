
<template>
  
<!-- style=" box-shadow: 10px 10px 5px grey;" -->
  <b-jumbotron  style="background-image: linear-gradient(#FFFFFF,#D7E1EC);" >
    <div class="container" align="center" id="jum">
        <label id="text-req" >* indicated a required field</label>
   <b-form  @submit="onSubmit"   >         
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
           <b-form-input   type="text" v-model="InsertIMEI" required ></b-form-input>
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
       <b-form-select v-model="InsertModelID" :options="modelname" required  ></b-form-select>
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
      <b-form-select v-model="Contractnumber" :options="contractnum" required  ></b-form-select>
  
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
    

   <div id="add"> 
     <!-- <router-link to="/AllDevices"><b-button   pill variant="success" >ADD </b-button></router-link>  -->
       <b-button   type="submit" pill variant="success"  v-on:click="alertDisplay"  >ADD </b-button>
  </div>
    </b-form>
  
    </div>
    </b-jumbotron>
    
</template>

<script>

export default {

  data() {
    return {
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
      Contractnumber : '' ,
      },
      imagePreview: "",
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
      
    };
  },
  
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
    

          // send a POST request
          this.axios({
            method: 'post',
            url: 'https://localhost:44322/insert/device',
             data: {     
                        InsertIMEI: this.InsertIMEI,
                        InsertSerialNumber : this.InsertSerialNumber,
                        InsertManufacturer: this.InsertManufacturer,
                        InsertFirmware : this.InsertFirmware,
                        InsertGateWayID : this. InsertGateWayID,
                        InsertAppID: this.InsertAppID,
                        InsertModelID: this.InsertModelID,
                        CmTypeID: this.CmTypeID,
                        statusDevice : this. statusDevice,
                        Contractnumber : this.contractnumber,
                     
                    }
                })
                .then(function (response) {
                    console.log(response);
                    //  window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });

        // console.log(JSON.stringify(values));
        },
       alertDisplay() {
        // $swal function calls SweetAlert into the application with the specified configuration.
      this.$swal('Success', 'Data Successfully Saved', 'OK',);
       window.location.reload();
      }
    
  }

};
</script>
<style>
#jum{
  margin-left: 5%;
}
#file{
    margin-right: 15%;
    margin-top: 3%;
}
#add{
 margin-left: 40%;
  
}
#text-req{
  margin-right: 75%;
  margin-bottom: 3%;
  color: red;
}
</style>