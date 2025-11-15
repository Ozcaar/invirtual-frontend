<template>
    <div class="card bg-(--color-muted-30) border-2 border-neutral shadow-sm 
           transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary group">
        <div class="card-body flex flex-col p-6 space-y-4 text-base">
            <!-- Rating -->
            <div class="flex gap-1">
                <svg v-for="i in rating" :key="i" xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem"
                    viewBox="0 0 24 24">
                    <path fill="#d9a514"
                        d="M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z" />
                </svg>
            </div>

            <!-- Testimonial text -->
            <p class="text-zinc-500 leading-relaxed">"{{ text }}"</p>

            <!-- User info -->
            <div class="flex items-center gap-3 pt-4 border-t border-neutral">
                <div class="w-12 h-12 rounded-full overflow-hidden bg-graddient-to-br from-primary to-accent">
                    <img v-if="image.trim() !== ''" :src="image" :alt="name" class="w-full h-full object-cover" />
                    <div v-else class="skeleton w-12 h-12 shrink-0 rounded-full"></div>
                </div>

                <div>
                    <p class="font-semibold">{{ name }}</p>
                    <p class="text-sm text-muted-foreground">{{ event }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
defineProps({
    rating: {
        type: Number,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
    event: {
        type: String,
        default: '',
    }
});
</script>
