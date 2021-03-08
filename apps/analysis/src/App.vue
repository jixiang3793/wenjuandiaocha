<template>
  <div id="app-root">
    <div>
      <div class="text-center">
        <h1>南安市维护妇女儿童合法权益实施情况调查问卷统计结果</h1>
        <h5>参与总人数：{{result.length}}</h5>
      </div>
      <div v-for="(categories, block) in timutree" :key="block">
        <h2>{{block}}</h2>
        <div v-for="(titles,category) in categories" :key="category">
          <h3>{{category}}</h3>
          <div v-for="(iitem,j) in titles" :key="j">
            <h4>{{iitem.title}}</h4>
            <div>
              <div v-for="(opt,k) in iitem.options" :key="k" class="timu-option-item">
                {{opt.label}}({{opt.percent || 0}}%-{{opt.count || 0}}人)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      timulist: [],
      timutree: {},
      result: [],
      numlist: ['一','二','三','四','五','六','七','八','九','十']
    };
  },
  created() {
    this.getTimus();
  },
  methods: {
    genTree(list,tree) {
      list.forEach(it => {
        if (!tree[it.block]) {
          tree[it.block] = {};
        }
        if (!tree[it.block][it.category]) {
          tree[it.block][it.category] = [];
        }
        tree[it.block][it.category].push(it);
      });
    },
    analysis(list,result) {
      list.forEach(it => {
        result.forEach(re => {
          const ticket = re.answer[it.title];
          if (ticket) {
            if (Array.isArray(ticket)) {
              ticket.forEach(ti => {
                const opt = it.options.find(opt => (opt.value === ti));
                console.log('opt ...',opt,ticket);
                if (!opt.count) {
                  opt.count = 0;
                }
                opt.count++;
              })
            } else {
              const opt = it.options.find(opt => (opt.value === ticket));
              console.log('opt ...',opt,ticket);
              if (!opt.count) {
                opt.count = 0;
              }
              opt.count++;
            }
          }
        });
        it.options.forEach(opt => {
          opt.percent = Math.round(opt.count/result.length * 100);
        })
      });
    },
    getTimus() {
      this.$http.get('/timu').then(result => {
        this.timulist = result.data;
        console.log('timu ...',this.timulist);
        this.genTree(this.timulist,this.timutree);
        this.getResult();
      });
    },
    getResult() {
      this.$http.get('/answer').then(result => {
        this.result = result.data;
        console.log('result ...',this.result);
        this.analysis(this.timulist,this.result);
      });
    }
  }
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
