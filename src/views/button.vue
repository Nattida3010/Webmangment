<template>
  <div style="text-align:center;" >
    <h1>Export JSON to Excel</h1>
    <button @click="onExport" >Export</button> <!-- เพิ่มปุ่ม Export -->
  </div>
</template>

<script>
import XLSX from 'xlsx' // import xlsx
export default {
  name: 'app',
  data(){
    return {
      // ข้อมูล JSON ทีต้องการ Export
      json : [
        { name: 'Dady', age: '21' },
        { name: 'Jonh', age: '25' },
        { name: 'James', age: '17' },
      ]
    }
  },
  methods: {
    // เมื่อกดปุ่มจะทำการสร้างไฟล์ xcel ด้วย xlsx
    onExport() {
      const dataWS = XLSX.utils.json_to_sheet(this.json)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, dataWS)
      XLSX.writeFile(wb,'export.xlsx')
    },
  }
}
</script>