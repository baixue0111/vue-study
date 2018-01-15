<template>
    <div id="page2">
        <v-header></v-header>
        <h3>我是page2.vue</h3>
    </div>
</template>

<script>
import header from './header/header';
export default {
    name: 'page2',
    data() {
        return {

        }
    },
    components: {
        'v-header': header
    }
}    

</script>

<style>


</style>

