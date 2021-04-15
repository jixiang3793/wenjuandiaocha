<template>
  <div id="app-root">
    <div class="px-32">
      <div class="text-center">
        <h1>南安市维护妇女儿童合法权益实施情况调查问卷统计结果</h1>
        <h5>参与总人数：13936</h5>
      </div>
      <template v-if="areaLoading">
        <div class="loading"></div>
        <div class="text-center">正在加载数据中，请稍等...</div>
      </template>
      <template v-if="!areaLoading">
        <!-- <div>
          <h3>参与人数地区分布</h3>
          <div style="color: #aaa; margin-bottom: 12px">
            可点击查看地区答题情况
          </div>
          <div class="d-flex">
            <div class="area-item" @click="analysis(timulist, result)">
              <div>{{ result.length }}人</div>
              <div>100%</div>
              <div class="area-item-title">南安市</div>
            </div>
            <div
              class="area-item"
              v-for="(list, area) in areaMap"
              :key="area"
              @click="analysis(timulist, list)"
            >
              <div>{{ list.length }}人</div>
              <div>{{ calcPer(list.length) }}%</div>
              <div class="area-item-title">{{ formatArea(area) }}</div>
            </div>
          </div>
        </div> -->
      </template>
      <template v-if="analysisLoading">
        <div class="loading"></div>
        <div class="text-center">正在分析数据中，请稍等...</div>
      </template>

      <template v-if="!analysisLoading">
        <!-- <div v-for="(categories, block) in timutree" :key="block">
          <h2>{{ block }}</h2>
          <div v-for="(titles, category) in categories" :key="category">
            <h3>{{ category }}</h3>
            <div v-for="(iitem, j) in titles" :key="j">
              <h4>{{ iitem.title }}</h4>
              <div v-if="iitem.mode !== 'input'">
                <div
                  v-for="(opt, k) in iitem.options"
                  :key="k"
                  class="timu-option-item"
                >
                  {{ opt.label }}({{ opt.percent || 0 }}%-{{
                    opt.count || 0
                  }}人)
                </div>
              </div>
              <div v-if="iitem.mode === 'input'">
                <div
                  v-for="(value, k) in iitem.values"
                  :key="k"
                  class="timu-option-item"
                >
                  {{ value }}
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div>
          <div>
            <h2>{{ timulist[currentIndex].block }}</h2>
            <h3>{{ timulist[currentIndex].category }}</h3>
            <h4 style="text-align: center">{{ timulist[currentIndex].title }}</h4>
            <template v-if="timulist[currentIndex].mode !== 'input'">
              <div v-if="chartType === 'pie'">
                <ve-pie :data="chartData"></ve-pie>
              </div>
              <div v-if="chartType === 'bar'">
                <!-- <ve-bar :data="chartData" ref="bar"></ve-bar> -->
                <!-- <ve-histogram :data="chartData" ref="bar"></ve-histogram> -->
                <div id="barId" style="height:400px;"></div>
              </div>
              <div v-if="chartType === 'pieacc'">
                <ve-pie :data="chartAccData"></ve-pie>
              </div>
              <div v-if="chartType === 'baracc'">
                <!-- <ve-bar :data="chartAccData"></ve-bar> -->
                <div id="barAccId" style="height:400px;"></div>
              </div>
            </template>
            <template v-if="timulist[currentIndex].mode === 'input'">
              <div class="d-flex timu-input-values">
                <div
                  v-for="(value, k) in timulist[currentIndex].values"
                  :key="k"
                  class="timu-input-value"
                >
                  {{ value }}
                </div>
              </div>
            </template>
          </div>
          <div class="text-center pos-rel timu-select-options">
            <button type="button" :disabled="currentIndex === 0" @click="prev">
              上一题
            </button>
            <button
              type="button"
              :disabled="currentIndex === timulist.length - 1"
              @click="next"
            >
              下一题
            </button>

            <button
              type="button" :class="{'timu-type-selected': chartType === 'pie'}"
              @click="typeChange('pie')"
            >
              饼状图
            </button>

            <button
              type="button" :class="{'timu-type-selected': chartType === 'bar'}"
              @click="typeChange('bar')"
            >
              柱状图
            </button>
            <button v-if="currentIndex >= ertongPos"
              type="button" :class="{'timu-type-selected': chartType === 'pieacc'}"
              @click="typeChange('pieacc')"
            >
              饼状图(分值累加)
            </button>

            <button v-if="currentIndex >= ertongPos"
              type="button" :class="{'timu-type-selected': chartType === 'baracc'}"
              @click="typeChange('baracc')"
            >
              柱状图(分值累加)
            </button>
            <jump class="jump-pos-abs" :timus="timulist" :current="currentIndex" @change="indexChange"></jump>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import jump from "./jump.vue";
