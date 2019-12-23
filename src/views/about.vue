<template>

  <table class="table" id ="tb">
    <tr style="background-color: #92a8d1" >
   
      <td class="sbjname" >SubjectNameEN</td>
      <td>SubjectCode</td>
      <td>SubjectID</td>
      <td>SubjectNameEN</td>
      <td>EduYearTH</td>
      <td>Grade</td>
    </tr>

    <template v-for="(v) in info">
      <tr v-if="(v.EduYearTH =='2559')" :key="v">
        <td class="sbjname">{{v.SubjectNameEN}}</td>
        <td>{{v.SubjectCode}}</td>
          <td>{{v.SubjectID}}</td>
            <td>{{v.SubjectNameEN}}</td>
             <td>{{v.EduYearTH}}</td>
        <td>{{v.Grade}}</td>
      </tr>
    </template>
   
  </table>
  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {
        StudentID: "",
        SubjectID: "",
        SubjectCode: "",
        SubjectNameTH: "",
        SubjectNameEN: "",
        EduYearTH: "",
        EduTerm: "",
        Grade: ""
      }
    };
  },
  mounted() {
    var self = this;
    axios
      .get("https://sispsu.herokuapp.com/api/grade/5930213034/")
      .then(function(response) {
        // console.log(JSON.stringify(response.data.data));
        self.info = response.data.data;
      });
  }
};
</script>
