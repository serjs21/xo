<template>
  <div class="game">
    <div class="side-bar">
      <div class="settings">
        Board Size
        <input
          type="Number"
          @change="onChange"
          v-bind:value="boardSize"
          min="3"
          step="1"
          class="board-size-input"
        />
      </div>
      <score v-bind:scoreX="scoreX" v-bind:scoreO="scoreO" />
    </div>
    <div class="game-side">
      <board
        v-bind:size="boardSize"
        v-bind:key="boardSize + scoreO + scoreX"
        v-bind:onWin="onWin"
      />
      <i-alert :show="winnerVisible" variant="primary">
        <p>{{ winner }} has won!</p>
      </i-alert>
    </div>
  </div>
</template>

<script>
import board from "./board.vue";
import score from "./score.vue";

export default {
  name: "game",
  data() {
    return {
      boardSize: 3,
      scoreX: 0,
      scoreO: 0,
      winnerVisible: false,
      winner: ""
    };
  },
  components: {
    board,
    score
  },
  methods: {
    onChange({ target }) {
      let newValue = parseInt(target.value);
      if (newValue < 3) {
        newValue = 3;
      }
      this.boardSize = newValue;
    },
    onWin(sequenceType) {
      if (sequenceType === "X") {
        this.scoreX++;
      }
      if (sequenceType === "O") {
        this.scoreO++;
      }
      this.winner = sequenceType;
      this.winnerVisible = true;
      setTimeout(() => {
        this.winnerVisible = false;
        this.winner = "";
      }, 3000);
    }
  }
};
</script>

<style>
.game {
  display: flex;
  position: relative;
}

.side-bar {
  display: flex;
  flex-direction: column;
  width: 167px;
  margin: 15px;
}

.game-side {
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.board-size-input {
  width: 50px;
  margin-left: 28px;
  text-align: center;
}

.settings {
  margin-left: 5px;
  font-size: 12px;
  text-align: center;
  margin-bottom: 7px;
}

.alert {
  max-width: 700px;
  margin: auto;
}

.alert > .content {
  justify-content: center;
  display: flex;
}
</style>
