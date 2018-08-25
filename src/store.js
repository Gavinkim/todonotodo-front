import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex);

export default new Vuex.Store({
    //initial
    state: {
      loadedIdeas:[
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
      user: null,
      loading: false,
      error: null
    },
    mutations: {
        setLoadedIdeas(state,payload){
            state.loadedIdeas = payload;
        },
        createIdea (state,payload){
            state.loadIdeas.push(payload)
        },
        setUser(state,payload){
            state.user = payload
        },
        setLoading(state,payload){
            state.loading = payload
        },
        setError(state,payload){
            state.error = payload
        },
        clearError(state){
            state.error = null
        }
    },
    actions: {
        loadIdeas ({commit}){
          commit('setLoading',true);
          firebase.database().ref('todonotodo').once('value')
              .then((data)=>{
                  const ideas = [];
                  const obj = data.val();
                  for(let key in obj){
                      ideas.push({
                          _id: key,
                          title: obj[key].title,
                          content: obj[key].content,
                          created: obj[key].created
                      })
                  }
                  commit('setLoadedIdeas',ideas);
                  commit('setLoading',false);
              })
              .catch(
                  (error)=>{
                      commit('setLoading',true);
                  }
              )
        },
        createIdea({commit},payload){
            const idea = {
                title: payload.title,
                content: payload.title,
                created: payload.created.toISOString(),
                favorite: 0
            };
            firebase.database().ref('todonotodo').push(idea)
                .then((data) => {
                    const key = data.key;
                    commit('createIdea',{
                        ...idea,
                        _id: key
                    });
                })
                .catch((error)=>{
                    console.log(error);
                });
        },
        signUserUp({commit},payload){
            commit('setLoading',true);
            commit('clearError');
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
                .then(
                    user => {
                        commit('setLoading',false);
                        const newUser = {
                            id: user.uid,
                            createdIdeas: []
                        };
                        commit('setUser',newUser);
                    }
                )
                .catch(
                    error=>{
                        commit('setLoading',false);
                        commit('setError',error);
                        console.log(error);
                    }
                )
        },
        signUserIn({commit},payload){
            commit('setLoading',true);
            commit('clearError');
            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
                .then(
                    user => {
                        commit('setLoading',false);
                        const newUser = {
                            id: user.uid,
                            createdIdeas: []
                        };
                        commit('setUser',newUser);
                    }
                )
                .catch(
                    error=>{
                        commit('setLoading',false);
                        commit('setError',error);
                        console.log(error);
                    }
                )
        },
        clearError({commit}){
            commit('clearError');
        }
    },
    getters: {
        // all idea from firebase
        loadedIdeas (state){
            return state.loadedIdeas.sort((ideaA, ideaB)=>{
                return ideaA.created > ideaB.created;
            });
        },
        // find idea by id
        loadedIdea(state){
            return (ideaId) => {
                return state.loadedIdeas.find((idea)=>{
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
        },
        loading (state){
            return state.loading;
        },
        error(state) {
            return state.error
        }
    }
})
