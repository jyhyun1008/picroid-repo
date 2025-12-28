<script setup lang="js">

    const props = defineProps(['src'])
    
</script>
<template>
    <div class="crop">
        <img :src=props.src />
    </div>
</template>
<style>
    

</style>