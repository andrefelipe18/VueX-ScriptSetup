# VueJS - Projeto de estudo do VueX e Typescript

## Project setup
```
npm install
```

### Compila e recarrega para desenvolvimento, criando um servidor local
```
npm run serve

json-server --watch db.jso
```

### Compila e minifica para produção
```
npm run build
```

### Estrutura do projeto

Dentro da pasta ./src possui toda a estrutura do projeto, _todo diretório possui um arquivo index.ts que é o arquivo de exportação do diretório, facilitando a importação dos componentes._

- App.vue: Componente principal da aplicação, responsável por carregar os demais componentes, ele contem um router-view que é responsável por renderizar os componentes Site, Login e Home

- scaffold.vue: Componente esqueleto para otimizar a criaçao de novos componentes

- ./components: Pasta com os componentes da aplicação

- ./router: Pasta com os arquivos de configuração do VueRouter

- ./store: Pasta com os arquivos de configuração do VueX(Vuex é um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js. Ele serve como um armazenamento centralizado para todos os componentes em um aplicativo, com regras que garantem que o estado só possa ser mutado de maneira previsível.)

#### Arquivos Individuais (./src)

- App.vue: Componente principal da aplicação, responsável por carregar os demais componentes, ele contem um router-view que é responsável por renderizar os componentes Site, Login e Home

- main.ts: Arquivo principal da aplicação, responsável por carregar fazer a instanciação do Vue a configuração do VueRouter e carregar o componente App.vue

- scaffold.vue: Componente esqueleto para otimizar a criaçao de novos componentes

- shims-vue.d.ts: Arquivo de configuração do TypeScript

##### Diretório ./components/

- **./components/ConfiguracaoEquipe:** Componente que exibe a equipe e monta, possui uma propriedade computada para alterar a foto da ambulancia de acordo com o tipo de equipe e um action para montar a equipe

- **./components/Equipamentos:** Componente que exibe os equipamentos, possui um router-view passando o tipo do equipamento como prop para o ListaItens.vue

- **./components/Equipes:** Componente que exibe as equipes, possui o ListaItens.vue passando a equipe como prop.

- **./components/Index:** Componente pai da aplicação, ao ser montado dispara uma action para chamar a API e carregar os dados de profissionais e equipamentos

- **./components/Item:** Componente que exibe os dados de um profissional, equipamento ou equipe, esses dados sao passados como prop, tambem adiciona um item a equipe através de uma mutation

- **./components/ListaItens:** Componente pai do Item, recebe o tipo de dado como prop(profissional, equipamento ou equipe) e envia para o Item.

- **./components/Profissionais:** Componente que exibe os profissionais, possui um router-view passando o tipo do profissionais como prop para o ListaItens.vue,
tambem possui propriedades computadas para pegar os getters de total de profissionais