

const computed = {
    login : function() {
        return this.$store.state.user.login
    },
    title : function() {
        return this.$store.state.title
    }
}
const methods = {
    setMessage: function (event) {
        this.$store.dispatch('user/login', event.target.value)
    },
}

export default {
    computed,
    methods,
} 