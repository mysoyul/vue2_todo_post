<template>
  <div class="col-md-12">
    <h1>Posts</h1>
    <div v-if="getLoadingStatus">Loading...</div>
    <ul class="list-group">
      <li v-for="post in getPosts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          [ID: {{ post.id }}] {{ post.text | summary }}
        </router-link>
      </li>
    </ul>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return { 
      //loading: true 
    };
  },
  //lifecycle method
  created() {
    this.fetchData();
  },
  filters: {
    summary(val) {
      return val.substring(0, 20) + "...";
    },
  },
  computed: {
    ...mapGetters(['getPosts','getLoadingStatus'])
  },
  methods: {
    fetchData() {
      //this.loading = true;
      this.$store.dispatch('loadPosts');
      // .then(() => {
      //   this.loading = false;
      // });
    },
  },
};
</script>