<template>
  <div>
      <v-form v-model="valid">
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="title"
            :rules="nameRules"
            label="Title"
            :counter="20"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
    <v-container>
        <v-flex xs12 md6 class="align">
        <v-textarea
          outlined
          v-model="description"
          name="input-7-4"
          label="Description"
          value=""
        ></v-textarea>
      </v-flex> 
      <v-flex xs12 md6 class="align">
        <v-textarea
          outlined
          v-model="pRequest"
          name="input-7-4"
          label="Purpose of Request"
          value=""
        ></v-textarea>
      </v-flex>
    <v-flex xs12 md4 class="align">
    <v-combobox
      v-model="model"
      :items="items"
      :search-input.sync="search"
      :hide-selected="hideSelected"
      label="Add some tags"
      :multiple="multiple"
      persistent-hint
      :small-chips="chips"
      :clearable="clearable"
    >
      <template v-if="noData" v-slot:no-data align-center justify-center>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      
    </v-combobox>
        <v-btn class="ma-2 align" outlined large   color="indigo"  @click="onSubmit">
            Submit
        </v-btn>
    </v-flex>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      model: [],
      search: null,
      chips: true,
      multiple: true,
      hideSelected: true,
      noData: true,
      clearable: false,
      valid: false,
      firstname: '',
      lastname: '',
      description: '',
      pRequest: '',
      title: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
        onSubmit() {
            let obj = {
                userId: this.$store.state.userId,
                firstname: this.firstname,
                lastname: this.lastname,
                pRequest: this.pRequest,
                title: this.title,
                description: this.description
            }
            this.$store.dispatch('addStarTups', obj)
            // console.log(obj)
        }
    }
  }
</script>

<style scoped>
.align {
    margin: auto !important;
}
</style>
