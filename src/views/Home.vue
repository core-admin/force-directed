<template>
  <div class="home">
    <!-- 导航 -->
    <Nav />
    <!-- banner轮播 -->
    <div class="swiper">
      <el-carousel autoplay height="650px" arrow="never" indicator-position :interval="4000">
        <el-carousel-item v-for="(item, index) in swiperBannerList" :key="index">
          <img :src="item.cover" :alt="item.title" />
          <div class="swiper-slider">
            <h2>{{ item.title }}</h2>
            <router-link to="/" class="button-plain">查看详情</router-link>
          </div>
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
        <div class="change-view">
          <div class="change-item active">基础教育</div>
          <div class="change-item">高等教育</div>
          <div class="change-item">在线教育</div>
          <div class="change-item">培训机构</div>
          <div class="change-item">内部培训</div>
        </div>
        <div class="product">
          <img src="../assets/img/product1.png" alt="" />
          <img src="../assets/img/product2.png" alt="" />
          <img src="../assets/img/product3.png" alt="" />
          <img src="../assets/img/product4.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 服务案例 -->
    <div class="plate-three">
      <div class="container">
        <h2>服务案例</h2>
        <div class="u-flex u-col-top pro-introduce-wrapper">
          <div class="inner">
            <h3>山东省实验中学</h3>
            <ul class="illustrate-wrap">
              <li class="u-flex u-col-top illustrate">
                <span class="label">行业类型：</span>
                <span class="msg">教育</span>
              </li>
              <li class="u-flex u-col-top illustrate">
                <span class="label">客户简介：</span>
                <span class="msg">
                  山东省实验中学位于山东省济南市，建校于1948年，是山东省首批省级重点学校、山东省省级规范化学校。山东省实验中学分主校（走读）、东校（寄宿）和西校（寄宿寄宿三个校区。
                </span>
              </li>
              <li class="u-flex u-col-top illustrate">
                <span class="label">服务历程：</span>
                <span class="msg">
                  Nullam tempor tortor in cursus gravida. Sed fermentum quam eu libero condimentum
                  tincidunt. Suspendisse potenti. Sed consectetur, nunc sit amet auctor venenatis,
                  eros lectus interdum urna, et gravida augue augue in purus. facilisis.
                </span>
              </li>
              <li class="u-flex u-col-top illustrate">
                <span class="label">使用产品：</span>
                <div class="u-flex illustrate-link">
                  <a href="javascript:;" class="u-flex u-flex ill-alink">
                    <img src="../assets/img/face.png" alt="" />
                    <span>人脸识别</span>
                  </a>
                  <a href="javascript:;" class="u-flex ill-alink">
                    <img src="../assets/img/icon_littlelockchain.png" alt="" />
                    <span>区块链</span>
                  </a>
                  <a href="javascript:;" class="u-flex ill-alink">
                    <img src="../assets/img/icon_knowledge.png" alt="" />
                    <span>知识图谱</span>
                  </a>
                  <a href="javascript:;" class="u-flex ill-alink">
                    <img src="../assets/img/icon_voice.png" alt="" />
                    <span>语音识别</span>
                  </a>
                  <a href="javascript:;" class="u-flex ill-alink">
                    <img src="../assets/img/icon_nuture.png" alt="" />
                    <span>自然语言处理</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="pro-introduce-img">
            <img src="../assets/img/pro-introduce.png" alt="" />
          </div>
        </div>
        <div class="case-swiper-wrap">
          <el-carousel
            :autoplay="false"
            height="125px"
            arrow="never"
            :interval="4000"
            indicator-position="none"
            ref="caseSwiper"
          >
            <el-carousel-item v-for="(item, index) in swiperCaseList" :key="index">
              <div class="u-flex u-row-between caseview">
                <div
                  class="u-flex u-row-center case-item"
                  :class="i === 0 ? 'active' : ''"
                  v-for="(_case, i) in item.caseCover"
                  :key="i"
                >
                  <img :src="_case" />
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <div
            class="carousel-operation carousel-operation-prev"
            @click="handleCarouselChange('prev')"
          ></div>
          <div
            class="carousel-operation carousel-operation-next"
            @click="handleCarouselChange('next')"
          ></div>
        </div>
      </div>
    </div>

    <!-- 动态 -->
    <div class="plate-four">
      <div class="container">
        <h3>天健云动态</h3>
        <div class="u-flex u-col-top plate-four-container">
          <div class="activity">
            <p class="tip-title">最新活动</p>
            <div
              class="u-flex u-row-right activity-item"
              :style="{
                backgroundImage: `url(${require('@/assets/img/activity_bg_1.png')})`,
                paddingRight: '36px'
              }"
            >
              <a href="javascript:;">新人启动计划</a>
            </div>
            <div
              class="u-flex activity-item"
              :style="{
                backgroundImage: `url(${require('@/assets/img/activity_bg_2.png')})`,
                paddingLeft: '53px'
              }"
            >
              <a href="javascript:;">年底回馈</a>
            </div>
          </div>
          <div class="inner">
            <p class="u-flex u-row-between tip-title">
              <span>公司最新动态</span>
              <a href="javascript:;" class="look-more">查看更多</a>
            </p>
            <div class="u-flex news-list">
              <a href="javascript:;" class="hidden-text news-link active"
                >共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合</a
              >
              <span class="time">2020-12-17</span>
            </div>
            <div class="u-flex news-list">
              <a href="javascript:;" class="hidden-text news-link"
                >共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合</a
              >
              <span class="time">2020-12-17</span>
            </div>
            <div class="u-flex news-list">
              <a href="javascript:;" class="hidden-text news-link"
                >共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合</a
              >
              <span class="time">2020-12-17</span>
            </div>
            <div class="u-flex news-list">
              <a href="javascript:;" class="hidden-text news-link"
                >共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合</a
              >
              <span class="time">2020-12-17</span>
            </div>
            <div class="u-flex news-list">
              <a href="javascript:;" class="hidden-text news-link"
                >共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合</a
              >
              <span class="time">2020-12-17</span>
            </div>
            <div class="u-flex news-list">
              <a href="javascript:;" class="hidden-text news-link"
                >共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合共建全场景智慧学校，加速人工智能和教育产业相结合业相结合业相结合</a
              >
              <span class="time">2020-12-17</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 即刻上云 -->
    <div class="u-flex-col u-col-center u-row-center plate-five">
      <h2>即刻上云</h2>
      <p class="message">快速指引，轻松上手</p>
      <a href="javascript:;" class="button-plain">免费注册</a>
    </div>

    <Footer />

    <operation-tips />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import OperationTips from '../components/OperationTips.vue'
