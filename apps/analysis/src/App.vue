<template>
  <v-app id="app-root">
    <div>
      <div>
        <h1>南安市维护妇女儿童合法权益实施情况调查问卷统计结果</h1>
        <h5>参与总人数：{{result.sum}}</h5>
      </div>
      <div>一、妇女发展</div>
      <div v-for="(item,index) in funvtree" :key="'funvtree' + index">
        <div class="d-block m-item-category">{{item.category}}</div>
        <div v-for="(iitem,j) in item.titles" :key="j">
          <div class="d-block">{{iitem.title}}</div>
          <div>
            <span v-for="(opt,k) in iitem.options" :key="k">
              {{opt.label}}({{opt.percent}}%-{{opt.count}}人)
            </span>
          </div>
        </div>
      </div>
      <div>二、儿童保障</div>
      <div v-for="(item,index) in ertongtree" :key="index">
        <div class="d-block m-item-category">({{numlist[index]}}) {{item.category}}</div>
        <div v-for="(iitem,j) in item.titles" :key="j">
          <div class="d-block">{{j + 1}}、{{iitem.title}}</div>
          <div>
            <span v-for="(opt,k) in iitem.options" :key="k">
              {{opt.label}}({{opt.percent}}%-{{opt.count}}人)
            </span>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import funvlist from './assets/funv.json' 
import ertonglist from './assets/ertong.json' 

export default {
  components: {
  },
  data() {
    return {
      funvtree: [],
      ertongtree: [],
      result: {
        sum: 1100,
        timus: {

        }
      },
      numlist: ['一','二','三','四','五','六','七','八','九','十']
    };
  },
  created() {
    this.genTree(funvlist,this.funvtree)
    this.genTree(ertonglist,this.ertongtree)
  },
  methods: {
    genTree(list,tree) {
      const datamap = {};
      list.forEach(it => {
        if (!datamap[it.category]) {
          datamap[it.category] = [];
        }
        datamap[it.category].push(it);
      });
      Object.keys(datamap).forEach(it => {
        tree.push({
          category: it,
          titles: datamap[it]
        })
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
