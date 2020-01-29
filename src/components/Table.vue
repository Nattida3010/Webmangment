
<template>
  

  <b-jumbotron style="background-image: linear-gradient(#FFFFFF,#D7E1EC);" >
    <div class="container" align="center" id="jum">
      <div id="export">
    <b-button @click="onExport" pill  variant="info"  >Export <b-img :src="require('../img/export.png')" v-bind="mainProps"
  style="width:20px;height:20px;"> </b-img> </b-button>
     
      </div>
 
      <label id="text-req" >* indicated a required field</label>
 <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none" >PlatForm Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="platForm"></b-form-select>
    <!-- <div class="mt-3"> <strong>{{ selected }}</strong></div> -->
     <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
   <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Application Name*:</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Manufacturer Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="manufacturer"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
     <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Communication Media Type:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="communication"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
 <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Sim Type:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="sim"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
  <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Operter:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="operter"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Number of devices*:</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
  <div id="file">
    <img v-bind:src="imagePreview">
   <input type="file" name="" id="file-field" value="Click" v-on:change="updatePreview">
  </div>

 <div id="add"> 
     <router-link to="/about"><b-button  pill variant="success" >Import<b-img :src="require('../img/import.png')" v-bind="mainProps"
  style="width:20px;height:20px;"> </b-img></b-button></router-link> 
  </div>
    <!-- <input name="image" type="file" id="file-field" v-on:change="updatePreview" style="display: none;"> -->
    </div>
    </b-jumbotron>
    
</template>


<script>
import XLSX from 'xlsx' // import xlsx
export default {

  data() {
    return {
      imagePreview: "",
     selected: null,
        platForm: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'Ocean Connect', text: 'Ocean Connect' },
          // { value: { C: '3PO' }, text: 'This is an option with object value' },
          // { value: 'd', text: 'This one is disabled', disabled: true }
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
         json : [
        { Gaetway: '',Application: '',IMEI: '' ,Serail_number: '',IMSI: '',Telephone: '',Model_Name:'' ,Model_Brand: '',Firmware: ''  },
        
      ]
   
    };
  },
  methods: {
  Preview(e){
      document.getElementById('file-field').click()
      var reader , files = e.target.files
      if(files.length === 0){
        console.log('Empty')
      }
      reader = new FileReader()
      reader.onload = (e) =>{
        // this.imagePreview = e.target.result
        document.body.style.backgroundImage = 'url(' + e.target.result + ')';
        console.log(document.body.style.backgroundimage = 'url(' + e.target.result + ')' )
      }
      reader.readAsDataURL(files[0])
      // console.log(reader.readAsDataURL(files[0]))
    },
    onExport() {
      const dataWS = XLSX.utils.json_to_sheet(this.json)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, dataWS)
      XLSX.writeFile(wb,'export.xlsx')
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
#export{
 margin-left: 70%;
 
}
#text-req{
  margin-right: 75%;
  margin-bottom: 3%;
  color: red;
}
</style>