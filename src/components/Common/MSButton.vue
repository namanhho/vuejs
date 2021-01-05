<template>
    <button class="btn" :style="styleBtn" @click="btnOnClick">
        <div v-if="icon && !iconAfter" :class="icon" class="icon-left" ></div>
        <slot/>
        <div v-if="icon && iconAfter" :class="icon"></div>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {
                type: String,
                default: ""
            },
            iconAfter: {
                type: [String, Boolean],
                default:  false
            },
            bgBtn: String
        },
        computed: {
            styleBtn(){
                return {
                    background: this.bgBtn
                }
            }
        },
        methods: {
            btnOnClick(){
               this.$emit('btn-click')
            }
        }
    }
</script>
<style scoped>
.btn{
    border: none;
    outline: none;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.icon-left{
    margin-right: 8px;
}
</style>