<template>
    <div>
        <nv-head page-type="主题" :fix-head="true" :need-add="true" ></nv-head>
        <div id="page" v-if="topic.title">
        	<h2 class="topic-title" v-text="topic.title"></h2>
        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
    import $ from 'webpack-zepto';
    import nvHead from '../components/header.vue';
    export default {
        data() {
            return {
                showMenu: false,
                topicId: '',
                topic: {}
            };
        },
        mounted() {
            // 获取url传的tab参数
            this.topicId = this.$route.params.id;
             // 加载主题数据
            $.get('https://cnodejs.org/api/v1/topic/' + this.topicId, (d) => {
                if (d && d.data) {
                    this.topic = d.data;
                } else {
                    this.noData = true;
                }
            });
        },
        components: {
            nvHead
        }
    };
</script>