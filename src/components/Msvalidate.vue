<script>
export default {
    data(){
        return {
            lstValidate: ['TextInput'],
            error: {
                message: null
            }
        }
    },
    method: {
        validate() {
            console.log(this.$children)
        }
    }
}
</script>