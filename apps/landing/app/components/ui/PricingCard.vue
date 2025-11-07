<template>
    <div :class="['card bg-[var(--color-muted-30)] border-2 border-neutral transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-2xl shadow hover:-translate-y-2 group',
        popular ? 'border-primary shadow-xl scale-105' : ''
    ]">
        <!-- Popular label -->
        <div v-if="popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg">
            Más popular
        </div>

        <!-- Card Head -->
        <div class="pb-3 pt-8">
            <div class="card-title flex flex-col mb-2 text-center">
                <div>
                    <span class="text-2xl leading-relaxed font-bold">{{ name }}</span>
                </div>
                <div class="min-h-14 flex items-center">
                    <span class="text-base leading-relaxed font-medium text-zinc-500">{{ description }}</span>
                </div>
                <div>
                    <span class="text-5xl leading-relaxed font-bold">{{ price }}</span>
                    <span class="font-normal text-zinc-500 ml-1">{{ period }}</span>
                </div>
            </div>
        </div>

        <!-- Card Body -->
        <div class="card-body flex flex-col text-center space-y-4">
            <ul class="space-y-3">
                <li v-for="feature in features" class="flex items-start gap-3 text-left">
                    <!-- <Check class="w-5 h-5 text-primary shrink-0 mt-0.5" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#d9a514"
                            d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z" />
                    </svg>
                    <span class="text-sm leading-relaxed">{{ feature }}</span>
                </li>
            </ul>

            <div class="">
                <button
                    :class="['btn btn-md w-full group text-primary-content transition-colors duration-300 ease-in-out', popular ? 'btn-primary bg-primary hover:bg-[var(--color-primary-80)]' : 'btn-neutral bg-white border-neutral border-[1.5px] hover:bg-[var(--color-neutral-60)]']">
                    {{ btnText }}
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
defineProps({
    name: {
        type: String,
        default: '',
    },
    price: {
        type: String,
        default: '',
    },
    period: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    features: {
        type: Array,
        default: '',
    },
    cta: {
        type: String,
        default: '',
    },
    popular: {
        type: Boolean,
        default: '',
    },
    btnText: {
        type: String,
        default: '',
    }
});
</script>
