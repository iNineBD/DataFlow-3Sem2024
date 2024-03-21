# DataFlow-3Sem2024

<br>
<p align="center">
    <a href="#equipe">Equipe</a> |
    <a href="#context">Contextualização</a>  |
    <a href="#requisitos">Requisitos</a>  |
    <a href="#backlog">Product Backlog</a>  |
    <a href="#entregas">Sprints</a>  |
    <a href="#tecnologias">Tecnologias</a> 
</p>

<div align="center"><hr width=70%></div>

<span id="equipe">

## ◻️ Equipe

<div align="left">
  
  | **FUNÇÃO** | **NOME** | **REDES SOCIAIS** |
  | :---: | :--- | :---: |
  | Product Owner | Ana Raquel Machado | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/ana-sasaki-19a2031b8/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Anaraquely) |
  | Scrum  Master | Eduardo Farias | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/eduardofariasp/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/eduardofpaula) |
  | Developer | André Bernardes | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/andre-oliveira2004) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Andre-Bernardes200) | 
  | Developer | Beatriz Akemi | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/beatriz-bonatto-263530156) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/BeatrizBonatto) |  
  | Developer | João Matheus Lamão | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/joaomatheuslamao) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/JoaoMatheusLamao) |  
  | Developer | Lucas Henrique de Oliveira | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-henrique-9a557620b) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/LucasHCOliveira7) |
  | Developer | Naiara Santos | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/naiara-santos-73b83a186) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/NaiaraSantos3) |
</div>

<div align="left"><hr width=70%></div>

<span id="context">

## ◻️ Contextualização

> A empresa  possui um sistema de processamento de dados em cascata chamado pipeline, que consiste em vários estágios. Este sistema consiste em vários estágios que são coordenados automaticamente com base nas características das fontes de dados e nas necessidades dos clientes em termos de algoritmos de IA ou modelos matemáticos. Na metodologia de implementação do sistema, é necessário configurar as fontes de dados envolvidas para que a plataforma funcione corretamente.  No entanto, a configuração manual das fontes de dados é feita manualmente, sendo um ponto crítico que consome muito tempo dos técnicos e cria uma dependência excessiva de especialistas para realizar tal tarefa.
>
> Para superar esse obstáculo, foi proposto a criação de uma interface amigável para a configuração das fontes de dados em alguns estágios, proporcionando maior agilidade na implantação para os clientes da Dom Rock e reduzindo a sua dependência de técnicos especializados.

<div align="left"><hr width=70%></div>

<span id="requisitos">

## ◻️ Requisitos Funcionais
- Realizar cadastro do cliente, solução e usuários autorizados a configurar os dados; 
- Importações de dados csv ou excel e apresentação da estrutura dos dados; 
- Identificar campos como chave de identificação dos dados;
- Aplicar regras de acordo com os clientes, conhecidas como "de/para" ;
- Realizar mapeamento de cruzamento de dados;
- Criar um painel administrativo (dashboard) para oferecer visões quantitativas, como clientes, tipos de fontes de dados e quantidade de campos configurados;
- Desenvolver uma interface que apresente uma visão analítica completa da configuração dos dados. 

<div align="left"><hr width=70%></div>

<span id="backlog">

## ◻️ Product Backlog

<table>
    <tr>
        <th>Rank</th>
        <th>Prioridade</th>
        <th>User Story</th>
        <th>Sprint</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Média</td>
        <td>Como parceiro landing zone, quero poder carregar um csv  que gere uma tabela para vizualização dos metadados apresentados.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Alta</td>
        <td>Como parceiro da landing zone, quero poder confirmar e editar as colunas, suas restrições e tipagens das informações recebidas e exibidas na tela. </td>
        <td>1</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Média</td>
        <td>Como parceiro da bronze, quero poder associar os campos afim de gerar um identificador do registro (chave primária)</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Alta</td>
        <td>Como parceiro da bronze, quero poder associar os campos afim de gerar um identificador do registro (chave primária)</td>
        <td>2</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Alta</td>
        <td>Como Parceiro Silver, quero poder aplicar minhas regras de negócio na aplicação, para personalizar a apresentação dos resultados, a fim de atender melhor as necessidades específicas da minha empresa.</td>
        <td>3</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Baixa</td>
        <td>Como administrador, quero poder adicionar diversos parceiros, sendo responsável por definir qual/quais estágios terão acessos.</td>
        <td>2</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Baixa</td>
        <td>Como administrador, quero poder monitorar os acessos realizados pelos parceiros e as modificações feitas sobre todos os projetos cadastrados.</td>
        <td>3</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Média</td>
        <td>Como administrador, desejo um painel que exiba informações quantitativas configuradas, incluindo dados sobre clientes, tipos de fontes de dados e contagens de campos, para facilitar a análise e gestão do sistema.</td>
        <td>4</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Baixa</td>
        <td>Como administrador, desejo uma interface que me permita gerar um arquivo de configuração no formato YAML por estágio a partir de uma base de dados, para que eu possa utilizar este arquivo como configurador de uma aplicação terceira.</td>
        <td>4</td>
    </tr>
</table>

<div align="left"><hr width=70%></div>

<span id="entregas">

## ◻️ Sprints

| SPRINTS | PERÍODOS | DESCRIÇÃO |
|:-------:|:-----:|:---------:|
| Sprint 1 | 25/03/2024 à 14/04/2024 |  |
| Sprint 2 | 15/04/2024 à 05/05/2024 |  |
| Sprint 3 | 06/05/2024 à 26/05/2024 |  |
| Sprint 4 | 27/05/2024 à 16/06/2024 |  |

<div align="left"><hr width=70%></div>

<span id="tecnologias">

## ◻️ Tecnologias

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![ClickUp](https://img.shields.io/badge/clickup-%237B68EE.svg?&style=for-the-badge&logo=clickup&logoColor=white)

<div align="left"><hr width=70%></div>


Referência para server: https://github.com/iNineBD/DataFlowServer-3Sem2024
