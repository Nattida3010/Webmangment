

<template>
  <div class="user">

<input type="text" v-model="userinfo.name" placeholder="EnteryourName"><br>
<input type="text" v-model="userinfo.eamil" placeholder="EnteryourEmail"><br>
<input type="text" v-model="userinfo.age" placeholder="EnteryourAge"><br>
<input type="text" v-model="userinfo.Britday" placeholder="EnteryourBrithday"><br>
<button v-on:click="adduser()">add</button>

    <ul>
    <li v-for="{email, name,age,Britday} in userinfo" :key="name">{{name}} Email:{{email}} age:{{age}} birthday: {{Britday}}</li>
</ul>
  </div>
</template>
<script>
export default {
  name: 'user',
  data(){
    return{
      userinfo: [
        
      ]
    }
  },
  methods: {
  adduser: function(){
    this.userinfo.push({
      name : this.userinfo.name,
      email : this.userinfo.email,
      age : this.userinfo.age,
      Britday : this.userinfo.Britday,
    })
  }
  },
}
</script>