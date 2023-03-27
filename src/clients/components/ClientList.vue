<script setup lang="ts">
import useClients from "@/clients/composables/useClients";

const { isLoading, clients } = useClients();
</script>
<template>
  <ul>
    <li><RouterLink :to="{ name: 'client-id', params: { id: 1 } }">Client Name</RouterLink></li>
  </ul>
</template>

<style scoped></style>
