<template>
  <div id="app">
    <b-form  >
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
 

     <b-button type="submit" variant="primary" @click="addToAPI">Submit</b-button>
   
      
    </b-form>

  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'hello',
  data () {
    return {
      form: {
       msg: 'Test',
       Email: '',
       Name : '',
      }
       }
  },
  methods: {
          addToAPI(){

              let sendData = {
                 Email: this.form.Email,
                Name: this.form.Name
            }
              console.log(sendData);
              axios.post('https://localhost:44322/insert/data',sendData)
                    .then((response) => {
                     console.log(response);
                    })
                .catch((error) => {
                          console.log(error);
                }); 
          
          
    },
     // eslint-disable-next-line no-unused-vars
     transformRequest: [(data, headers) => {
    // transform the data

    return data;
  }]
    }
  }

</script>