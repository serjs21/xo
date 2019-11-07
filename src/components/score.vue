<template>
  <div class="score">
      <div class="contender">
      <i-card>
        <template slot="header">
          <i-icon icon="times" />          
        </template>
        {{scoreX}}
    </i-card>
  </div>

  <div class="contender">
    <i-card>
      <template slot="header">
        <i-icon icon="circle" />          
      </template>
      {{scoreO}}
  </i-card>
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

<style>
.score {
  display: flex;
}
.contender {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
}

.card {
  width: 77px;
}

.header, .body {
  padding: 0;
  height: 46px;
  width: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.body {
  font-weight: 400;
}

</style>