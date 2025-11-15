<template>
    <section class="py-24 px-4 bg-linear-to-br relative overflow-hidden">

        <!-- Animated background -->
        <div class="absolute inset-0">
            <div class="absolute rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div class="container mx-auto max-w-4xl relative z-10 text-center space-y-8">


            <div class="flex justify-center items-center flex-col max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                <!-- Badge -->
                <div
                    class="flex justify-center items-center px-4 max-w-xs py-3 mb-6 border-(--color-primary-30) border rounded-full bg-(--color-primary-10)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <g fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path
                                d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4" />
                            <circle cx="4" cy="20" r="2" />
                        </g>
                    </svg>
                    <span class="ml-3 text-primary text-sm font-semibold">Comienza hoy mismo</span>
                </div>
            </div>

            <h2 class="text-4xl md:text-6xl font-bold text-balance">
                Convierte tu evento en una
                <span class="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    experiencia inolvidable
                </span>
            </h2>

            <p class="text-xl text-zinc-500 max-w-2xl mx-auto text-pretty">
                Únete a miles de personas que ya están creando invitaciones digitales espectaculares con InviRtual
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button
                    class="btn btn-primary group font-medium text-base text-primary-content md:text-lg bg-primary btn-xl w-[250px] mx-4 p-0 transition-colors duration-300 ease-in-out hover:bg-(--color-primary-80)">
                    Crear mi invitación
                    <Icon name="formkit:arrowright" size="15"
                        class="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                </button>
                <button
                    class="btn btn-neutral font-medium bg-(--color-muted-30) border-2 border-neutral group md:text-lg btn-xl w-[225px] mx-4 p-0 text-base transition-colors duration-300 ease-in-out hover:bg-(--color-neutral-60)">
                    Hablar con alguien
                </button>
            </div>

            <p class="text-sm text-zinc-500 pt-4">
                Prueba sin tarjeta de crédito requerida • Cancela cuando quieras • Soporte 24/7
            </p>
        </div>
    </section>
</template>