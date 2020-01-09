<template>
<form @submit.prevent="onsubmit()">
  <va-input
    v-model="email"
    type="email"
    :label="$t('auth.email')"
    :error="!!emailErrors.length"
    :error-messages="emailErrors"
  />

  <va-input
    v-model="password"
    type="password"
    :label="$t('auth.password')"
    :error="!!passwordErrors.length"
    :error-messages="passwordErrors"
  />

  <div class="auth-layout__options d-flex align--center justify--space-between">
    <va-checkbox
      v-model="agreedToTerms"
      class="mb-0"
      :error="!!agreedToTermsErrors.length"
      :errorMessages="agreedToTermsErrors"
    >
      <template slot="label">
        {{ $t('auth.agree') }}
        <span class="link">{{ $t('auth.termsOfUse') }}</span>
      </template>
    </va-checkbox>
    <router-link class="ml-1 link" :to="{name: 'recover-password'}">
      {{$t('auth.recover_password')}}
    </router-link>
  </div>

  <div class="d-flex justify--center mt-3">
    <va-button type="submit" class="my-0">{{ $t('auth.sign_up') }}</va-button>
  </div>
</form>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: '',
      agreedToTerms: false,
      emailErrors: [],
      passwordErrors: [],
      agreedToTermsErrors: [],
    }
  },
  methods: {
    onsubmit () {
      this.emailErrors = this.email ? [] : ['Email is required']
      this.passwordErrors = this.password ? [] : ['Password is required']
      this.agreedToTermsErrors = this.agreedToTerms ? [] : ['You must agree to the terms of use to continue']
      if (!this.formReady) {
        return
      }
      this.$router.push({ name: 'dashboard' })
    },
  },
  computed: {
    formReady () {
      return !(this.emailErrors.length || this.passwordErrors.length || this.agreedToTermsErrors.length)
    },
  },
}
</script>

<style lang="scss">
</style>

//////


<div class="container" style="margin-top:5%" >
    <table class="table table-bordered">
    <tr style="background-color: #92a8d1" >
   
      <td class="sbjname" >ContactID</td>
      <td>Name</td>
      <td>Address</td>
      <td>Mobile</td>
      <!-- <td>EduYearTH</td>
      <td>Grade</td> -->
            <td>Delete</td>
      <td>EDit</td>
      <td>Viwe</td>
    </tr>

    <template v-for="(v) in info" >
      <tr v-if="(v.ContactID=='5930222222')" :key="v">
        <td  class="sbjname">{{v.ContactID}}</td>
        <td >{{v.Name}}</td>
          <td>{{v.Address}}</td>
            <td>{{v.Mobile}}</td>
             <!-- <td>{{v.EduYearTH}}</td>
        <td>{{v.Grade}}</td> -->
   <td><b-button   variant="outline-danger" >Delete</b-button></td>
  <td> <b-button variant="outline-warning" to="/edit">Edit</b-button></td>
  <td><b-button  v-b-modal.modal-center variant="outline-success" >Viwe</b-button></td>
      </tr>
     
    </template>
  </table>
  <div>  <b-modal id="modal-center" centered title="รายละเอียด">
    <p class="my-4">
      
      
 
      
        </p>
  </b-modal>
</div>
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {
        ContactID: "",
       Name: "",
        Address: "",
       Mobile: "",
        // SubjectNameEN: "",
        // EduYearTH: "",
        // EduTerm: "",
        // Grade: ""
      }
    };
  },
  mounted() {
    var self = this;
    axios
      .get("https://localhost:44322/device/testdata")
      .then(function(response) {
        console.log(JSON.stringify(response.data.data));
        self.info = response.data;
      });
  }
};
</script>