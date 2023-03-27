import type { Client } from "@/clients/interfaces/client";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useClientsStore = defineStore("clients", () => {
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const clients = ref<Client[]>([]);

  return {
    // State
    currentPage,
    totalPages,
    clients,
    // Getters

    // Actions
    setClients(newClients: Client[]) {
      clients.value = newClients;
    },
    setPage(page: number) {
      if (currentPage.value === page) return;
      currentPage.value = page;
    }
  };
});
