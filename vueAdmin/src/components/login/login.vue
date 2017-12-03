<template>
  <div id="login">
    <el-row>
        <el-col :span="24" id="el-col">
            <!-- <div class="login_box"> -->
                <h3>系 统 登 录</h3>
                <div class="user_ipt">
                    <el-input placeholder="用户名" v-model="inputValue" id="user_ipt" clearable></el-input>                    
                </div>
                <div class="user_pass">
                    <el-input placeholder="密码" v-model="inputPass" id="user_pass" clearable></el-input>                    
                </div>
                <div class="error"></div>
                <el-button type="primary" style="width: 328px;">登 录</el-button>
            <!-- </div> -->
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
            return {
               inputValue: '',
               inputPass: ''
            }
        },
        created () {
            //console.log(this.$refs.canvas); // undefined
        },
        mounted () {
            // console.log(this.$refs.canvas);
            var canvas = this.$refs.canvas;
            var ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.lineWidth = .3;
            ctx.strokeDStyle = (new Color(150)).style;   // 定义笔触的颜色

            // console.log(`canvas的宽度为：${canvas.width}`);
            // console.log(canvas);

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

            function Dot(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                this.vx = -.5 + Math.random();
                this.vy = -.5 + Math.random();

                this.radius = Math.random() * 2;

                this.color = new Color();
                console.log(this);
            }

            Dot.prototype = {
                draw: function(){
                ctx.beginPath();
                ctx.fillStyle = this.color.style;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
                }
            };

            function createDots(){
                for(var i = 0; i < dots.nb; i++){
                    dots.array.push(new Dot());
                }
            }

            function moveDots() {
                for(var i = 0; i < dots.nb; i++){

                    var dot = dots.array[i];

                    if(dot.y < 0 || dot.y > canvas.height){
                        dot.vx = dot.vx;
                        dot.vy = - dot.vy;
                    }
                    else if(dot.x < 0 || dot.x > canvas.width){
                        dot.vx = - dot.vx;
                        dot.vy = dot.vy;
                    }
                    dot.x += dot.vx;
                    dot.y += dot.vy;
                }
            }

            function connectDots() {
                for(var i = 0; i < dots.nb; i++){
                    for(var j = 0; j < dots.nb; j++){
                        var i_dot = dots.array[i];
                        var j_dot = dots.array[j];

                        if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                            if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
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
                for(var i = 0; i < dots.nb; i++){
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
                console.log(canvas.width);
                mousePosition.x = canvas.width / 2;
                mousePosition.y = canvas.height / 2;
            })

            createDots();
            requestAnimationFrame(animateDots);
        },
        methods: {
            // mousemove(e) {
            //     // mousePosition.x = e.pageX;
            //     // mousePosition.y = e.pageY;
            //     //console.log(e);
            // },
            // mouseleave(e) {
            //    // console.log(e);
            //     // mousePosition.x = canvas.width / 2;
            //     // mousePosition.y = canvas.height / 2;
            // }
        }
    }
</script>
<style lang="scss" rel="stylesheet" scoped>
#login{
    background: #000;
    margin: 0;
    padding: 0;
    // position: relative;
    #el-col{
        text-align: center;
        color: #fff;
        position: fixed;
        top: 30%;
        h3{
            color: #fff;
        }
        .user_ipt{
            width: 328px;
            margin: 0 auto;
        }
        .user_pass{
            width: 328px;
            margin: 20px auto;
        }
        .error{
            width: 328px;
            margin: 20px auto;
            color: #CB1623;
        }
    }    
    #canvas{
        width: 100%;
        height: 100%;
        padding: absolute;
    }
}
</style>

