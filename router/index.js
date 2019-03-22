const Router = {
	data() {
		return {
			//routes in store because of the way this had to work in nativescript vue globally
		}
	},
	methods: {
		isNamedRoute(name) {
			//only routes with names, and just their names
			let routeNames = this.$store.state.routes.filter(route => route.name).map(route => route.name)
			return routeNames.includes(name)
		},
		Route(name) {
			if(!this.isNamedRoute(name)) {
				return null
			} else {
				return this.$store.state.routes[this.$store.state.routes.map(route => route.name).indexOf(name)]
			}
		},
		go(where, options) {
			//currently only accepts {name: 'name of route'} {props: {object of props you need}}
			//or -1 to go back
			if(!where) {
				return
			}
			if (where === -1) {
				this.$store.commit('goBack')
				this.$navigateBack();
			} else if(typeof where == 'object' && where != null) {
				if(Object.keys(where).includes('name')) {
					if(this.isNamedRoute(where.name)) {
						this.$store.commit('navigateTo', this.Route(where.name), options)
						this.$navigateTo(this.Route(where.name).component, options)
					}
				}
			}
		}
	}
}

export default Router