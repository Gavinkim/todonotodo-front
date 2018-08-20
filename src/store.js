import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //initial
    state: {
      loadIdeas:[
          {
              _id:'1',
              avatar: '@/assets/back_01.jpg',
              title:"Then we'll go with that data file!",
              content:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
              favorite:30,
              show:false,
              created: '2018-08-20',
              comments:[]
          },
          {
              _id:'2',
              avatar:'@/assets/back_02.jpg',
              title:"Amazon Linux",
              content:"We use $releasever for repository path in the script and $releasever should be \"year.month\" format like \"2017.09\". On AWS, some services modify $releasever to own format and it will cause installation failure. If your environment's $releasever is non-\"year.month\" format, change it to \"year.month\" format or setup TD repository manually.",
              favorite:20,
              show:false,
              created: '2018-08-20',
              comments:[]
          }
      ]
    },
    mutations: {
    },
    actions: {
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
            return getters.loadIdeas.slice(0,5);
        }
    }
})
