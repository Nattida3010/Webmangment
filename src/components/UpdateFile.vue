<template>
    <b-jumbotron style="background-image: linear-gradient(#FFFFFF,#D7E1EC);" >
    <div class="container" align="center" id="jum">
      <div id="export">
    <b-button @click="onExport"  variant="info"  >Export </b-button>
      </div>
      <div class="panel-body">
        <div class="form-group">
         
          <div class="col-sm-9">
            <input type="file" id="csv_file" name="csv_file" class="form-control" @change="loadCSV($event)">
          </div>
        </div>
       
      </div>
    </div>
           <b-button  style="margin-left: 50%;"   type="submit" @click="save()" >save</b-button>
   <!-- <template>
 <table v-if="parse_csv">
          <thead>
            <tr>
              <th v-for="key in parse_header" :key="key.id"
                  @click="sortBy(key)"
                  :class="{ active: sortKey == key }">
                {{ key | capitalize }}
                <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                </span>
              </th>
            </tr>
          </thead> 
          <tr v-for="csv in parse_csv" :key="csv.id" > 
            <td v-for="key in parse_header" :key="key.id">
              {{csv[key]}}
            </td>
          </tr>
        </table>
   </template> -->


    </b-jumbotron>
 
    
</template>
 

<script>
import XLSX from 'xlsx' // import xlsx
export default {

 data() {
    return {
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders:{},
      sortKey: ''
    };
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
     onExport() {
      const dataWS = XLSX.utils.json_to_sheet(this.json)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, dataWS)
      XLSX.writeFile(wb,'export.xlsx')
    },
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    csvJSON(csv){
      var vm = this
      var lines = csv.split("\n")
      var result = []
      var headers = lines[0].split(",")
      vm.parse_header = lines[0].split(",") 
      lines[0].split(",").forEach(function (key) {
        vm.sortOrders[key] = 1
      })
      
      lines.map(function(line, indexLine){
        if (indexLine < 1) return // Jump header line
        
        var obj = {}
        var currentline = line.split(",")
        
        headers.map(function(header, indexHeader){
          obj[header] = currentline[indexHeader]
        })
        
        result.push(obj)
      })
      
      result.pop() // remove the last item because undefined values
      
      return result // JavaScript object
    },
    loadCSV(e) {
      var vm = this
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        // Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result;
          vm.parse_csv = vm.csvJSON(csv)
          
        };
        reader.onerror = function(evt) {
          if(evt.target.error.name == "NotReadableError") {
            alert("Canno't read file !");
          }
        };
      } else {
        alert('FileReader are not supported in this browser.');
      }
    }
  }
};
</script>
<style scoped>
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
 th, td {
        padding: 10px;
        border: 1px solid #666;
      }

</style>