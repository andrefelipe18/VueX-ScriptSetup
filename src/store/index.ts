import { createStore } from "vuex";

interface socorrista {
  nome: string;
  turno: string;
}

export default createStore({
  state: { //State é o estado global da aplicação(onde ficam as variáveis globais)
    titulo: "Sistema de Gerenciamento de Equipes",
    equipe: {
      enfermeiro: "",
      socorrista: "",
      medico: "",
      veiculo: "",
      telefone: "",
      kitDeReanimacao: "",
    },
    enfermeiros: [],
    socorristas: [],
    medicos: [],
    equipamentos: {
      carros: [],
      telefones: [],
      kitsDeReanimacao: [],
    },
    equipeMontada: [] as any,
  },
  getters: {
    //Getters sao propriedades computadas do state que podem ser usadas em qualquer componente
    totalEnfermeiros(state) {
      return state.enfermeiros.length;
    },
    socorristaPorTurno(state) {
      return (turno: string) => {
        return state.socorristas.filter((socorrista: socorrista) => {
          return socorrista.turno == turno;
        });
      };
    },
    totalSocorristas(state) {
      return state.socorristas.length;
    },
    totalSocorristaPorTurno(state, getters) {
      //Utiliza o getter socorristaPorTurno para retornar o total de socorristas por turno
      return (turno: string) => {
        return getters.socorristaPorTurno(turno).length;
      };
    },
  },
  mutations: {
    //Mutations são as funções que alteram os valores das variáveis globais
    setItemEquipe: (state, payload) => {
      let tipo = payload.tipo;
      let item = payload.item;

      if (tipo == "enfermeiros") {
        state.equipe.enfermeiro = item.nome;
      }
      if (tipo == "socorristas") {
        state.equipe.socorrista = item.nome;
      }
      if (tipo == "medicos") {
        state.equipe.medico = item.nome;
      }
      if (tipo == "carros") {
        state.equipe.veiculo = item.placa;
      }
      if (tipo == "telefones") {
        state.equipe.telefone = item.telefone;
      }
      if (tipo == "kit-de-reanimacao") {
        state.equipe.kitDeReanimacao = item.kit;
      }
    },
    setEnfermeiros: (state, payload) => {
      state.enfermeiros = payload;
    },
    setSocorristas: (state, payload) => {
      state.socorristas = payload;
    },
    setMedicos: (state, payload) => {
      state.medicos = payload;
    },
    setCarros: (state, payload) => {
      state.equipamentos.carros = payload;
    },
    setTelefones: (state, payload) => {
      state.equipamentos.telefones = payload;
    },
    setKitsDeReanimacao: (state, payload) => {
      state.equipamentos.kitsDeReanimacao = payload;
    },
    setEquipeMontada: (state, payload) => {
      //Adiciona a equipe montada ao array de equipes montadas
      state.equipeMontada.push(payload);
    }
  },
  actions: {
    //Actions são as funções que chamam as mutations
    fetchEquipamentos(context) {
      fetch("http://localhost:3000/equipamentos")
        .then((res) => res.json())
        .then((res) => {
          context.commit("setCarros", res.carros);
          context.commit("setTelefones", res.telefones);
          context.commit("setKitsDeReanimacao", res.kitsDeReanimacao);
        });
    },
    fetchProfissionais(context) {
      fetch("http://localhost:3000/enfermeiros")
        .then((res) => res.json())
        .then((res) => {
          context.commit("setEnfermeiros", res);
        })
        .catch((err) => console.log(err));

      fetch("http://localhost:3000/socorristas")
        .then((res) => res.json())
        .then((res) => {
          context.commit("setSocorristas", res);
        })
        .catch((err) => console.log(err));

      fetch("http://localhost:3000/medicos")
        .then((res) => res.json())
        .then((res) => {
          context.commit("setMedicos", res);
        })
        .catch((err) => console.log(err));
    },
    montarEquipe(context, payload) {
      let equipe = {
        enfermeiro: context.state.equipe.enfermeiro,
        socorrista: context.state.equipe.socorrista,
        medico: context.state.equipe.medico,
        veiculo: context.state.equipe.veiculo,
        telefone: context.state.equipe.telefone,
        kitDeReanimacao: context.state.equipe.kitDeReanimacao,
      };

      let equipeMontada: any = context.state.equipeMontada;
      equipeMontada.push(equipe);
      context.commit("setEquipeMontada", equipeMontada);
    }
  },
  modules: {
   
  },
});
