<template>
    <div>
        我是主页
    </div>
</template>

<script>

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            chageChildValue() {
                this.$actions.setGlobalState({
                    mt: 2
                })
            },
        }
    }
</script>

<style lang="scss">
.app-view-box {
    border: 1px solid red;
}
</style>