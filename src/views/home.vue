<template>

  <div class="container">
    <div class="panel panel-sm">
      <div class="panel-heading"> 
        <h4>CSV Import</h4>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label for="csv_file" class="control-label col-sm-3 text-right">CSV file to import</label>
          <div class="col-sm-9">
            <input type="file" id="csv_file" name="csv_file" class="form-control" @change="loadCSV($event)">
          </div>
        </div>
        <!-- <div class="col-sm-offset-3 col-sm-9">
          <div class="checkbox-inline">
            <label for="header_rows"><input type="checkbox" id="header_rows"> File contains header row?</label>
          </div>
        </div> -->
        <table v-if="parse_csv" style="width:100%">
          <thead>
            <tr> 
              <th v-for="key in parse_header"  :key="key.id"
                  @click="sortBy(key)"
                  :class="{ active: sortKey == key }">
                {{ key | capitalize }}
                <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                </span>
              </th>
            </tr>
          </thead> 
          <tr v-for="csv in parse_csv" :key="csv.id" >
            <td v-for="key in parse_header" :key="key.id" > 
              {{csv[key]}}
            </td>
          </tr>
          
        </table>
        <!-- <div class="col-sm-offset-3 col-sm-9">
          <a href="#" class="btn btn-primary">Parse CSV</a>
        </div> -->
       
      </div>
    </div>
    
  </div>

</template>

<script>
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
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    csvJSON(csv){
      var vm = this
      // console.log(JSON.stringify('vm :'+vm));
      var lines = csv.split("\n")
       console.log(JSON.stringify('lines :'+lines));
      var result = []
       //console.log(JSON.stringify('result :'+result));
      var headers = lines[0].split(",")
      //console.log(JSON.stringify('headers :'+headers));
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
       // console.log(JSON.stringify(obj));
      })
      alert('Test');
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
    },
      
  }
};
</script>
<style scoped>
 /* table, th, td {
   border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
}  */
</style> >

