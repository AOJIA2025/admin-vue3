<template>
    <div class="content">
        <div class="img">
            <img src="../../assets/images/error.png" alt="">
        </div>
        <div class="span" @click="toPath()">404出错啦，返回首页...</div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toPath = () => {
    router.push('/');
}
</script>

<style lang="less" scoped>
.content {
    .img {
        text-align: center;
        margin-top: 100px;
    }

    img {
        width: 1280px;

    }

    .span {
        width: 1280px;
        font-size: 25px;
        color: darkgray;
        cursor: pointer;
        text-align: center;
        margin: auto;
        margin-top: -50px;
    }
}
</style>