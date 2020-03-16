<template>
  <b-container fluid>
    <!-- User Interface controls -->
 

    <!-- Main table element -->
    <b-table
     
      :items="item"
      :fields="fields"
      
    >
    

      <template v-slot:cell(actions)="row">
        
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        item: [
          { isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' } },
          { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
          {
            isActive: false,
            age: 9,
            name: { first: 'Mini', last: 'Navarro' },
            _rowVariant: 'success'
          },

        ],
        fields: [
        
      
          { key: 'actions', label: 'Actions' }
        ],
       
      }
    },
  
    mounted() {
      
      this.totalRows = this.item.length
    },
    methods: {
    
     
    }
  }
</script>