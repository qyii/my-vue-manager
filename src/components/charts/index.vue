<template>
  <div ref="mychart" :class="chartClass" id="charts"></div>
</template>

<script>
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts')

// 引入折线图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/legend')
require('echarts/lib/component/markLine')

export default {
  mounted () {
    this.setChart()
  },

  updated () {
    if (!this.mychart) {
      this.setEchart()
    }
    this.chartChange()
  },

  props: {
    className: {
      type: String
    },
    options: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    },
    changeData: {
      type: Function
    }
  },

  computed: {
    option () {
      return this.options
    },
    chartClass () {
      if (this.className) {
        return 'echarts ' + this.className
      } else {
        return 'echarts'
      }
    }
  },

  watch: {
    index () {
      this.chartChange()
    }
  },

  data () {
    return {
      mychart: {}
    }
  },

  methods: {
    setChart () {
      let dom = this.$refs.mychart
      this.mychart = echarts.init(dom)
      this.mychart.setOption(this.option)
      window.onresize = _ => {
        this.mychart.resize()
      }
    },
    chartChange () {
      this.mychart.setOption(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 400px;
}
</style>
