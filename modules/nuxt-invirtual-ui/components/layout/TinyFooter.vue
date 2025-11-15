<template>
  <footer class="bg-(--color-muted-30) border-t border-neutral">
    <div class="container mx-auto max-w-7xl px-4 py-6">
      <!-- Bottom bar -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-zinc-500">© 2025 InviRtual. Todos los derechos reservados.</p>

        <!-- Social links -->
        <div class="flex gap-4">
          <a href="#"
            class="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
            <Icon name="lucide:instagram" size="20" class="text-zinc-500" />
          </a>
          <a href="#"
            class="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
            <Icon name="lucide:youtube" size="20" class="text-zinc-500" />
          </a>

          <a href="#"
            class="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
            <Icon name="lucide:facebook" size="20" class="text-zinc-500" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>