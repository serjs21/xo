<template>
  <div class="board">
    <div class="game-board">
      <div v-for="row in size" v-bind:key="row" class="row">
      <cell v-for="col in size" 
      v-bind:key="col" 
      v-bind:col="col - 1" 
      v-bind:row="row - 1" 
      v-bind:setValue="setValue" 
      v-bind:getValue="getValue"/>
    </div>
</div>

  <div class="turn-display">Current turn: <span class="highlight">{{getValueFromTurn()}}</span></div>
</div>
</template>

<script>
import cell from "./cell.vue";
import zip from "lodash/zip";
import map from "lodash/map";

export default {
  name: 'board',
  props: {
    size: {
      type: Number, default: 4
    },
    onWin: Function,
  },
  data() {
    return {
      counter: 0,
      oddTurn: true,
      boardState: this.getCleanBoard(),
    }
  },
  components: {
    cell
  },
  methods: {
    getValueFromTurn() {
      return this.oddTurn ? 'X' : 'O';
    },

    setValue(row, col) {
      this.boardState[row][col] = this.getValueFromTurn();
      this.oddTurn = !this.oddTurn;
      this.checkForWin();
    },
    
    getValue(row, col) {
      return this.boardState[row][col];
    },

    getCols() {
      return this.boardState;
    },

    getRows() {
      return zip(...this.boardState);
    },

    getDiagonal() {
      return map(this.boardState, (row, idx) => row[idx]);
    },

    getOtherDiagonal() {
      return map(this.boardState, (row, idx) => row[this.size - 1 - idx]);
    },

    hasSequence(items) {
      const validitySequence = map(items, (item, idx) => {
        const itemExists = !!item;
        const identicalToPrevious = !idx || items[idx] === items[idx -1];
        return itemExists && identicalToPrevious;
      });

      return validitySequence.filter(Boolean).length === items.length ? items[0] : false;
    },

    getCleanBoard() {
      return map(new Array(this.size), () => new Array(this.size));
    },

    checkForWin() {
      [this.getDiagonal(), this.getOtherDiagonal(), ...this.getRows(), ...this.getCols()].forEach(subSequience => {
        const sequenceType = this.hasSequence(subSequience)
        if (sequenceType) {
          this.onWin(sequenceType);
        }
      });
    },
  }
}
</script>

<style scoped>
.row {
  width: fit-content;
  border-top: 2px solid black;
  height: fit-content;
  flex-direction: row;
}

.row .cell {
  border-right: 2px solid black;
}

.row .cell:last-of-type {
    border: none;
}

.row:first-of-type {
  border: none;
}

.board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.game-board {
  display: flex;
  flex-direction: column;
}

.turn-display {
  margin-top: 15px;
}

.highlight {
  font-weight: 700;
  margin-left: 5px;
  border-bottom: 1px black solid;
}
</style>
