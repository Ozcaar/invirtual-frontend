<script setup lang="ts">
import TinyFooter from '~/components/layout/TinyFooter.vue';
import TinyHeader from '~/components/layout/TinyHeader.vue';

</script>

<template>
    <div>
         <TinyHeader></TinyHeader>
        <main>
            <slot></slot>
        </main>
        <TinyFooter></TinyFooter>
    </div>
</template>