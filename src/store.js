import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex);

export default new Vuex.Store({
    //initial
    state: {
      loadIdeas:[
          {
              _id:'1',
              title:"Then we'll go with that data file Then we'll go with that data file Then we'll go with that data file Then we'll go with that data file!",
              content:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
              favorite:30,
              created: '2018-08-20',
          },
          {
              _id:'2',
              title:"Amazon Linux Amazon Linux Amazon Linux Amazon Linux Amazon Linux Amazon Linux Amazon Linux Amazon Linux",
              content:"We use $releasever for repository path in the script and $releasever should be \"year.month\" format like \"2017.09\". On AWS, some services modify $releasever to own format and it will cause installation failure. If your environment's $releasever is non-\"year.month\" format, change it to \"year.month\" format or setup TD repository manually.",
              favorite:20,
              created: '2018-08-20'
          },
          {
              _id:'3',
              title:"3 Amazon Linux Amazon Linux Amazon Linux Amazon Linux Amazon Linux Amazon Linux Amazon Linux Amazon Linux",
              content:"We use $releasever for repository path in the script and $releasever should be \"year.month\" format like \"2017.09\". On AWS, some services modify $releasever to own format and it will cause installation failure. If your environment's $releasever is non-\"year.month\" format, change it to \"year.month\" format or setup TD repository manually.",
              favorite:20,
              created: '2018-08-20'
          }
      ],
      user: null
    },
    mutations: {
        createIdea (state,payload){
            state.loadIdeas.push(payload)
        },
        setUser(state,payload){
            state.user = payload
        }
    },
    actions: {
        createIdea({commit},payload){
            const idea = {
               _id: 'asdas',
                title: payload.title,
                content: payload.title,
                created: payload.created,
            };
            // Reach out to firebase and store it
            commit('createIdea',idea);
        },
        signUserUp({commit},payload){
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.uid,
                            createdIdeas: []
                        };
                        commit('setUser',newUser);
                    }
                )
                .catch(
                    error=>{
                        console.log(error);
                    }
                )
        },
        signUserIn({commit},payload){
            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.uid,
                            createdIdeas: []
                        };
                        commit('setUser',newUser);
                    }
                )
                .catch(
                    error=>{
                        console.log(error);
                    }
                )
        }
    },
    getters: {
        // all idea
        loadedIdeas (state){
            return state.loadIdeas.sort((ideaA, ideaB)=>{
                return ideaA.created > ideaB.created;
            });
        },
        // find idea by id
        loadedIdea(state){
            return (ideaId) => {
                return state.loadIdeas.find((idea)=>{
                    return idea._id === ideaId
                })
            }
        },
        //popular idea top 5
        popularIdeas(state,getters){
            return getters.loadedIdeas.slice(0,2);
        },
        user (state){
            return state.user
        }
    }
})
