<template>
  <div id="login">
      <canvas width="1841" height="404" id="canvas" ref="canvas"></canvas>
  </div>
</template>
<script>
    import $ from 'jquery';

    export default {
        name: 'login',
        data () {
            return {
               
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

            console.log(canvas.width);
            console.log(canvas);

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
        },
        methods: {
            colorValue(min) {
                return Math.floor(Math.Random() * 255 + min);
            },
            createColorStyle(r, g, b) {
                return `rgba(${r}${g}${b}, 0.8)`;
            },
            Color(min) {
                min = min || 0;
                this.r = colorValue(min);
                this.g = colorValue(min);
                this.b = colorValue(min);
                this.style = creatColorStyle(this.r, this.g, this.b);
            }
        }
    }
</script>
<style scoped lang="scss">
    #id{
        background: #000;
        margin: 0;
        padding: 0;
        #canvas{
            width: 100%;
            height: 100%;
            padding: absolute;
        }
    }
</style>

