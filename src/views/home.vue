<template>

<div class="container" style="margin-top:5%" >
       <b-row>
     <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      </b-row>
      <b-table striped hover
           :items="categories" 
           :fields="fields" 
           :filter="filter"
            :per-page ="pageSize"
            :current-page="pageIndex">
       
            <template slot="EDIT" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
      
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
        </template>
         <template slot="action" slot-scope="row">

       <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
          </b-button>
m</template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
            </b-table>
            <b-col md="6" class="my-1">
  <b-pagination align="center" size="md" :total-rows="items.length" v-model="pageIndex" :per-page="pageSize">
    </b-pagination> 
     </b-col>
    <br>
 <b-col md="6" class="my-1">
    <div>CurrentPage: {{pageIndex}}</div>  
     </b-col>
            <b-pagination  align="center"  size="md" :total-rows="categories.length" v-model="pageIndex" :per-page="pageSize">
    </b-pagination>
    </div>
    
</template>
<script>
import axios from "axios";

export default {
    name : "categories",
    data(){
        return {
            message: "Project 2",
            categories:[],
            pageSize:10,
            pageIndex:1,
            filter: null,
            fields:[
            {
                key:"SubjectNameEN",
                sortable : true,
                  variant : 'info'
            },
            {
                key:"SubjectCode",
                sortable : true,
               variant :"danger"
            },
            {
                key:"EduYearTH",
                sortable : true,
                variant : "success"
            },
             {
                key:"Grade",
                sortable : true,
                variant : "success"
            },
                {
                key:"EDIT",
             
            },
            {  key:"DELETE",
       

            },
            {
                key:"VIWE",
            
            }
            ],
        }
    },
    computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
    mounted(){
      var instance = this;
        axios
        .get("https://sispsu.herokuapp.com/api/grade/5930213034/")
        .then(function(response){
            console.log(response.data);
          instance.categories = response.data.data;
        });
    }
};
</script>