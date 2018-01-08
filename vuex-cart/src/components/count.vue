<template>
    <div id="count">
        <h2>{{msg}}</h2>
        <hr>
        <h3>{{newCount}}</h3>
        <p>
            <button @click="add">add</button>
            <button @click="reduceAction">reduce</button>
        </p>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        data() {
            return {
                msg: "Hello Vuex!"
            }
        },
        computed: {
           /*  getCount() {  // 第一种获取state中数据的写法
                return this.$store.state.count;
            } */
            ...mapState(['count']),  // 第二种获取state中的数据的写法
            ...mapGetters(['newCount'])
        },
        methods: {
            ...mapMutations(["add"]),
           /* ...mapMutations(["reduce"]) */
            ...mapActions(["addAction"]),
            reduceAction() {
                this.$store.dispatch("reduceAction");
            }
            /* add() {
                this.$store.commit("add");
            },
            reduce() {
                this.$store.commit("reduce");
            } */
        }
    }
</script>

<style>
    
</style>