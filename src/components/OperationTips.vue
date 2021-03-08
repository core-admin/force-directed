<template>
  <div class="fixed-rt u-flex-col u-col-center">
    <div class="contact">
      <div class="u-flex-col u-col-center">
        <img width="22" src="../assets/img/news-icon.png" alt="" />
        <span class="u-m-t-10">联<br />系<br />我<br />们</span>
        <div class="contact-tips">
          <div class="contact-tips-wrap">
            <div class="tips-t u-p-b-10">
              <img src="../assets/img/contact-icon1.png" alt="" />
              <span class="u-m-l-8" style="color: #657189">售前咨询热线</span>
              <br />
              <span style="display: inline-block" class="u-m-t-5 u-p-l-22">123-1234-123</span>
            </div>
            <div class="tips-t u-m-t-10">
              <img src="../assets/img/contact-icon2.png" alt="" />
              <span class="u-m-l-8" style="color: #657189">在线咨询</span>
              <br />
              <span style="display: inline-block" class="u-m-t-5 u-p-l-22">QQ：123456789</span>
            </div>
            <router-link to="/" class="button-plain suggest-btn u-m-t-15">建议反馈</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="backtop u-m-t-10" @click="hadnlePageUp">
      <img src="../assets/img/icon_defult_up.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OperationTips',
  data() {
    return {}
  },
  methods: {
    hadnlePageUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.fixed-rt {
  position: fixed;
  right: 20px;
  bottom: 100px;
  z-index: 2;
  .backtop {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .contact {
    width: 47px;
    background-color: #fff;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 14px 0;
    color: #377ffc;
    font-size: 14px;
    cursor: pointer;
    position: relative;

    &:hover .contact-tips {
      opacity: 1;
      // visibility: visible;
      pointer-events: auto;
    }
  }
  .contact-tips {
    pointer-events: none;
    width: 200px;
    box-sizing: border-box;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    // visibility: hidden;
    position: absolute;
    right: 49px;
    // transform: translateX(-100%);
    top: 0;
    padding-right: 20px;
  }
  .contact-tips-wrap {
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 10px 20px 10px 15px;
    border-radius: 3px;
  }
  .suggest-btn {
    line-height: 28px;
    border-color: #999;
    color: #999;
    padding: 0;
    margin: 0 auto;
    display: block;
    width: 80px;
    font-size: 12px;
  }
}
</style>
