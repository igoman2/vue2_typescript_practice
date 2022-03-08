<template>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :userInfo="fetchedUser">
      <div slot="userName">{{ fetchedUser.id }}</div>
      <span slot="userKarma">{{ fetchedUser.karma }} karma</span>
    </user-profile>
  </div>
</template>

<script>
import { ActionTypes } from "@/store/actions";
import { MutationTypes } from "@/store/mutations";
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
import bus from "../utils/bus";

export default {
  components: {
    UserProfile,
  },
  async created() {
    const resp = await this.$store.dispatch(ActionTypes.FETCH_NEWS);
    this.$store.commit(MutationTypes.SET_NEWS, 10);
    bus.$emit("off:progress");
  },
  computed: {
    ...mapGetters(["fetchedUser"]),
  },
};
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>
