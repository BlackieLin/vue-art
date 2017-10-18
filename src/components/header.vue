<template>
    <div>
        <div class="page-cover" v-if="show&&fixHead" @click="showMenus"></div>
        <header id="hd" :class="{'show':show&&fixHead,'fix-header':fixHead,'no-fix':!fixHead}">
        	<div class="nv-toolbar">
        		<div class="toolbar-nav" @click="openMenu"></div>
        		<span v-text="pageType"></span>{{showText}}
        		<i class="num" v-if="messageCount > 0">{{messageCount}}</i>
        		<router-link to="/add">
                                    <i v-if="needAdd" v-show="!messageCount || messageCount <= 0" class="iconfont add-icon">&#xe60f;</i>
                            </router-link>
        	</div>
        </header>
         <nv-menu :show-menu="show"></nv-menu>
    </div>
</template>
<script>
    import $ from 'webpack-zepto';
    export default {
        props: {
            pageType: String,
            fixHead: Boolean,
            messageCount: Number,
            scrollTop: 0,
            needAdd: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                show: false,
                showText: 's'
            };
        },
        methods: {
            openMenu() {
                this.show = !this.show;
                $('body').css('overflow', 'hidden');
            },
            showMenus() {
                this.show = !this.show;
                $('body').css('overflow', 'auto');
            }
        },
        components: {
            'nvMenu': require('./menu.vue')
        }
    };
</script>
