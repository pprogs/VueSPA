

let computed = {

    login : function() {
        return this.$store.state.user.login
    },

    title : function() {
        return this.$t(this.$store.state.title);
    },

    locale : function() {
        return this.$store.state.loc;
    },

    isLogged() {
        return this.$store.getters.isAuthenticated;
    }
}

let methods = {
    
    setMessage: function (event) {
        this.$store.dispatch('user/login', event.target.value)
    },

    changeLocale: function() {
        if (this.$store.state.loc === 'ru') {
            this.$i18n.set('en');
            this.$store.commit('locale', 'en')
        } else {
            this.$i18n.set('ru');
            this.$store.commit('locale', 'ru')
        }
     
    },
}

export {
    computed,
    methods,
} 
