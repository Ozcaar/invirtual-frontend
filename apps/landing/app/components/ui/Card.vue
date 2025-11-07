<template>
    <div
        :class="['card border-2 border-neutral shadow-sm', 
            bgColor,
            hoverable ? 'transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:-translate-y-2 hover:border-primary group' : '']">
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>


<script lang="ts" setup>
defineProps({
    hoverable: {
        type: Boolean,
        default: false,
    },
    bgColor: {
        type: String,
        default: 'bg-[var(--color-muted-30)]',
    }
});
</script>
