<template>
  <div @click="onClick" class="cell">{{value}}</div>
</template>

<script>
export default {
  name: "cell",
  data() {
    return {
      prestine: true,
      value: '',
    }
  },
  props: {
    getValue: Function,
    setValue: Function,
    row: Number,
    col: Number,
},
  methods: {
    onClick() {
      if (this.prestine) {
        this.setValue(this.row, this.col);
        this.value = this.getValue(this.row, this.col);
        this.prestine = false;
      }
    }
  }
};
</script>

<style scoped>
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
  height: 40px;
  width: 40px;
}

</style>