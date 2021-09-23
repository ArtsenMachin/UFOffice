<template>
    <div id='not_found' class='text-center'>
        <img v-bind:src="require(`@/assets/img/404.png`)" class='img-fluid'>
    </div>
</template>
<style scoped>
    #not_found{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
</style>