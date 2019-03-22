import Vuex from 'vuex'
import Vue from 'nativescript-vue'
// import * as getters from './getters'
// import * as actions from './actions'
import mutations from './mutations'

//ROUTES
// import COMPONENT from 'path/to/component'

Vue.use(Vuex)

const state = {
	//ROUTER
	routes: [
		{	
			name: 'example',
			component: null //COMPONENT
		}
	],
	currentRoute: { //INITIALIZE THIS WITH YOUR HOME PAGE
		name: 'example',
		component: null //COMPONENT
	},
	history: [],
	//END ROUTER
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})