export default {
  name: 'Home',
  components: {
    Nav,
    Footer,
    OperationTips
  },
  data() {
    const swiperBannerList = [
      {
        cover: require('@/assets/img/home_bg_banner.png'),
        title: '以数赋智•云启未来'
      },
      {
        cover: require('@/assets/img/home_bg_banner.png'),
        title: '以数赋智•云启未来'
      },
      {
        cover: require('@/assets/img/home_bg_banner.png'),
        title: '以数赋智•云启未来'
      }
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
    const swiperCaseList = [
      {
        caseCover: [
          require('@/assets/img/case1.png'),
          require('@/assets/img/case2.png'),
          require('@/assets/img/case3.png'),
          require('@/assets/img/case4.png'),
          require('@/assets/img/case5.png')
        ]
      }
    ]
    return {
      swiperBannerList,
      infrastructureProductsList,
      projectList,
      swiperCaseList
    }
  },
  methods: {
    handleCarouselChange(type) {
      this.$refs.caseSwiper[type]()
    }
  }
}
</script>

<style lang="less" scoped>
.swiper {
  position: relative;
  height: 650px;
  .swiper-slider {
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -600px;
    position: absolute;
    width: 1200px;
    box-sizing: border-box;
    padding-left: 90px;
    h2 {
      color: #ffffff;
      letter-spacing: 6px;
      font-weight: 500;
      font-size: 50px;
      margin-top: 166px;
    }
  }
}
.button-plain {
  display: inline-block;
  line-height: 38px;
  white-space: nowrap;
  background-color: transparent;
  padding: 0 30px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.8);
  color: #fff;
  font-size: 16px;
  outline: none;
  text-align: center;
  margin-top: 50px;
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
  position: relative;
  flex-shrink: 0;
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
    padding-top: 70px;
    position: relative;
    .msg {
      font-size: 14px;
      margin-top: 27px;
    }
  }
}
.product {
  margin-top: 120px;
  > img + img {
    margin-left: 82px;
  }
}
.change-view {
  padding-right: 50px;
  position: absolute;
  top: 175px;
  right: 0;
  .change-item {
    color: #fff;
    font-size: 18px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 3px;
      background-color: #377ffc;
      bottom: -5px;
      left: 0;
      display: none;
    }
    & + .change-item {
      margin-top: 40px;
    }
    &.active {
      color: #377ffc;
      &::after {
        display: block;
      }
    }
  }
}
.plate-three {
  background: url('../assets/img/home_bg_service.png') no-repeat center top / 100% 100%;
  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: @text-theme-color;
    padding: 99px 0 55px;
  }
  .pro-introduce-wrapper {
    border-radius: 3px;
    box-shadow: 0px 2px 5px 0px rgba(26, 114, 163, 0.04), 0px -2px 5px 0px rgba(26, 114, 163, 0.04);
    background-color: #fff;
    padding: 30px 30px 40px 40px;
  }
  .inner {
    color: @text-theme-color;
    font-size: 14px;
    h3 {
      font-size: 24px;
      padding-top: 10px;
    }
  }
  .pro-introduce-img {
    flex-shrink: 0;
    width: 408px;
    height: 310px;
    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .illustrate-wrap {
    margin-top: 25px;
    padding-right: 50px;
    .illustrate {
      line-height: 24px;
      & + .illustrate {
        margin-top: 20px;
      }
    }
    .label {
      font-weight: 700;
      width: 85px;
      margin-right: 20px;
      flex-shrink: 0;
      position: relative;
      box-sizing: border-box;
      padding-left: 15px;
      &::before {
        content: '';
        border: 2px solid #616161;
        position: absolute;
        left: 0;
        top: 9px;
      }
    }
    .msg {
      line-height: 24px;
    }
    .ill-alink {
      color: #377ffc;
      & + .ill-alink {
        margin-left: 30px;
        > img {
          margin-right: 8px;
        }
      }
    }
  }
}
.case-swiper-wrap {
  padding-top: 35px;
  padding-bottom: 60px;
  position: relative;
  .carousel-operation {
    position: absolute;
    top: 68px;
    width: 56px;
    height: 64px;
    z-index: 2;
    cursor: pointer;
    &-prev {
      background-image: url('../assets/img/icon_hover_left.png');
      left: -10px;
    }
    &-next {
      background-image: url('../assets/img/icon_hover_right.png');
      right: -10px;
    }
  }
}
.caseview {
  padding-left: 60px;
  padding-right: 60px;
}
.case-item {
  flex: 1;
  height: 124px;
  background-color: #f8f9fc;
  &.active {
    background-color: #fff;
  }
}
.plate-four {
  background-color: #fff;
  background-image: url('../assets/img/icon_littlecircular.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  color: @text-theme-color;
  padding-bottom: 200px;
  h3 {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    padding: 100px 0 55px;
  }
  .tip-title {
    font-size: 20px;
    padding-bottom: 40px;
  }
  .activity {
    flex-shrink: 0;
  }
  .activity-item {
    box-sizing: border-box;
    width: 438px;
    height: 140px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: left top;

    > a {
      color: #fff;
      font-size: 28px;
      font-weight: 500;
    }
    & + .activity-item {
      margin-top: 30px;
    }
  }
  .inner {
    margin-left: 100px;
    flex: 1;
    .news-list {
      padding-bottom: 8px;
      border-bottom: 1px solid #e3e9f3;
      & + .news-list {
        margin-top: 22px;
      }
    }
    .news-link {
      color: @text-theme-color;
      flex-wrap: wrap;
      width: 500px;
      font-size: 14px;
      &.active {
        color: #377ffc;
      }
    }
    .time {
      width: 150px;
      flex-shrink: 0;
      text-align: right;
      font-size: 16px;
      color: #999999;
    }
    .look-more {
      padding-right: 22px;
      background: url('../assets/img/icon_defult_more.png') no-repeat right center / 10px 16px;
      font-size: 16px;
      color: @text-theme-color;
    }
  }
}
.plate-five {
  background: url('../assets/img/home_bg_cloud.png') no-repeat center top / cover;
  height: 228px;
  h2 {
    color: #fff;
    font-size: 32px;
  }
  > .message {
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
  }
  > .button-plain {
    margin-top: 25px;
    line-height: 32px;
    color: @text-theme-color;
    background-color: #fff;
  }
}
</style>
