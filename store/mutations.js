import Vue from 'nativescript-vue'

export default {
	navigateBack(state) {
		if(state.history.length) {
			Vue.set(state, 'currentRoute', state.history.splice(-1, 1))//take off last element and set current
		}
	},
	navigateTo(state, newRoute, options) {
                Vue.set(state, 'currentRoute', {route: newRoute, options})
		state.history.push({
			route: newRoute,
			options
		})
	}
}
