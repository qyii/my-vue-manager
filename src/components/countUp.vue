<template>
  <p :class="countClass">{{amount}}</p>
</template>

<script>

export default {
  props: {
    from: {
      type: Number
    },
    speed: {
      type: Number
    },
    to: {
      type: Number,
      required: true
    },
    className: {
      type: String
    }
  },

  computed: {
    countClass () {
      if (this.className) {
        return 'my-count ' + this.className
      } else {
        return 'my-count'
      }
    },

    steps () {
      let speed = this.speed || 1500
      let max = this.to
      let min = this.from || 0
      return (max - min) / speed * 60 | 0
    }
  },

  data () {
    return {
      amount: 0,
      countTimer: null
    }
  },

  mounted () {
    this.amount = this.from || 0
    this.addup()
  },

  destroyed () {
    clearInterval(this.countTimer)
  },

  methods: {
    addup () {
      let countTimer = this.countTimer
      countTimer = setInterval(_ => {
        this.amount += this.steps
        if (this.amount >= this.to) {
          this.amount = this.to
          clearInterval(countTimer)
        }
      }, 60)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-count {
  font-size: 20px;
  font-weight: 600;
  color: #323232;
}
</style>
