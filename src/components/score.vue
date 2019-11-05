<template>
  <div class="score">
    <div class="contender">
      <div class="title">X</div>
      <div class="count">{{scoreX}}</div>
  </div>
    <div class="contender">
      <div class="title">O</div>
      <div class="count">{{scoreO}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "score",
  data() {
    return {
      prestine: true,
      value: '',
    }
  },
  props: {
    scoreX: Number,
    scoreO: Number,
},
  methods: {
  }
};
</script>

<style scoped>
</style>