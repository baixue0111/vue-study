<template>
    <div id="count">
        <h3>{{msg}}</h3>
        <hr>
        <h3>{{$store.state.count}}</h3>
    </div>   
</template>
<script type="text/javascript">
    import store from '../vuex/store.js';
    export default {
        data () {
            return {
                msg: "Hello Vue!"
            }
        },
        store   // 引入store使用
    }
</script>
<style scoped>

</style>

