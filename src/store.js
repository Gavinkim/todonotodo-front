import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
    //initial
    state: {
      loadedIdeas:[],
      user: null,
      loading: false,
      error: null
    },
    mutations: {
        setLoadedIdeas(state,payload){
            state.loadedIdeas = payload
        },
        createIdea (state,payload){
            state.loadedIdeas.push(payload)
        },
        updateIdea(state,payload){
          const idea = state.loadedIdeas.find(idea => {
              return idea.id === payload.id
          });
          if(payload.title){
              idea.title = payload.title
          }
          if(payload.content){
              idea.content = payload.content
          }
          if(payload.title || payload.content){
              idea.updated = new Date()
          }
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
          commit('setLoading',true)
          firebase.database().ref('todonotodo').once('value')
              .then((data)=>{
                  const ideas = []
                  const obj = data.val()
                  for(let key in obj){
                      ideas.push({
                          id: key,
                          title: obj[key].title,
                          content: obj[key].content,
                          favorite: obj[key].favorite,
                          created: obj[key].created,
                          creatorId: obj[key].creatorId
                      })
                  }
                  commit('setLoadedIdeas',ideas)
                  commit('setLoading',false)
              })
              .catch(
                  (error)=>{
                      commit('setLoading',true)
                  }
              )
        },
        createIdea({commit,getters},payload){
            const idea = {
                title: payload.title,
                content: payload.content,
                created: payload.created.toISOString(),
                favorite: 0,
                creatorId: getters.user.id
            };
            firebase.database().ref('todonotodo').push(idea)
                .then((data) => {
                    const key = data.key
                    commit('createIdea',{
                        ...idea,
                        id: key
                    });
                })
                .catch((error)=>{
                    console.log(error)
                });
        },
        updateIdeaData({commit},payload){
            commit('setLoading',true);
            const updateObj = {};
            if(payload.title) {
                updateObj.title=payload.title;
            }
            if(payload.content){
                updateObj.content = payload.content;
            }
            if(payload.title || payload.content){
                updateObj.updated = new Date()
            }
            firebase.database().ref('todonotodo').child(payload.id).update(updateObj)
                .then(()=>{
                    commit('setLoading',false)
                    commit('updateIdea',payload)
                })
                .catch(error => {
                    console.log(error)
                    commit('setLoading',false)
                })
        },
        signUserUp({commit},payload){
            commit('setLoading',true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
                .then(
                    user => {
                        commit('setLoading',false)
                        const newUser = {
                            id: user.uid,
                            createdIdeas: []
                        };
                        commit('setUser',newUser)
                    }
                )
                .catch(
                    error=>{
                        commit('setLoading',false)
                        commit('setError',error)
                    }
                )
        },
        signUserIn({commit},payload){
            commit('setLoading',true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
                .then(
                    user => {
                        commit('setLoading',false)
                        const newUser = {
                            id: user.uid,
                            createdIdeas: []
                        };
                        commit('setUser',newUser)
                    }
                )
                .catch(
                    error=>{
                        commit('setLoading',false)
                        commit('setError',error)
                    }
                )
        },
        autoSignIn({commit},payload){
          commit('setUser',{id:payload.uid,createdIdeas: []})
        },
        logout({commit}){
            firebase.auth().signOut()
            commit('setUser',null)
        },
        clearError({commit}){
            commit('clearError')
        }
    },
    getters: {
        // all idea from firebase
        loadedIdeas (state){
            return state.loadedIdeas.sort((ideaA, ideaB)=>{
                return ideaA.created > ideaB.created
            });
        },
        // find idea by id
        loadedIdea(state){
            return (ideaId) => {
                return state.loadedIdeas.find((idea)=>{
                    return idea.id === ideaId
                })
            }
        },
        //popular idea top 5
        popularIdeas(state,getters){
            return getters.loadedIdeas.slice(0,2)
        },
        user (state){
            return state.user
        },
        loading (state){
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
})
