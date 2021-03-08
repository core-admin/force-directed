<template>
  <footer class="footer">
    <div class="container">
      <div class="u-flex u-col-top u-row-between footer-link-wrap">
        <a class="footer-link" href="javascript:;">关于我们</a>
        <a class="footer-link" href="javascript:;">联系我们</a>
        <a class="footer-link" href="javascript:;">加入我们</a>
        <a class="footer-link" href="javascript:;">合作案例</a>
        <a class="footer-link" href="javascript:;">关注天健云</a>
        <div class="align-center">
          <div class="footer-button-link u-p-l-15 u-p-r-15">
            售前咨询热线
            <span class="u-m-l-15">XXXXX转1</span>
          </div>
          <div class="u-m-t-24">
            <a href="javascript:;">专业技术咨询</a>
            <a href="javascript:;" class="u-m-l-10">全方位产品解读</a>
          </div>
        </div>
        <img class="qrcode" src="../assets/img/erweima.png" alt="" />
      </div>
      <div class="footer-copyright">
        <div>
          CopyRight©2020 &nbsp; &nbsp; &nbsp; &nbsp; 天健联创控股(山东)集团有限公司 &nbsp;
          &nbsp;&nbsp; &nbsp; 版权所有
        </div>
        <div class="u-m-t-6">
          <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备16018671号</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  background-color: #2e3033;
  font-size: 14px;
  box-sizing: border-box;
  padding-top: 40px;
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  a {
    color: #fff;
  }
  .footer-link-wrap {
    padding-bottom: 40px;
    border-bottom: 1px solid #45484c;
  }
  .footer-button-link {
    line-height: 36px;
    text-align: center;
    background-color: #45484c;
    color: #fff;
  }
  .qrcode {
    width: 132px;
    height: 132px;
  }
  .footer-copyright {
    text-align: center;
    padding: 20px 0;
    color: #c0c0c0;
    a {
      color: #c0c0c0;
      font-size: 12px;
    }
  }
}
</style>
