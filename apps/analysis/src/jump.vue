<template>
  <div class="jump-select-ctrl">
      <div class="flex-center">
        点击选择题目：<div @click="showSelectPanel" class="jump-selected-title" :title="timus[current].title">{{timus[current].title}}</div>
      </div>
      <div class="jump-select-panel" v-show="show">

          <div class="jump-select-item" v-for="i in (end - start)" :key="i - 1" :title="timus[start + i - 1].title" @click="$emit('change', start + i - 1)" :class="{ 'jump-item-selected': current === start + i - 1}">
              {{timus[start + i - 1].title}}
          </div>
          <div class="jump-select-pagnation">
              <span class="jump-pagnation-operation" @click="prev">←</span>
              <span class="jump-pagnation-vl"> | </span>
              <span class="jump-pagnation-operation" @click="next">→</span>
              <span style="margin-left: 16px;"><span style="color: cornflowerblue">{{current}}</span>/{{timus.length}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['timus','current'],
    data() {
        return {
            pageSize: 10,
            start: 0,
            end: 0,
            show: false
        };
    },
    created() {
        this.calcStartEnd(this.current);
        document.addEventListener('click', () => {
            this.show = false;
        })
    },
    methods: {
        calcStartEnd(value) {
            this.start = Math.floor(value / this.pageSize) * this.pageSize;
            this.end = (Math.floor(value / this.pageSize) + 1) * this.pageSize;
        },
        showSelectPanel(event) {
            console.log("showSelectPanel...",event);
            this.show = !this.show;
            event.stopPropagation();
        },
        prev(event) {
            event.stopPropagation();
            if (this.start - this.pageSize < 0) {
                return;
            }
            this.calcStartEnd(this.start - this.pageSize);
            
        },
        next(event) {
            event.stopPropagation();
            if (this.start + this.pageSize > this.timus.length) {
                return;
            }
            this.calcStartEnd(this.start + this.pageSize);
        }
    },
    watch: {
        current: function (index) {
            // console.log("watch ...",index);
            this.calcStartEnd(index);
        }
    }
    // computed: {
    //     pageIndex: function () {
    //         return Math.floor(this.current / this.pageSize); 
    //     },
    //     pageIndex: function () {
    //         return Math.floor(this.current / this.pageSize); 
    //     },
    //     pageIndex: function () {
    //         return Math.floor(this.current / this.pageSize); 
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.jump-select-panel {
    position: absolute;
    padding: 8px;
    bottom: 46px;
    left: 144px;
    border: 1px #aaa solid;
    background-color: white;
    &::before {
        content: '';
        position: absolute;
        border: 10px solid;
        left: 20px;
    bottom: -20px;
    border-color: #aaa transparent transparent;
    }
    &::after {
        content: '';
        position: absolute;
            border: 10px solid;
            left: 20px;
    bottom: -18px;
    border-color: #fff transparent transparent;
    }
}
.jump-select-item {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px #eee solid;
    padding: 8px;
    cursor: pointer;
    text-align: start;
    &:hover {
        color: cornflowerblue;
    }
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.jump-item-selected {
    color: blue;
}
.jump-select-pagnation {
    text-align: center;
    padding-top: 8px;
    .jump-pagnation-vl {
        color: #ccc;
        transform: scale(0.8);
    }
    .jump-pagnation-operation {
        cursor: pointer;
    }
}
.jump-select-ctrl {
    position: relative;
        display: inline-block;
    vertical-align: bottom;
    // &:hover .jump-select-panel {
    //     display: block;
    // }

    .jump-selected-title {
        width: 200px;
        text-align: start;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        border: 1px #aaa solid ;
        padding: 4px 8px;
        cursor: pointer;
    }
}
@media screen and (max-width: 1023px) {
  .jump-select-panel {
    left: 80px;
  }
}
</style>