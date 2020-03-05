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
        <!-- Test -->
        <b-form  >   

             <b-row class="my-1">
               <b-col sm="4">
                  <label  >GateWay Name*:</label>
               </b-col>
                <b-col sm="5">
                 <b-form-select  v-model="InsertGateWayID" :options="GateWay" required></b-form-select>
                 <div class="mt-3"> <strong></strong></div>
                </b-col>
             </b-row>

             <b-row class="my-1">
                <b-col sm="4">
                  <label>Application Name*:</label>
                </b-col>
                <b-col sm="5">
                  <b-form-select   v-model= "InsertAppID"  :options="Application"  required></b-form-select>
                <div class="mt-3"> <strong></strong></div>
                </b-col>
             </b-row>

              <b-row class="my-1">
                <b-col sm="4">
                  <label>Manufacturer Name*:</label>
                </b-col>
                <b-col sm="5">
                  <b-form-select v-model="InsertManufacturer" :options="manufacturer" required  ></b-form-select>
                <div class="mt-3"> <strong></strong></div>
                </b-col>
              </b-row>

                <b-row class="my-1">
                <b-col sm="4">
                  <label>Firmware*:</label>
                </b-col>
                <b-col sm="5">
                <b-form-select v-model="InsertFirmware" :options="firmware " required  ></b-form-select> 
                <div class="mt-3"> <strong></strong></div>
                </b-col>
              </b-row>

              <b-row class="my-1">
                <b-col sm="4">
                  <label>Model Name*:</label>
                </b-col>
                <b-col sm="5">
                  <b-form-select v-model="InsertModelID" :options="modelname" required  ></b-form-select>
                <div class="mt-3"> <strong></strong></div>
                </b-col>
              </b-row>
            
            
               <b-row class="my-1">
                <b-col sm="4">
                  <label >Communication Media Type * :</label>
                </b-col>
                <b-col sm="5">
                  <b-form-select v-model="CmTypeID" :options="communication" required ></b-form-select>
                <div class="mt-3"> <strong></strong></div>
                </b-col>
              </b-row>
                <b-row class="my-1">
                <b-col sm="4">
                  <label > Contractnumber * :</label>
                </b-col>
                <b-col sm="5">
                  <b-form-select v-model="contractnumberid" :options="contractnum" required  ></b-form-select>
                 <div class="mt-3"> <strong></strong></div>
                </b-col>
              </b-row>

                <b-row class="my-1">
                <b-col sm="4">
                  <label > Device status * :</label>
                </b-col>
                <b-col sm="5">
                <b-form-select   type="text" v-model="statusDevice" :options="status" required ></b-form-select>
                <div class="mt-3"> <strong></strong></div>
                </b-col>
              </b-row>
                <!-- <router-link to="/AllDevices"><b-button   pill variant="success" >ADD </b-button></router-link>  -->
                 
                   <div class="col-sm-offset-3 col-sm-9">
                   <b-button type="submit"  @click="save()" >save</b-button>
                   </div>

                </b-form>
        <!-- <div class="col-sm-offset-3 col-sm-9">
          <div class="checkbox-inline">
            <label for="header_rows"><input type="checkbox" id="header_rows"> File contains header row?</label>
          </div>
        </div> -->
        <!-- <table v-if="parse_csv" style="width:100%">
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
          
        </table> -->
        <!-- <div class="col-sm-offset-3 col-sm-9">
         <button   @click="save()" >save</button>
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
      sortKey: '',
      lines_t :'',
       form: {
          InsertIMEI: '',
          InsertSerialNumber : '',
          InsertManufacturer: '',
          InsertFirmware : '',
          InsertGateWayID : '',
          InsertAppID: '',
          InsertModelID: '',
          CmTypeID: '',
          statusDevice : '',
          contractnumberid : '' ,
          },
          imagePreview: "",
          InsertIMEI: null,
          InsertSerialNumber : null,
          InsertManufacturer: null,
          InsertFirmware : null,
          InsertGateWayID : null,
          InsertAppID: null,
          InsertModelID: null,
          CmTypeID: null,
          statusDevice : null,
          contractnumberid : null,
          
            GateWay : [
              { value: null, text: 'Please select an option', disabled: true  },
              { value: 'GW001', text: 'Ocean Connect' },
            ],
            manufacturer: [
              { value: null, text: 'Please select an option', disabled: true  },
              { value: 'M0001', text: 'Arrow Tech Co.,Ltd' },
            ],
            communication: [
              { value: null, text: 'Please select an option', disabled: true  },
              { value: 'CT001', text: '4G' },
              { value: 'CT002', text: '3G' },
              { value: 'CT003', text: 'NB-IOT' },
              { value: 'CT004', text: 'LORA' },
            ],
            status : [
              { value: null, text: 'Please select an option', disabled: true  },
              { value: 'S0001', text: 'online' },
              { value: 'S0002', text: 'offline' },
              { value: 'S0003', text: ' N/A' },
              
            ],
              firmware : [
              { value: null, text: 'Please select an option', disabled: true  },
              { value: 'F0001', text: ' N/A' },
              
            ],
            Application : [
              { value: null, text: 'Please select an option', disabled: true  },
              { value: 'AP001', text: 'Tamroi' },
                { value: 'N/A', text: ' N/A' },
              
            ],
            contractnum : [
              { value: null, text: 'Please select an option', disabled: true  },
              { value: 'S0001', text: 'S001' },
                { value: 'PE012', text: 'PE012' },
              
            ],
        
            modelname: [
              { value: null, text: 'Please select an option', disabled: true  },
              { value: 'M0001', text: 'A' },
              { value: 'M0002', text: 'B' },
              { value: 'M0003', text: 'C' },
              { value: 'M0004', text: 'D' },
            ],
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
      vm.lines_t = JSON.stringify(lines)
       //console.log(JSON.stringify('lines :'+lines));
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
      // alert('Test');
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
    save() {
    
          console.log("function save")
          console.log(this.lines_t)
           
    
          // send a POST request
          this.axios({
            method: 'post',
            url: 'https://localhost:44322/import/testCSV',
          
            data: {     
                      
                        InsertManufacturer: this.InsertManufacturer,
                        InsertFirmware : this.InsertFirmware,
                        InsertGateWayID : this. InsertGateWayID,
                        InsertAppID: this.InsertAppID,
                        InsertModelID: this.InsertModelID,
                        CmTypeID: this.CmTypeID,
                        statusDevice : this. statusDevice,
                        contractnumberid : this.contractnumberid, 
                        dataAll : this.lines_t
                    },
                      
                 
                })
                        .then(function (response) {
                            console.log(response);
                              alert('Test');
                              window.location.reload();
                        })
                        .catch(function (error) {
                            console.log(error);
                     
                            
                        });
                      
             //console.log(JSON.stringify(values));
              //  window.location.reload();
                    console.log(
                                 this.InsertManufacturer + "|" +
                                 this.InsertFirmware + "|" +
                                 this. InsertGateWayID + "|" +
                                 this.InsertAppID + "|" +
                                 this.InsertModelID + "|" +
                                 this.CmTypeID + "|" +
                                 this. statusDevice  + "|" +
                                 this.contractnumberid
                                             );
                                       
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
</style> 

