<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchNews, NewsItem } from "@/api";
import ListItem from "../components/ListItem.vue";

export default Vue.extend({
  components: {
    ListItem,
  },

  data: () => ({
    newsItems: [] as NewsItem[],
  }),

  created() {
    this.fetchNewsItem();
  },

  methods: {
    async fetchNewsItem() {
      const resp = await fetchNews();
      this.newsItems = resp.data;
    },
  },
});
</script>

<style></style>
