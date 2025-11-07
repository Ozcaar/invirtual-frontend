<template>
  <!-- <div class="w-full flex items-center justify-center"> -->
  <div class="w-full min-h-[100vh] lg:min-h-[90vh] flex flex-col items-center justify-center text-center px-4">


    <div class="w-full max-w-5xl flex justify-end gap-1 px-1 py-3">

      <!-- External link -->
      <div class="group p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 
         transition-colors duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="stroke-zinc-500 dark:stroke-zinc-400
           group-hover:stroke-[#222222] dark:group-hover:stroke-white
           transition-colors duration-300">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      </div>

      <!-- Mobile device -->
      <div class="group p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 
         transition-colors duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="stroke-zinc-500 dark:stroke-zinc-400
           group-hover:stroke-[#222222] dark:group-hover:stroke-white
           transition-colors duration-300">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </g>
        </svg>
      </div>

      <!-- Laptop device -->
      <div class="group p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 
         transition-colors duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="stroke-zinc-500 dark:stroke-zinc-400
           group-hover:stroke-[#222222] dark:group-hover:stroke-white
           transition-colors duration-300">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2zm2.054 10.987H3.946" />
        </svg>
      </div>
    </div>

    <!-- Mockup -->
    <div class="mockup-browser border border-base-300 w-full max-w-5xl bg-gray-100 drop-shadow-xl">
      <div class="mockup-browser-toolbar">
        <div class="input bg-white">https://invirtual.com/xv-ana</div>
      </div>
      <div class="grid place-content-center border-t border-base-300 min-h-[70vh] lg:min-h-[60vh] bg-white">Hello!</div>
    </div>

  </div>
  <!-- </div> -->
</template>