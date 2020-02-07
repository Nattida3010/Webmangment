<template>
  <div id="app">
    <b-form  @submit="onSubmit"   >
      <b-form-group id="exampleInputGroup1"
                    label="Email:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="TestEmail"
                      required
                      placeholder="">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup2"
                    label="Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="TestName"
                      required
                      placeholder="">
        </b-form-input>
      </b-form-group>
      

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
       TestEmail: '',
       TestName : '',
      },
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
       alert(JSON.stringify(this.form));
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
}
</script>