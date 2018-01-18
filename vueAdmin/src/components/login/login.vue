<template>
  <div id="login">
    <el-row>
      <el-col :span="24">
        <div class="formBox">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item>
              <h3 class="title">系 统 登 录</h3>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')" :loading="isLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <canvas width="1349" height="404" id="canvas" ref="canvas"></canvas>
  </div>
</template>
<script>
  import $ from 'jquery';

  export default {
    name: 'login',
    data () {
      var validatePass = (rule, value, callback) => {
        if(value === "") {
          callback(new Error("请输入用户名！"));
        } else {
          let reg_user = /^[a-zA-Z0-9_-]{4,16}$/;
          if(!reg_user.test(value)) {
            callback(new Error("请输入正确的用户名！"));
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if(value === "") {
          callback(new Error("请输入密码！"));
        }
        callback(); 
      };
      return {
        isLogin: false,  // 使用改变isLogin 的值来控制“登录”按钮上的loading状态
        ruleForm2: {
          username: 'admin',
          pass: '123456'
        },
        rules2: {
          username: [
            { validator: validatePass, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    created () {
      //console.log(this.$refs.canvas); // undefined
    },
    mounted () {
      var canvas = this.$refs.canvas;
      window.addEventListener('resize', resizeCanvas, false);
      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      // console.log(this.$refs.canvas);
      var canvas = this.$refs.canvas;
      var ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.lineWidth = .3;
      ctx.strokeDStyle = (new Color(150)).style;   // 定义笔触的颜色
      // 定义鼠标的位置
      var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
      };

      var dots = {
        nb: 150,
        distance: 50,
        d_radius: 100,
        array: []
      };

      function colorValue(min) {
        return Math.floor(Math.random() * 255 + min);
      }

      function createColorStyle(r, g, b) {
        return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
      }

      function mixComponents(comp1, weight1, comp2, weight2) {
        return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
      }

      function averageColorStyles(dot1, dot2) {
        var color1 = dot1.color,
          color2 = dot2.color;

        var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
          g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
          b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
        return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
      }
      function Color(min) {
        min = min || 0;
        this.r = colorValue(min);
        this.g = colorValue(min);
        this.b = colorValue(min);
        this.style = createColorStyle(this.r, this.g, this.b);
      }
      function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random() * 2;

        this.color = new Color();
      }

      Dot.prototype = {
        draw: function () {
          ctx.beginPath();
          ctx.fillStyle = this.color.style;
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fill();
        }
      };

      function createDots() {
        for (var i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot());
        }
      }

      function moveDots() {
        for (var i = 0; i < dots.nb; i++) {

          var dot = dots.array[i];

          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          }
          else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      }

      function connectDots() {
        for (var i = 0; i < dots.nb; i++) {
          for (var j = 0; j < dots.nb; j++) {
            var i_dot = dots.array[i];
            var j_dot = dots.array[j];

            if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
              if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
                ctx.beginPath();
                ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }

      function drawDots() {
        for (var i = 0; i < dots.nb; i++) {
          var dot = dots.array[i];
          dot.draw();
        }
      }

      function animateDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        moveDots();
        connectDots();
        drawDots();
        requestAnimationFrame(animateDots);
      }

      canvas.addEventListener('mouseover', function (e) {
        //console.log(e);
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;
      })

      canvas.addEventListener('mouseleave', function (e) {
        mousePosition.x = canvas.width / 2;
        mousePosition.y = canvas.height / 2;
      })
      createDots();
      requestAnimationFrame(animateDots);
    },
    methods: {
      submitForm(formName) {
        console.log(this.$route.matched)
        this.$refs[formName].validate((valid) => {   // validate() 是element组件库自定义验证方法
          if (valid) {
            // console.log(this.isLogin);
            this.isLogin = true;   
            var loginParams = {
              username: this.ruleForm2.username,
              password: this.ruleForm2.pass
            };
            if(loginParams.username == 'admin' && loginParams.password == '123456') {   // 判断用户名和密码是否正确（正式项目此处需调用接口）
              this.isLogin = false;
              sessionStorage.setItem('user', JSON.stringify(loginParams));
              this.$router.push({path: '/silder'});   // 跳转页面
            } else {
              this.isLogin = false;
              this.$alert('用户名或密码错误！', '提示信息', {
                confirmButtonText: '确定'
              })
            }
          } else {
            // console.log('error submit!!');
            this.$notify.error({
              title: "错误",
              message: "请输入正确的用户名密码",
              offset: 100
            })
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet">
  #login {
    background: #000;
    margin: 0;
    padding: 0;
    position: relative;
    .formBox{
      text-align: center;
      color: #fff;
      position: fixed;
      top: 30%;
      left: 50%;
      width: 390px;
      margin-left: -229px;
      .title {
        color: #fff;
        margin: 0;
      }
      .el-form-item label{
        color: #fff;
      }
      button{
        width: 290px;
      }

    }
    #canvas {
      width: 100%;
      height: 100%;
      padding: absolute;
    }

  }
</style>

