<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Vue Axios Post</div>
    
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>Name:</strong>
                        <input type="text" class="form-control" v-model="Name">
                      <strong>Email:</strong>
                        <input type="email" class="form-control" v-model="Email">
    
                        <button class="btn btn-success">Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
     
<script>
import axios from 'axios';
    export default {
        data() {
            return {
              Name: '',
              Email: '',
              output: ''
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
               
                let currentObj = this;
                axios.post('https://localhost:44322/insert/data', {
                   
                Email  :this.data.Email,
                Name  : this.data.Name
          
                })
                
                .then(function (response) {
                    currentObj.output = response.data.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
    }
</script>