<template>
  <div class="">
    <v-row class="ma-0 pa-0">
      <v-col cols="12" md="8" sm="12" class="left-image">

        <router-link :to="{name:'home'}">
          <v-btn  color="primary">
            Go To Homepage
          </v-btn>
        </router-link>

      </v-col>

      <v-col cols="12" md="4" sm="12" class="right-form">
        <v-container class="fill-height">
          <v-row>
            <v-col  class="col-6 offset-3 text-center">
              <a href="/" class="text-decoration-none">
                <v-img src="@/assets/img/logo.png"></v-img>
              </a>
            </v-col>
          </v-row>

          <v-row class="ma-0 ">

            <v-col  class="col-12 ">
              <div class="form ">
                <h2 class="text-center blue--text">
                  We are glad you're here
                </h2>

                <ValidationObserver ref="registerObserver" v-slot="{ handleSubmit }">

                  <form ref="registerForm" @submit.prevent="handleSubmit(registerNow)">

                    <v-container>
                      <v-row>
                        <v-col class="col-12">
                          <ValidationProvider rules="name"  vid="fullname"  v-slot="{ errors }">
                            <v-text-field v-model="form.name" label="Fullname"    outlined
                                          hide-details="auto" :error-messages="errors[0]"
                            />
                          </ValidationProvider>
                        </v-col>

                        <v-col class="col-12">
                          <ValidationProvider rules="username"  vid="username" v-slot="{ errors }">
                            <v-text-field v-model="form.username" label="Username"    outlined
                                          hide-details="auto" :error-messages="errors[0]"
                            />
                          </ValidationProvider>
                        </v-col>

                        <v-col class="col-12">
                          <ValidationProvider rules="password" vid="password" v-slot="{ errors }">
                            <v-text-field
                                v-model="form.password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                name="password"
                                label="Password"
                                hint="At least 8 characters"
                                @click:append="show1 = !show1"
                                outlined
                                hide-details="auto" :error-messages="errors[0]"

                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>

                        <v-col>
                          <v-btn class="btn blue white--text montse" outlined size="x-large" type="submit" block> REGISTER </v-btn>

                        </v-col>
                      </v-row>

                      <v-row>

                        <v-col class="col-12">
                          <p> Already have an account?
                            <router-link to="/login">
                              <a> Sign In </a>
                            </router-link>
                          </p>

                          <div class="text-container col-12 text-center">
                            <span class="text"> OR </span>
                            <span class="line"></span>
                          </div>


                          <v-btn block color="" class="mt-4" >
                            <span class="mdi mdi-google"></span>
                            Google
                          </v-btn>
                          <v-btn block color="" class="mt-4" >
                            <span class="mdi mdi-facebook"></span>
                            Facebook
                          </v-btn>

                        </v-col>
                      </v-row>

                    </v-container>
                  </form>
                </ValidationObserver>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col  class="col-12 text-center footer-container">
              <div>
                <p class="footer-content">  Property In Nepal &copy;, All Rights Reserved</p>
              </div>
            </v-col>
          </v-row>


        </v-container>


      </v-col>
    </v-row>

  </div>
</template>


<script>
import '@/assets/login.scss'

import { ValidationObserver, ValidationProvider,extend ,configure } from 'vee-validate';

import { required } from 'vee-validate/dist/rules'


extend('username', {
  ...required,
  message: 'Username is required'
});
extend('name', {
  ...required,
  message: 'Name is required'
});

extend('password', {
  ...required,
  message: 'Password is required'
});


configure({
  validateOnInput: true,
  validateOnChange: true,
  validateOnBlur: true,
  generateMessage: context => {
    const messages = {
      required: '{_field_} is required',
      ...context.messages
    };
    return messages[context.rule.name](context);
  }
});


export default {
  metaInfo(){
    return{
      title:'Register',
      titleTemplate:this.$root.$options.titleTemplate,
    }
  },
  name: 'RegisterView',
  components: {
    ValidationObserver,ValidationProvider
  },
  data () {
    return {
      show1: false,
      show2: true,
      form:{
        name:'',
        username:'',
        password: '',
      },
      errors:[]

    }
  },
  methods:{
    registerNow(){
      this.$refs.registerObserver.validate().then(result => {
        if (result) {
          this.$axios.post('#',this.form)
              .then(response => {
                if (response.status == '200'){
                  this.$refs.registerObserver.reset();
                  this.form.name = '';
                  this.form.username = '';
                  this.form.password = '';
                  this.errors = null;

                  //redirect
                  this.$router.push({name:'register'});
                }
              })
              .catch(error => {
                this.errors = error.response.data.errors;
                this.$refs.registerObserver.setErrors(this.errors);
              })
        }
      });

    }
  }
}
</script>


<style media="screen" scoped>



</style>
