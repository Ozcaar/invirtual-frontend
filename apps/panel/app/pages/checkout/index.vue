<template>
  <Suspense>
    <template #default>
      <CheckoutConfirmation />
    </template>

    <template #fallback>
      <CheckoutLoading />
    </template>
  </Suspense>
</template>

<script lang="ts" setup>

</script>

<style></style>