<script setup lang="ts">
import { useCounterSetupStore } from "@/store/counter-setup";

const counterStore = useCounterSetupStore();
</script>
<template>
  <h1>El valor es: {{ counterStore.count }}</h1>
  <h4>Ultimo cambio {{ counterStore.lastChanged }}</h4>
</template>

<style scoped></style>
