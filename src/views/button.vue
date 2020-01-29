<template>
  <div id="app">
    <b-form  @submit="onSubmit"  class="ml-5 mt-5 mr-5 mb-5">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="First Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.firstName"
                      required
                      placeholder="Enter first name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Last Name:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.lastName"
                      required
                      placeholder="Enter last name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="fileGroup"
                    label="Upload Id:">
        <b-form-file accept="image/jpeg, image/png, image/jpg"
                    v-model="form.fileId"  
                    required
                    placeholder="Photo Id..."></b-form-file>
      </b-form-group>
      <b-form-group id="fileGroup"
                    label="Upload Selfie:">
        <b-form-file accept="image/jpeg, image/png, image/jpg"
                      v-model="form.fileSelf"  
                      required
                      placeholder="Selfie.."></b-form-file>
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
        email: '',
        firstName: '',
        lastName: '',
        fileId:null,
        fileSelf:null,
      },
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      let config = {
          headers: {
              "x-api-key": "YOUR_API_KEY"
          }
      }
      const fd = new FormData();
        fd.append('file', this.form.fileId);
        fd.append('type', 'passport'); // lets say this is passport
      this.axios.post("https://api.argos-solutions.io/v2/submissions/upload",fd, config).then((response) => {
        console.log(response.data)
        var photoIdHash = response.data.filehash;

        const fd2 = new FormData();
          fd2.append('file', this.form.fileSelf);
          fd2.append('type', 'selfie');
        this.axios.post("https://api.argos-solutions.io/v2/submissions/upload",fd2, config).then((response) => {
          console.log(response.data)
          var photoSelfieHash = response.data.filehash;

          var sendData = "";
          sendData =sendData+ "email="+this.form.email;
          sendData =sendData+ "&first_name="+this.form.firstName;
          sendData =sendData+ "&last_name="+this.form.lastName;
          sendData =sendData+ "&nationality="+'South Korea, KOR';
          sendData =sendData+ "&date_of_birth="+'1980-01-01';
          sendData =sendData+ "&gender="+'male';
          sendData =sendData+ "&id_type="+'passport';
          sendData =sendData+ "&photoid_res="+photoIdHash;
          sendData =sendData+ "&selfie_res="+photoSelfieHash;
          sendData =sendData+ "&kyc_level="+'L1';
          sendData =sendData+ "&wallet_address="+'0xAAA';
          sendData =sendData+ "&estimated_amount="+'100';
          sendData =sendData+ "&contribution_type="+'ETH' ;

          this.axios.post("https://api.argos-solutions.io/v2/submissions",sendData, config).then((response) => {
            console.log(response.data)
          })
        })
      })
    }
  }
}
</script>