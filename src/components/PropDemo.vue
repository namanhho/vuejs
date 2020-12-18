<template>
<div>
{{getName1()}}
    <HelloWorld @clicked="clickEmit">
            <h3>This is slot</h3>
    </HelloWorld>
    <input v-model="inputName" @input="onInput"/>
    </div>
</template>
<script>
import HelloWorld from "./HelloWorld"
export default {
    data(){
        return {
            name: 'abccascscc',
            inputName: null
        }
    },
    components: {
        HelloWorld
    },
    methods: {
        clickEmit(val){
                alert(val)
        },
        onInput(){
            console.log(this.inputName)
        },
         getName1(){
            return this.name + 'ascscsacasc'
        }
    },
    computed: {
        getName(){
            return this.name + 'ascscsacasc'
        }
    },
    watch: {
        inputName(newVal, oldVal){
            // debugger
        }
    },
    created() {
    },
}
</script>