<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ $filters.formatDate(postItem.createdAt) }}
      <i class="icon ion-md-create" v-on:click="routeEditPage"></i>
      <i class="icon ion-md-trash" v-on:click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('You want to delete it?')) {
        await deletePost(this.postItem._id);
        console.log('deleted');
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
