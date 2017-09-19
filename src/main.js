// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);

Vue.use(VueAxios,axios);

Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    isPlaying: false,
    DOM:{},
    isShowPlay:true,
    changeBorderIndex:'',
    isShowSide:false,
    audio:{
        name:'',
        imgSrc:'',
        src:'',
        index:0
    },
    isShowFooter:false,
    musicData:[]
  },
  mutations: {
    play(state, flag) {
      state.isPlaying = flag;
    },
    findDOM(state, payload) {
      state.DOM[payload.name] = payload.dom;
    },
    isShowIndex(state,show){
      state.isShowPlay=show;
    },
    changeBorderIndex(state,flag){
      state.changeBorderIndex=flag;
    },
    showSide(state,flag){
      state.isShowSide=flag;
    },
    playMusic(state,src){
      state.audio.imgSrc=src.imgSrc;
      state.audio.name=src.name;
      state.audio.src=src.src;
      state.isPlaying=true;
    },
    showFooter(state,flag){
      state.isShowFooter=flag;
    },
    addMusic(state,list){
      for(let music of state.musicData){
        if(JSON.stringify(music)===JSON.stringify(list)){
          return;
        }
      }
      state.musicData.unshift(list);
    }
  },
  actions:{
    getdata({commit,state}){
      state.musicData=JSON.parse(localStorage.musicData);
      console.log(localStorage);
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
