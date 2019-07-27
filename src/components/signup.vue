<template>
    <v-app>
         <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title> Sign Up</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="E-mail"
                    name="email"
                    prepend-icon="person"
                    type="email"
                    v-model="email"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="register">Sign Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
</template>

<script>
import { access } from 'fs';
export default {
    data(){
        return{
            email: null,
            password: null
        }
    },
    methods: {
        register(){
            axios.post('/register', {email: this.email, password: this.password})
           
            .then((response) => {
                console.log(response);
                let accessToken = response.data.payload;
                localStorage.setItem('token', accessToken);
                localStorage.setItem('user', response.data.user);
            })
            .catch((error) =>{
                console.log(error);
            })
         },
          methods:{
         getInfo(){
             axios.get('/me')
             .then(response =>{
                 console.log(response);
             })
         }
    }
        
    }

}
</script>

<style>

</style>
