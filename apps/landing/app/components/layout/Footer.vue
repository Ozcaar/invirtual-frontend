<template>
    <footer class="bg-(--color-muted-30) border-t border-neutral">
        <div class="container mx-auto max-w-7xl px-4 py-12">
            <!-- Links -->
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <!-- Brand -->
                <div class="space-y-4">
                    <h3
                        class="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                        InviRtual
                    </h3>
                    <p class="text-sm text-zinc-500 leading-relaxed">
                        Invitaciones digitales que hacen de cada evento una experiencia memorable.
                    </p>
                </div>

                <!-- Product -->
                <div class="space-y-4">
                    <h4 class="font-semibold">Producto</h4>
                    <ul class="space-y-2 text-sm text-zinc-500">
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Plantillas
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Precios
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Ejemplos
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Características
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Company -->
                <div class="space-y-4">
                    <h4 class="font-semibold">Empresa</h4>
                    <ul class="space-y-2 text-sm text-zinc-500">
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Contacto
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Carreras
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Legal -->
                <div class="space-y-4">
                    <h4 class="font-semibold">Legal</h4>
                    <ul class="space-y-2 text-sm text-zinc-500">
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Términos de servicio
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Política de privacidad
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Cookies
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-primary transition-colors">
                                Ayuda
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- Bottom bar -->
            <div class="pt-8 border-t border-neutral flex flex-col md:flex-row justify-between items-center gap-4">
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