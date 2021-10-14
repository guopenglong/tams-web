<template>
  <el-container>
    <el-aside width="100px">
      <el-menu
        router
        @select="handleSelect">
        <el-menu-item  v-for="item in navData"
                      :key="item.code"
                      :index="item.code" :route="item.path" v-if="isteacher()===true">
          {{item.name}}</el-menu-item>
        <el-menu-item v-for="item in navData1"
                      :key="item.code"
                      :index="item.code" :route="item.path" v-if="isteacher()===false">
          {{item.name}}
          <li id="lu"></li>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="padding: 10px 20px;">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: 'Main',
  components: {
  },
  data () {
    return {
      navData: [
        {
          code: '01',
          path: '/course-scheduling',
          name: '排课日历'
        },
        {
          code: '02',
          path: '/course-scheduling-list',
          name: '排课列表'
        },
        {
          code: '03',
          path: '/classroom',
          name: '教室',
        },
        {
          code: '04',
          path: '/course',
          name: '课程'
        },
        {
          code: '05',
          path: '/teacher',
          name: '老师'
        },
        {
          code: '06',
          path: '/report',
          name: '报表'
        }
      ],
      currentNavName: '',
      navData1:[
        {
          code: '01',
          path: '/course-scheduling',
          name: '排课日历'
        },
        {
          code: '02',
          path: '/course-scheduling-list',
          name: '排课列表'
        },
        {
          code: '06',
          path: '/report',
          name: '报表'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    },
    isteacher(){
      if(localStorage.getItem('username')==='admin'){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>
