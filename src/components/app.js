

const computed = {
    login() {
        return this.$store.state.user.login
    },
    title() {
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