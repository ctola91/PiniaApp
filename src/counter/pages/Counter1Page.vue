<script setup lang="ts">
import { useCounterOptionsStore } from "@/store/counter-options";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

const counterOptionsStore = useCounterOptionsStore();
const { count, squareCount } = storeToRefs(counterOptionsStore);
</script>
<template>
  <h1>Pinia Options</h1>
  <h4>Counter: {{ counterOptionsStore.count }}</h4>
  <h4>Square: {{ counterOptionsStore.squareCount }}</h4>
</template>

<style scoped></style>
