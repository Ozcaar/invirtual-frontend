<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';

</script>

<template>
    <div>
        <Header></Header>
        <main>
            <slot></slot>
        </main>
        <Footer></Footer>
    </div>
</template>