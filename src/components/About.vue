<template>  

<div class="container" style="margin-top:5%" >
  
    <b-table striped hover :items="info" :fields="fields">
         <template v-slot:cell(Edit)="row">
        <a name="" id="" class="btn btn-primary" href="#" role="button">EDIT</a>
      </template>
          <template v-slot:cell(Insert)="row">
        <button>insert</button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {
        AppPlatID: "",
       CmTypeId: "",
        IMEI: "",
       Manufacturer: "",
      
      },
      fields: [
          {
            key: 'AppPlatID',
            sortable: true
          },
          {
            key: 'CmTypeId',
            sortable: false
          },
          {
            key: 'IMEI',
            sortable: true,
          },
          {
            key: 'Manufacturer',
            sortable: true,
          },
           {
            key: 'Edit',
            sortable: true,
          },
           {
            key: 'Insert',
            sortable: true,
          }
        ],
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