<template>
  <div>
    <div>Board Size <input type="Number" @change="onChange" v-bind:value="boardSize" min="3" step="1"/></div>
    <score v-bind:scoreX="scoreX" v-bind:scoreO="scoreO"/>
    <board v-bind:size="boardSize" v-bind:key="boardSize + scoreO + scoreX" v-bind:onWin="onWin"/>
  </div>
</template>

<script>
import board from "./board.vue";
import score from "./score.vue";

export default {
  name: 'game',
  data() {
    return {
      boardSize: 3,
      scoreX: 0,
      scoreO: 0,
    }
  },
  components: {
    board,
    score,
  },
  methods: {
    onChange({target}) {
      let newValue = parseInt(target.value);
      if (newValue < 3) {
        newValue = 3;
      }
      this.boardSize = newValue;
    },
    onWin(sequenceType) {
      if (sequenceType === 'X') {
        this.scoreX++;
      }
      if (sequenceType === 'O') {
        this.scoreO++;
      }
    }
  }
}
</script>

<style scoped>
</style>
