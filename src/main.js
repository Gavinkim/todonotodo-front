import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert'
import EditIdeaDetailsDialog from './components/Idea/Edit/EditIdeaDetailsDialog'

Vue.config.productionTip = false
Vue.filter('date',DateFilter)
Vue.component('app-alert',AlertCmp)
Vue.component('app-edit-idea-details-dialog',EditIdeaDetailsDialog)

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
      firebase.initializeApp({
          apiKey: 'AIzaSyB26TpHRS887dl2kRq7bwDYs9xNHBTgccA',
          authDomain: 'todonotodo-8d911.firebaseapp.com',
          databaseURL: 'https://todonotodo-8d911.firebaseio.com',
          projectId: 'todonotodo-8d911',
          storageBucket: 'todonotodo-8d911.appspot.com',
      });
      //trigger
      firebase.auth().onAuthStateChanged((user)=>{
         if(user){
             this.$store.dispatch('autoSignIn',user)
         }
      });
      this.$store.dispatch('loadIdeas')
    }
}).$mount('#app')
