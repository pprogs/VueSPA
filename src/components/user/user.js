import { UserApi } from "~/api/";

export default {
  data: function() {
    return {
      userData: "userData",
      inputLogin: "",
      inputPassword: ""
    };
  },

  computed: {},

  mounted: function() {
    this.$store.commit("setTitle", "l_user");
  },

  methods: {
    loadUser: function() {
      UserApi.getUser(5, resp => {
        this.userData = resp;
      });
    }
  }
};
