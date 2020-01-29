
<template>
  
<!-- style=" box-shadow: 10px 10px 5px grey;" -->
  <b-jumbotron  style="background-image: linear-gradient(#FFFFFF,#D7E1EC);" >
    <div class="container" align="center" id="jum">
        <label id="text-req" >* indicated a required field</label>
 <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">PlatForm Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="options"></b-form-select>
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
      <label for="input-none">IMEI* :</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
      <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Serial number*:</label>
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
       <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
   <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Model Name*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
     <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Model Band*:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
     <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Communication Media Type:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
        <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">IMSI:</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
      <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Telephone number:</label>
    </b-col>
    <b-col sm="5">
           <b-form-input></b-form-input>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
 
 <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Sim Type:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>
  <b-row class="my-1">
    <b-col sm="4">
      <label for="input-none">Operter:</label>
    </b-col>
    <b-col sm="5">
       <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3"> <strong></strong></div>
    </b-col>
  </b-row>


   <div id="add"> 
     <router-link to="/about"><b-button  pill variant="success" >ADD </b-button></router-link> 
  </div>
    <!-- <input name="image" type="file" id="file-field" v-on:change="updatePreview" style="display: none;"> -->
    </div>
    </b-jumbotron>
    
</template>


<script>

export default {

  data() {
    return {
      imagePreview: "",
     selected: null,
     options: [
          { value: null, text: 'Please select an option', disabled: true  },
          { value: 'a', text: 'A' },
          { value: 'b', text: 'B' },
           { value: 'c', text: 'C' },
          // { value: { C: '3PO' }, text: 'This is an option with object value' },
          // { value: 'd', text: 'This one is disabled', disabled: true }
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