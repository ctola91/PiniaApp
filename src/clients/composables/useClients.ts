import { useQuery } from "@tanstack/vue-query";
import clientsApi from "@/api/clients-api";
import type { Client } from "@/clients/interfaces/client";
import { useClientsStore } from "@/store/clients";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";

const getClients = async (page: number): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { currentPage, clients, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery(["clients?page=", currentPage], () =>
    getClients(currentPage.value)
  );

  watch(data, (clients) => {
    if (clients) store.setClients(clients);
  });

  return {
    clients,
    currentPage,
    isLoading,
    totalPages,

    // Getters
    totalPageNumbers: computed(() => [...new Array(totalPages.value)].map((v, i) => i + 1)),
    // methods
    // getPage(page: number) {
    //   store.setPage(page);
    // }
    getPage: store.setPage
  };
};

export default useClients;
