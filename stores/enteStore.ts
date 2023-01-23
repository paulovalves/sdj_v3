import { EnteModel } from '../src/domain/entities/ente-model'; 


export const useEnteStore = defineStore({
    id: 'entes',
    state: () => ({
        entes: null as EnteModel[] | null,
    }),
    getters: {
        fetchEnte: (state: any) => state.entes,
    },
    actions: {
        fetchEnte() {
            this.entes = [
                { id: '1', nome: 'Ente 1', cnpj: '000000000' },
                { id: '2', nome: 'Ente 2', cnpj: '111111111' },
                { id: '3', nome: 'Ente 3', cnpj: '222222222' },
            ];
        },
    },
});

