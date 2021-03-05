<template>
  <div class="home">
    <!-- 导航 -->
    <Nav />
    <!-- banner轮播 -->
    <div class="swiper">
      <el-carousel height="650px" arrow="never" indicator-position :interval="4000">
        <el-carousel-item v-for="(item, index) in swiperList" :key="index">
          <img :src="item" :alt="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 栏目 四栏 -->
    <div class="u-flex row-one">
      <div class="u-flex column">
        <img src="../assets/img/icon_new.png" width="59" />
        <div class="column-content">
          <p class="title">新手入门</p>
          <p class="msg">仅需几步，快速入云</p>
        </div>
      </div>
      <div class="u-flex column">
        <img src="../assets/img/icon_free.png" width="59" />
        <div class="column-content">
          <p class="title">免费试用</p>
          <p class="msg">10+款产品免费试用</p>
        </div>
      </div>
      <div class="u-flex column">
        <img src="../assets/img/icon_world.png" width="59" />
        <div class="column-content">
          <p class="title">帮助文档</p>
          <p class="msg">查看文档快速上手天健云 产品</p>
        </div>
      </div>
      <div class="u-flex column">
        <img src="../assets/img/icon_salon.png" width="59" />
        <div class="column-content">
          <p class="title">线下沙龙</p>
          <p class="msg">掌握最新教育行业信息</p>
        </div>
      </div>
    </div>

    <!-- 板块一 -->
    <div class="container plate-one">
      <h2>现代化教育的新型基础设施</h2>
      <div class="share-link">
        <el-link type="primary">查看<i class="el-icon-arrow-right"></i> </el-link>
      </div>
      <div class="u-flex u-row-around plate-one-row">
        <div
          class="u-flex-col u-col-center column"
          v-for="(item, index) in infrastructureProductsList"
          :key="index"
        >
          <div class="wrapper u-flex u-row-center">
            <img :src="item.icon" :alt="item.title" />
          </div>
          <p class="column-msg">{{ item.title }}</p>
        </div>
      </div>
      <!-- 产品列表 -->
      <div class="u-flex projects">
        <div class="project-item" v-for="(item, index) in projectList" :key="index">
          <img :src="item.cover" :alt="item.title" />
          <div class="content">
            <div class="title">{{ item.title }}</div>
            <div class="msg hidden-text">{{ item.msg }}</div>
            <div class="u-flex u-row-between" style="margin-top: 20px">
              <el-button size="small" style="border-radius: 0">快速入门</el-button>
              <el-button size="small" type="primary">查看详情</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 解决方案 -->
    <div class="plate-two">
      <div class="container">
        <h2>支持各个教育场景的解决方案</h2>
        <div class="inner">
          <h3>基础教育解决方案</h3>
          <p class="msg"
            >通过云计算、大数据、物联网、人工智能等技术重构传统校园，提升教学效率，优化学校管理。</p
          >
          <el-button style="margin-top: 65px" size="small" type="primary">了解更多</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
  name: 'Home',
  components: {
    Nav
  },
  data() {
    const swiperList = [
      require('@/assets/img/home_bg_banner.png'),
      require('@/assets/img/home_bg_banner.png'),
      require('@/assets/img/home_bg_banner.png')
    ]
    const infrastructureProductsList = [
      {
        icon: require('@/assets/img/icon_product.png'),
        title: '热门产品'
      },
      {
        icon: require('@/assets/img/icon_reality.png'),
        title: '拓展现实'
      },
      {
        icon: require('@/assets/img/icon_video.png'),
        title: '视频服务'
      },
      {
        icon: require('@/assets/img/icon_ai.png'),
        title: '人工智能'
      },
      {
        icon: require('@/assets/img/icon_data.png'),
        title: '大数据'
      },
      {
        icon: require('@/assets/img/icon_iot.png'),
        title: '智慧物联网'
      },
      {
        icon: require('@/assets/img/icon_Blockchain.png'),
        title: '区块链'
      }
    ]
    const projectList = [
      {
        cover: require('@/assets/img/project1.png'),
        title: 'OCR识别',
        msg: '多场景、多语种、高精度的文字检测'
      },
      {
        cover: require('@/assets/img/project2.png'),
        title: '知识图谱',
        msg: '知识点的结构化处理，实现教与学的'
      },
      {
        cover: require('@/assets/img/project3.png'),
        title: '运维监控',
        msg: '高可用灾备系统，保证数据安全的服'
      },
      {
        cover: require('@/assets/img/project4.png'),
        title: 'NLP自然语言处理',
        msg: '快速实现一种语言到另一种语言的自动'
      }
    ]
    return {
      swiperList,
      infrastructureProductsList,
      projectList
    }
  }
}
</script>

<style lang="less" scoped>
.swiper {
  position: relative;
  height: 650px;
}
/deep/ .el-carousel__indicators--horizontal {
  width: 1200px;
  bottom: 96px;
  padding-left: 90px;
  box-sizing: border-box;
  .is-active .el-carousel__button {
    background-color: #377ffc;
  }
}
.container {
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
}
.row-one {
  position: relative;
  z-index: 2;
  width: 1200px;
  margin: -30px auto 0;
  .column {
    transition: transform 0.3s ease-in-out;
    & + .column {
      margin-left: 20px;
    }
    &:hover {
      transform: translateY(-22px);
    }
    height: 128px;
    padding-left: 30px;
    flex: 1;
    flex-shrink: 0;
    background: #ffffff;
    border: 1px solid #e5e8ed;
    border-radius: 3px;
    box-shadow: 0px 2px 5px 0px rgba(26, 114, 163, 0.07);
    > img {
      margin-right: 30px;
    }
  }
  .title {
    color: #377ffc;
    font-size: 18px;
  }
  .msg {
    margin-top: 11px;
    color: #616161;
    font-size: 14px;
  }
}
.plate-one {
  margin: 95px auto 0;
  > h2 {
    font-weight: 500;
    color: @text-theme-color;
    text-align: center;
  }
  .share-link {
    text-align: center;
    margin-bottom: 60px;
    padding-top: 20px;
    /deep/ .el-link--primary {
      color: #377ffc;
    }
  }
  .column {
    width: 115px;
    text-align: center;
    .wrapper {
      width: 72px;
      height: 72px;
      background-color: #f8fafe;
      border-radius: 3px;
    }
    .column-msg {
      margin-top: 20px;
      font-size: 20px;
      color: #377ffc;
    }
  }
}
.projects {
  margin-top: 82px;
  padding-bottom: 100px;
  .project-item {
    transition: transform 0.3s ease-in-out;
    & + .project-item {
      margin-left: 20px;
    }
    &:hover {
      transform: translateY(-20px);
    }
    background: #ffffff;
    box-shadow: 0px 12px 62px 0px rgba(26, 114, 163, 0.09);
    .content {
      padding: 20px;
    }
    .title {
      font-size: 20px;
      color: @text-theme-color;
    }
    .msg {
      margin-top: 10px;
      color: @text-light-theme-color;
      font-size: 14px;
    }
  }
}
.plate-two {
  height: 646px;
  background-image: url('../assets/img/home_bg_education.png');
  background-size: cover;
  background-position: center top;
  color: #fff;
  h2 {
    padding-top: 62px;
    text-align: center;
    font-weight: 500;
    font-size: 32px;
  }
  h3 {
    font-size: 28px;
    font-weight: 500;
  }
  .inner {
    padding-top: 82px;
    position: relative;
    .msg {
      font-size: 14px;
      margin-top: 27px;
    }
  }
}
</style>
