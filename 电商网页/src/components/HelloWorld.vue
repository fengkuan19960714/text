<template>
  <div>
      <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">让旅行更幸福</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>

          <a href="#" class="login">你好!登录</a>
       
    <ul class="nav navbar-nav navbar-right list">
      <li>免费注册<span>|</span></li>
      <li>消息<span>|</span></li>
      <li>我的携程<span>|</span></li>
      <li>我的订单<span>|</span></li>
      <li>客服中心<span>|</span></li>
    </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

    <div class="seacher">
        <img src="../assets/images/timg.jpg" alt="">
        <input type="text"><span>搜索</span>
        <select name="" id="" class="navbar-right">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
    </div>

    <div class="nav1">
      <ul>
        <li>首页</li>
        <li>酒店</li>
        <li>旅游</li>
        <li>跟团游</li>
        <li>首页</li>
         <li>首页</li>
        <li>首页</li>
        <li>首页</li>
        <li>首页</li>
        <li>首页</li>
         <li>首页</li> 
         <li>首页</li>
        <li>首页</li>
        <li>首页</li>
        <li>首页</li>
        <li>首页</li>
        <li>首页</li>
      </ul>
    </div>
  </div>
</template>

<style>
  .login{
    margin-left: 350px;
    display: inline-block;
    margin-top: 15px ;
    margin-bottom: 15px;
  }
  .list li{
    margin: 15px 20px
  }
  .list li span{
    margin-left: 5px;
    text-align: center
  }
  .seacher{
    height: 60px
  }
.seacher img{
  display: inline-block;
     width: 126px;
     height: 60px
  }
  .seacher input{
    border-radius: 5px 0 0 5px;
    margin-left: 30px;
    width: 30%;
    height: 30px;
    border: 1px solid skyblue;
  }
  .seacher span{
    line-height: 28px;
    display: inline-block;
    border: 1px solid skyblue;
    width: 30px ;
    height: 30px ;
    background-color: skyblue
  }
  .nav1{
    width: 100%;
    height: 60px;
    background-color: #2577e3
  }
  .nav1 ul{
    margin-left: 5%;
  }
  .nav1 ul li{
    font-size: 16px;
    float: left;
    width: 5%;
    text-align: center;
    line-height: 60px;
    list-style: none;
    color: #fff
  }
</style>
<script>

</script>