<template>
    <div id="table">
        <v-header></v-header>
        <h3>我是table.vue</h3>
    </div>
</template>

<script>
import header from './header/header';
export default {
    name: 'table',
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

