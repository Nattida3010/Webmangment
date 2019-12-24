<template>  

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
      .get("https://localhost:44362/student/NameMethod2")
      .then(function(response) {
        console.log(JSON.stringify(response.data.data));
        self.info = response.data;
      });
  }
};
</script>
