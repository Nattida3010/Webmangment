
<template>
  
<!-- style=" box-shadow: 10px 10px 5px grey;" -->
  <b-jumbotron  style="background-image: linear-gradient(#FFFFFF,#D7E1EC);" >
    <div class="container" align="center" id="jum">
        <label id="text-req" >* indicated a required field</label>
   <b-form  @submit="onSubmit"   >         
 <b-row class="my-1">
    <b-col sm="4">
      <label  >PlatForm Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select  v-model="InsertIMEI" :options="platForm" required></b-form-select>
                     
    <!-- <div class="mt-3"> <strong>{{ selected }}</strong></div> -->
     <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
        <b-row class="my-1">
    <b-col sm="4">
      <label>Application Name*:</label>
    </b-col>
    <b-col sm="5">
           <b-form-input type="email"
                      v-model="TestName"
                       required>></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>

      <b-row class="my-1">
    <b-col sm="4">
      <label >IMEI* :</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
      <b-row class="my-1">
    <b-col sm="4">
      <label >Serial number*:</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
  <b-row class="my-1">
    <b-col sm="4">
      <label>Manufacturer Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected2" :options="manufacturer"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
   <b-row class="my-1">
    <b-col sm="4">
      <label>Model Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected3" :options="modelname"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
     <b-row class="my-1">
    <b-col sm="4">
      <label>Model Band*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected4" :options="modelband"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
      <b-row class="my-1">
    <b-col sm="4">
      <label >Communication Media Type:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected5" :options="communication"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
        <b-row class="my-1">
    <b-col sm="4">
      <label >IMSI:</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
      <b-row class="my-1">
    <b-col sm="4">
      <label >Telephone number:</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
 <b-row class="my-1">
    <b-col sm="4">
      <label >Sim Type:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected6" :options="sim"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
 <b-row class="my-1">
    <b-col sm="4">
      <label >Operter:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected7" :options="operter"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>


   <div id="add"> 
     <!-- <router-link to="/AllDevices"><b-button   pill variant="success" >ADD </b-button></router-link>  -->
       <b-button   type="submit" pill variant="success" >ADD </b-button>
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
      InsertIoTPlatID: '',
      InsertAppPlatID: '',
      InsertStatusID: '',
      InsertModelID: '',
      InsertCmTypeID: '',
      },
      imagePreview: "",
      InsertIMEI: null,
      InsertSerialNumber: null,
      InsertManufacturer: null,
      InsertIoTPlatID: null,
      InsertAppPlatID: null,
      InsertStatusID: null,
      InsertModelID: null,
      InsertCmTypeID: null,
      
        platForm: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'Ocean Connect', text: 'Ocean Connect' },
        ],
        manufacturer: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'Arrow Tech Co.,Ltd', text: 'Arrow Tech Co.,Ltd' },
        ],
        communication: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: '4G', text: '4G' },
          { value: '3G', text: '3G' },
          { value: 'NB-IOT', text: 'NB-IOT' },
          { value: 'LORA', text: 'LORA' },
        ],
         sim: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'eSIM', text: 'eSIM' },
          { value: 'Micro SIM', text: 'Micro SIM' },
  
        ],
         operter: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'AIS', text: 'AIS' },
          { value: 'True Move', text: 'True Move' },
          { value: 'Dtac', text: 'Dtac' },
        ],
          modelband: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'Huawei', text: 'Huawei' },
          { value: 'SUMSUNG', text: 'SUMSUNG' },
          { value: 'Huawei', text: 'Huawei' },
          { value: 'Nokia', text: 'Nokia' },
  
        ],
         modelname: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'AIS', text: 'A' },
          { value: 'True Move', text: 'B' },
          { value: 'Dtac', text: 'C' },
          { value: 'Dtac', text: 'D' },
        ],
      
    };
  },
  
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
    //    alert(JSON.stringify(this.form));
          // const  sendData = {
          // email  :this.form.Email,this.form.Email,
          // name  : this.form.Name
          // }


          // send a POST request
          this.axios({
            method: 'post',
            url: 'https://localhost:44322/insert/data',
             data: {
                         TestName: this.TestName,
                         TestEmail: this.TestEmail
                    }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        // console.log(JSON.stringify(values));
        },
    
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