<template>
    <div id="form">
        <v-header></v-header>
        <h3>我是form.vue</h3>
    </div>
</template>

<script>
import header from './header/header';
export default {
    name: 'form',
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

