<template>
<div class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="nav-block">
                    <div class="brand-div logo">
                        <span class='h2'>UF<span class='color-green'>O</span>ffice</span>
                    </div>
                    <div class="org-div text-center d-sm-flex d-none">
                        <span class='h2'>{{Organization}}</span>
                    </div>  
                    <div class="burger-box">
                            <button class="btn fs-18">
                                <img v-bind:src="require(`@/assets/img/Menu_Burger.svg`)" v-on:click="Switch()" class='button-img'>
                            </button>
                    </div>
                </div>
            </div>
            <div class="col-12 text-center d-block d-sm-none">
                 <span class='h2'>{{Organization}}</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props:['orgname'],
    computed: mapGetters(["Organization"]),
    async mounted(){
        this.getOrganization();
    },
    methods:{
        Switch(){
            if (this.orgname.type!='menu'){
                this.$router.push('/office_menu');
            }else{
                this.$router.go('-1');
            }
        },
        ...mapActions(['getOrganization'])
    }
}
</script>
<style scoped>
    .nav-block{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .button-img{
        height: 65px;
        border: 1px dotted #6E44FF;
        border-radius: 10px;
    }
    .button-img:hover{
        background-color: #6d44ffa2;
    }
    .container-fluid{
        background-color: #6d44ff6b;
        border-bottom: 1px solid #6E44FF;
    }
</style>