<template>
  <div id="app">
    <b-form  @submit="onSubmit"   >
      <b-form-group id="exampleInputGroup1"
                    label="Email:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.Email"
                      required
                      placeholder="">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup2"
                    label="Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.Name"
                      required
                      placeholder="">
        </b-form-input>
      </b-form-group>
      <!-- <b-form-group id="exampleInputGroup3"
                    label="InsertManufacturer:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput"
                      type="text"
                      v-model="form.Manufacturer"
                      required
                      placeholder="Harry Tech Co.,Ltd">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup4"
                    label="InsertIoTPlatID:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.IoTPlatID"
                      required
                      placeholder="IOT5896">
        </b-form-input>
       </b-form-group>
        <b-form-group id="exampleInputGroup5"
                    label="nsertAppPlatID :"
                    label-for="exampleInput5">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.AppPlatID"
                      required
                      placeholder="AP4584">
        </b-form-input>
       </b-form-group>
        <b-form-group id="exampleInputGroup6"
                    label="InsertStatusID:"
                    label-for="exampleInput6">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.StatusID"
                      required
                      placeholder="S4625">
        </b-form-input>
       </b-form-group>

 <b-form-group id="exampleInputGroup7"
                    label="InsertModelID:"
                    label-for="exampleInput7">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.ModelID"
                      required
                      placeholder="M1455">
        </b-form-input>
       </b-form-group>
 <b-form-group id="exampleInputGroup8"
                    label="InsertCmTypeID:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.TypeID" 
                      required
                      placeholder="CT579">
        </b-form-input>
       </b-form-group> -->



      

     <b-button type="submit" variant="primary">Submit</b-button>
   
      
    </b-form>

  </div>
</template>
<script>


export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      form: {
       Email: '',
       Name : '',
      },
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
       alert(JSON.stringify(this.form));

    
          const  sendData = {
          Email  :this.form.Email,
          Name  : this.form.Name
          }
           this.axios.post("http://localhost:44322/insert/data",sendData ,{
                headers: {
                  "Access-Control-Allow-Origin": "*"
                }
          })
           console.log(JSON.stringify("test"));
       
      
    },
    
  }
}
</script>