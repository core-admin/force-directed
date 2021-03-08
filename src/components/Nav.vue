<template>
  <nav class="nav">
    <div class="container u-flex">
      <a href="/" class="u-flex nav-alink-wrapper">
        <img src="../assets/img/logo@2x.png" class="logo" alt="logo" />
        <div class="nav-del-wrapper">
          <img src="../assets/img/logo_name@2x.png" class="logo-name" alt="" />
          <p class="logo-name-text">现代化教育的新型基础设施</p>
        </div>
      </a>
      <div class="nav-menu u-flex">
        <router-link class="nav-menu-link" to="/">产品</router-link>
        <router-link class="nav-menu-link" to="/a">解决方案</router-link>
        <router-link class="nav-menu-link" to="/b">支持与服务</router-link>
        <router-link class="nav-menu-link" to="/b">合作伙伴</router-link>
        <router-link class="nav-menu-link" to="/b">关于我们</router-link>
      </div>
      <el-input
        size="small"
        v-model="keyword"
        placeholder="搜索产品或内容"
        suffix-icon="el-icon-search"
        class="search"
      />

      <div class="btn-group u-flex" style="margin-left: auto;">
        <router-link to="/login" class="login">登录</router-link>
        <el-button size="small" type="primary">免费注册</el-button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  background-color: #fff;
  height: 100px;
  > .container {
    max-width: 1560px;
    height: 100%;
    margin: 0 auto;
  }
}
.logo {
  width: 55px;
  margin-right: 10px;
}
.logo-name {
  width: 79px;
  height: auto;
}
.logo-name-text {
  color: @text-theme-color;
  font-size: 12px;
  margin-top: 8px;
}
.nav-del-wrapper {
  padding-top: 3px;
  flex-shrink: 0;
}
.nav-menu {
  padding-left: 65px;
  line-height: 100px;
  margin-left: auto;
  flex-shrink: 0;
}
.nav-menu-link {
  padding: 0 36px;
  height: 100px;
  font-size: 16px;
  color: @text-theme-color;
  &:hover {
    color: #377ffc;
  }
}
.router-active {
  color: #377ffc;
}
/deep/ .search {
  margin-left: auto;
  width: 170px;
  flex-shrink: 0;
  .el-icon-search {
    color: #657189;
  }
  & > input {
    border: none;
    background-color: #edf6ff;
    color: @text-theme-color;
    &::-webkit-input-placeholder {
      color: #838793;
    }
    &::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #838793;
    }
    &:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #838793;
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #838793;
    }
  }
}
.login {
  color: @text-theme-color;
  font-size: 14px;
  flex-shrink: 0;
  padding-right: 20px;
  margin-right: 20px;
  padding-left: 20px;
  // margin-left: 130px;
}
</style>
