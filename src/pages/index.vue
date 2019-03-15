<template>
  <div>
    <el-row :gutter="40">
      <div @click="handleChart(0)"><el-col :xs="24" :sm="12" :lg="6" class="my-card">
        <el-card shadow="hover" class="in-card">
          <my-icon class="peoples" icon-class="peoples" />
          活跃用户数
          <count-up :from="10" :to="10086"></count-up>
        </el-card>
      </el-col></div>
      <div @click="handleChart(1)"><el-col :xs="24" :sm="12" :lg="6" class="my-card">
        <el-card shadow="hover" class="in-card">
          <my-icon class="play" icon-class="play" />
          新增点击
          <count-up :from="10000" :to="78563"></count-up>
        </el-card>
      </el-col></div>
      <div @click="handleChart(2)"><el-col :xs="24" :sm="12" :lg="6" class="my-card">
        <el-card shadow="hover" class="in-card">
          <my-icon class="message" icon-class="message" />
          新增评论
          <count-up :from="60" :to="6789"></count-up>
        </el-card>
      </el-col></div>
      <div @click="handleChart(3)"><el-col :xs="24" :sm="12" :lg="6" class="my-card">
        <el-card shadow="hover" class="in-card">
          <my-icon class="fensi" icon-class="fensi" />
          新增粉丝
          <count-up :from="1" :to="403"></count-up>
        </el-card>
      </el-col></div>
    </el-row>
    <my-chart :index="focusType" :options="options[focusType]"></my-chart>
    <div ref="mychart" class="mychart" id="charts"></div>
  </div>
</template>

<script>
import CountUp from '@/components/countUp'
import MyChart from '@/components/charts/index'

export default {
  components: {
    CountUp,
    MyChart
  },

  data () {
    return {
      focusType: 0,
      mychart: {},
      options: [
        {
          title: {
            text: '活跃用户数图表'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['活跃用户数']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['4-16', '4-17', '4-18', '4-19', '4-20']
          },
          yAxis: {
            type: 'value'
          },
          color: ['#40c9c6'],
          series: [
            {
              name: '活跃用户数',
              type: 'line',
              data: [2, 1, 3, 9, 2]
            }
          ]
        },
        {
          title: {
            text: '活跃用户数图表'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['新增点击']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['4-16', '4-17', '4-18', '4-19', '4-20']
          },
          yAxis: {
            type: 'value'
          },
          color: ['#00c4fc'],
          series: [
            {
              name: '新增点击',
              type: 'line',
              data: [30, 12, 23, 19, 22]
            }
          ]
        },
        {
          title: {
            text: '活跃用户数图表'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['新增评论']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['4-16', '4-17', '4-18', '4-19', '4-20']
          },
          yAxis: {
            type: 'value'
          },
          color: ['#ffb714'],
          series: [
            {
              name: '新增评论',
              type: 'line',
              data: [1, 5, 0, 4, 2]
            }
          ]
        },
        {
          title: {
            text: '活跃用户数图表'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['新增粉丝']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['4-16', '4-17', '4-18', '4-19', '4-20']
          },
          yAxis: {
            type: 'value'
          },
          color: ['#f86993'],
          series: [
            {
              name: '新增粉丝',
              type: 'line',
              data: [10, 5, 8, 14, 4]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleChart (index) {
      this.focusType = index
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  margin-bottom: 20px;
  .in-card {
    height: 108px;
    cursor: pointer;
    color: #7c7a7c;
  }
  .play {
    color: #00c4fc;
  }
  .message {
    color: #ffb714;
  }
  .fensi {
    color: #f86993;
  }
  .peoples {
    color: #40c9c6;
  }
}

.mychart {
  width: 100%;
  height: 400px;
}
</style>
