<h1>Projeto de Cadastro de Unidades Solares utilizando Angular.</h1>
<h2>Projeto proposto pelo curso DEVinHouse - Turma NDD Tech - 2022</h2>

<h3>:hammer: Projeto em desenvolvimento :hammer: </h3>


<p>:white_check_mark: Uma Tela de Login contendo um formulário com campos de email e senha. Os campos
de email e senha são obrigatórios (Utilize o ngModel para vincular os inputs do formulário).
Ao clicar no botão de Entrar deve passar pela validação.</p>

<p>:star: Adicional de responsividade. </p>

<h3>Seguir layout conforme o mockup disponibilizado: :arrow_down: https://www.figma.com/file/Bh4fJZohrlLMoKQU6lbe9p/Projeto-DevInHouse---NDD?node-id=0%3A1&t=tyunHBjZHVmJkEYv-0</h3>

https://user-images.githubusercontent.com/79873793/209144648-043c8400-d5f7-4de2-9896-511c9621148c.mp4

<h2>🛠️ Tecnologias Usadas</h2>  
<ul>
   <li>HTML</li>
   <li>SASS</li>
   <li>BootStrap</li>
   <li>Angular</li>
   <li>Typescript</li>
</ul>

<h2>:woman_technologist:Autora</h2>
<h3>Camila Cassimiro</h3>
  

<h2>Instruções de como rodar o projeto:</h2>

<ul>
    <li>Abra um terminal onde deseja criar a pasta</li>
</ul>

```bash
# Clone este repositório
$ git clone https://github.com/camilacassimiro90/Solar-Energy.git
```

### Você precisará:
<ul>
    <li>Node JS (obrigatório)</li>
    <li>Visual Studio Code (recomendado)</li>
    <li>Git bash </li>
    <li>Angular CLI</li>
</ul>


#Abrir o  terminal e  executar o comando:
$ ng serve -o


<h3>:coffee: :computer: O que falta implementar:</h3>

<ul>
<li>Ao clicar no botão de Entrar e passar pela validação, redirecionar para tela de Dashboard. Seguir layout conforme o mockup disponibilizado.</li>

<li>	Um menu lateral, contendo as opções Dashboard, Unidade Consumidora e Cadastro de energia gerada. O menu deve ser configurado usando Angular Router. Seguir layout conforme o mockup disponibilizado.</li>

<li>Uma tela de Dashboard contendo 4 cards: Total de unidades (Exibir o total de unidades cadastradas no json-server) , unidades ativas (Exibir total de unidades com status ativo(true) , unidades inativas (Exibir total de unidades com status inativo(false)  e média de energia (Soma de todos os total / total de unidades).</li>

<li>A tela  de Dashboard deve conter um gráfico de linha exibindo os meses do ano. O gráfico deverá exibir o total de energia gerado por mês, sendo assim deve-se realizar a soma por mês do total gerado de todas as unidades e exibir no gráfico o total de cada mẽs, o eixo x deve-se exibir os últimos 12 meses e no eixo y o total por mês  Usar a lib https://github.com/valor-software/ng2-charts. Seguir layout conforme o mockup disponibilizado. Obs: Se caso não conseguir implementar o gráfico a tempo, pode substituir por uma listagem de itens referente a cada contador do dashboard.</li>

<li>Uma tela de Listagem de unidades (consumir rota /unidades do json-server) contendo uma tabela com as colunas ID, apelido, Local, Marca e modelo, além dos botões Editar e Remover. Além disso, a tela deve conter um botão Nova unidade (Ao clicar, enviar usuário para tela de cadastro de unidade). Seguir layout conforme o mockup disponibilizado.</li>

<li>Uma tela de cadastro de unidade, contendo um formulário com os campos apelido, Local, Marca, modelo e status (Checkbox) . Ao clicar no botão salvar, chamar evento de clique (click) e cadastrar unidade via POST na rota /unidades do json-server. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.</li>

<li>Implementar botão de remover unidade na tela de Listagem de unidades. Ao clicar no botão remover, chamar evento de clique (click) e remover unidade clicada via DELETE na rota /unidades/:id do json-server.</li>

<li>Implementar botão de editar unidade, ao clicar no botão de editar, enviar usuário para tela de edição de unidade. Ao renderizar a tela, trazer os campos preenchidos com as informações da unidade clicada, ao clicar em salvar, salvar os valores via PUT na rota /unidades/:id do json-server. Seguir layout conforme o mockup disponibilizado.</li>

<li>Implementar tela de Lançamento de geração mensal contendo um formulário com um <Select/> (listando como opção as unidades já cadastradas consumindo do json-serve e listando com o ngFor), um campo de data e um campo de total kw gerado (aceita somente números). Ao clicar em salvar, chamar evento de clique (click) e cadastre valores via POST</li>
</ul>


# SolarEnergy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
