<template>
  <div id="app-root">
    <div class="px-32">
      <div class="text-center">
        <h1>南安市维护妇女儿童合法权益实施情况调查问卷统计结果</h1>
        <h5>参与总人数：{{ result.length }}</h5>
      </div>
      <template v-if="areaLoading">
        <div class="loading"></div>
        <div class="text-center">正在加载数据中，请稍等...</div>
      </template>
      <template v-if="!areaLoading">
        <div>
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
        </div>
      </template>
      <template v-if="analysisLoading">
        <div class="loading"></div>
        <div class="text-center">正在分析数据中，请稍等...</div>
      </template>

      <template v-if="!analysisLoading && current.length > 0">
        <div v-for="(categories, block) in timutree" :key="block">
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
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      timulist: [],
      timutree: {},
      result: [],
      numlist: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
      areaMap: {},
      areaLoading: false,
      analysisLoading: false,
      current: [],
    };
  },
  created() {
    this.getTimus();
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
        });
      });
      this.analysisLoading = false;
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
        this.result = result.data;
        // console.log('result ...',this.result);
        this.getArea(this.timulist, this.result);
        this.areaLoading = false;
        // this.analysis(this.timulist,this.result);
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
.d-flex {
  display: flex;
  flex-wrap: wrap;
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
}
.text-center {
  text-align: center;
}
</style>