import VePie from "v-charts/lib/pie.common";
// import VeBar from "v-charts/lib/bar.common";
// import VeHistogram from "v-charts/lib/bar.common";
import timulistData from "./assets/answer.json";

export default {
  components: {
    jump,
    VePie,
    // VeBar,
    // VeHistogram
  },
  data() {
    return {
      timulist: timulistData,
      timutree: {},
      result: [],
      numlist: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
      filter: ["无", "没建议", "！", "没有", "目前暂时没有", "否", "不清楚", "没有意见", "没有建议",
      "无建议","不懂","一般","没意见","其它","?","、","、","无议建","没什么建议","。","t","都好","不知道","不好说","暂时没有"
      ,"其他","：：：：","，，，","12345","暂无意件","125556","这个我不懂","暂无"
      ],
      areaMap: {},
      areaLoading: false,
      analysisLoading: false,
      current: [],
      currentIndex: 0,
      chartType: 'bar', // pie 
      chartData: {
        columns: ['label', 'count'],
        rows: [
        ]
      },
      chartAccData: {
        columns: ['label', 'countacc'],
        rows: [
        ]
      },
      ertongPos: 63
    };
  },
  created() {
    // this.getTimus();
  },
  mounted() {
    // this.chartType = 'pie';
    console.log("result ...",this.timulist,timulistData);
    this.updateData();
    this.typeChange('bar');
  },
  methods: {
    genTree(list, tree) {
      list.forEach((it) => {
        if (!tree[it.block]) {
          tree[it.block] = {};
        }
        if (!tree[it.block][it.category]) {
          tree[it.block][it.category] = [];
        }
        tree[it.block][it.category].push(it);
      });
    },
    analysis(list, result) {
      this.current = result;
      this.analysisLoading = true;
      list.forEach((it) => {
        // it.options = JSON.parse(JSON.stringify(it.options));
        it.options.forEach((it) => delete it.count);
        result.forEach((re, order) => {
          const ticket = re.answer[it.title];
          if (ticket) {
            if (Array.isArray(ticket) && it.mode === "checkbox") {
              ticket.forEach((ti) => {
                let opt = it.options.find((opt) => opt.value === ti);
                if (!opt) {
                  console.log(it.title + order);
                  opt = it.options[0];
                }
                if (!opt.count) {
                  opt.count = 0;
                }
                opt.count++;
              });
            } else {
              if (it.mode === "input") {
                if (!it.values) {
                  it.values = [];
                }
                it.values.push(ticket);
              } else {
                let opt = it.options.find((opt) => opt.value === ticket);
                if (!opt) {
                  console.log(it.title + order);
                  opt = it.options[0];
                }
                if (!opt.count) {
                  opt.count = 0;
                }
                opt.count++;
              }
            }
          }
        });
        it.options.forEach((opt) => {
          opt.percent = Math.round((opt.count / result.length) * 100);
          // opt.name = opt.label;
          // opt.value = opt.count;
        });
        if (it.mode === 'input') {
          let means = it.values.filter(i => i && i.replace && !this.filter.some(ii => ii === i.replace(/\s+/g,'')));
          it.values = means;
        }
      });
      this.analysisLoading = false;
      console.log('result list ...',JSON.stringify(list));
    },
    getTimus() {
      this.areaLoading = true;
      this.$http.get("/timu").then((result) => {
        this.timulist = result.data;
        // console.log('timu ...',this.timulist);
        this.genTree(this.timulist, this.timutree);
        this.getResult();
      });
    },
    getResult() {
      this.$http.get("/answer").then((result) => {
      // this.$http.post("/answer/query",{options: {limit: 10,skip: 0}}).then((result) => {
        this.result = result.data;
        // console.log('result ...',this.result);
        this.getArea(this.timulist, this.result);
        this.areaLoading = false;
        this.analysis(this.timulist,this.result);
        this.updateData();
      });
    },
    getArea(list, result) {
      const areas = list[0];
      result.forEach((re) => {
        if (!this.areaMap[re.answer[areas.title]]) {
          this.areaMap[re.answer[areas.title]] = [];
        }
        this.areaMap[re.answer[areas.title]].push(re);
      });
    },
    calcPer(count) {
      return Math.round((count / this.result.length) * 100);
    },
    formatArea(name) {
      return name.split("、")[1] + "镇";
    },
    prev() {
      this.currentIndex--;
      this.updateData();
    },
    next() {
      this.currentIndex++;
      this.updateData();
      // console.log('bar ...', this.$refs.bar);
    },
    indexChange(index) {
      this.currentIndex = index;
      this.updateData();
    },
    updateData() {
      if (this.currentIndex < this.ertongPos && (this.chartType === 'pieacc' || this.chartType === 'baracc')) {
        this.chartType = 'pie';
      }
      this.$set(this.chartData, "rows", this.timulist[this.currentIndex].options || []);
      if (this.currentIndex >= this.ertongPos) {
        this.timulist[this.currentIndex].options.forEach(opt => opt.countacc = opt.value* opt.count);
        this.$set(this.chartAccData, "rows", this.timulist[this.currentIndex].options || []);
        this.updateBarAcc();
      }
      this.updateBar();

    },
    updateBar() {
      if (this.chartType === 'bar') {
        this.$nextTick(() => {

          var myChart = this.$echarts.init(document.getElementById('barId'));
            // 指定图表的配置项和数据
            const labels = this.timulist[this.currentIndex].options.map(opt => opt.label);
            const values = this.timulist[this.currentIndex].options.map(opt => opt.count);
            console.log('labels,values',labels,values);
            var option = {
                tooltip: {},
                legend: {
                    // data:['销量']
                },
                xAxis: {
                    data: labels,
                    axisLabel: {interval: 0}
                },
                yAxis: {
                  name: '人数'
                },
                series: [{
                  type: 'bar',
                  label: {
                      show: true,
                      position: 'top',
                      formatter: (params) => {
                        const per = params.value/13936 * 100;
                        return `${per.toFixed(2)}%, ${params.value}`;
                      }
                  },
                  data: values
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        })
      }
    },

    updateBarAcc() {
      if (this.chartType === 'baracc') {
        this.$nextTick(() => {

          var myChart = this.$echarts.init(document.getElementById('barAccId'));
            // 指定图表的配置项和数据
            const labels = this.timulist[this.currentIndex].options.map(opt => opt.label);
            const values = this.timulist[this.currentIndex].options.map(opt => opt.countacc);
            const sum = this.timulist[this.currentIndex].options.reduce((acc,opt) => acc + opt.countacc,0);
            console.log('labels,values',labels,values,sum);
            var option = {
                tooltip: {},
                legend: {
                    // data:['销量']
                },
                xAxis: {
                    data: labels,
                    axisLabel: {interval: 0}
                },
                yAxis: {
                  name: '得分'
                },
                series: [{
                  type: 'bar',
                  label: {
                      show: true,
                      position: 'top',
                      formatter: (params) => {
                        const per = params.value/sum * 100;
                        return `${per.toFixed(2)}%, ${params.value}`;
                      }
                  },
                  data: values
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        })
      }
    },
    typeChange(type) {
      this.chartType = type;
      this.updateBar();
      this.updateBarAcc();
    }
  },
};
</script>

<style lang="scss" scoped>
.timu-option-item {
  display: inline-block;
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.timu-input-value {
      padding: 16px;
    min-height: 120px;
    margin-left: 8px;
    margin-bottom: 8px;
    max-width: 140px;
    box-shadow: 0px 0 1px 1px #ddd;
}
.timu-input-values {
  margin-left: -8px;
    margin-bottom: 32px;
    max-height: 400px;
    overflow: auto;
}
.timu-select-options {
  > button:not(:first-child) {
    margin-left: 8px;
  }
}
.timu-type-selected {
  color: cornflowerblue;
}
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
.pos-rel {
  position: relative;
}
.jump-pos-abs {
  position: absolute;
  left: 0;
}
.area-item {
  margin-top: 24px;
  margin-right: 24px;
  padding: 16px 32px;
  text-align: center;
  border: 1px #eee solid;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 2px 2px #eee;
  }
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .area-item-title {
    font-size: 18px;
    font-weight: 500;
  }
}
.px-32 {
  padding-left: 32px;
  padding-right: 32px;
}
.text-center {
  text-align: center;
}
.loading {
  margin: 100px auto;
  width: 100px;
  height: 100px;
  border: 10px solid #333333;
  border-bottom: #aaa 10px solid;
  border-radius: 50%;
  animation: load 1.1s infinite linear;
  -webkit-animation: load 1.1s infinite linear;
  -moz-animation: load 1.1s infinite linear;
  -o-animation: load 1.1s infinite linear;
}
@keyframes load {
  from {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
}
@-webkit-keyframes load {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes load {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-o-keyframes load {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}
@media screen and (max-width: 1023px) {
  .timu-option-item {
    display: block;
    margin: 0;
  }
  .jump-pos-abs {
    position: relative;
    margin-top: 16px;
    font-size: 14px;
  }
  .px-32 {
    padding-left: 16px;
    padding-right: 16px;
  }
}
.text-center {
  text-align: center;
}
</style>
