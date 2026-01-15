🪙 Conversor de Moedas Dinâmico - PedrinSX777
Este é um conversor de moedas moderno e responsivo que utiliza taxas de câmbio em tempo real consumidas da AwesomeAPI. O projeto foi desenvolvido com foco em precisão lógica e uma experiência de usuário (UX) confortável através de uma interface Dark Mode.

🚀 Funcionalidades
Câmbio em Tempo Real: Os valores são buscados diretamente da API de economia (USD, EUR, BTC).

Triangulação de Moedas: O sistema consegue converter moedas estrangeiras entre si (ex: USD para EUR) usando o Real (BRL) como ponte matemática.

Interface Dark Mode: Estilização moderna com contraste otimizado para desenvolvedores.

Atualização Instantânea: O cálculo é disparado automaticamente ao digitar o valor ou alterar qualquer moeda nos seletores (change e input events).

Segurança de Input: O campo de resultado é configurado como readonly, impedindo edições acidentais pelo usuário.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura de containers e seletores de moedas.

CSS3: Design Dark Mode personalizado, responsividade e efeitos de foco (focus).

JavaScript (ES6+):

Fetch API: Para busca assíncrona de dados externos.

Async/Await: Para gerenciamento de promessas de rede.

DOM Manipulation: Para atualização dinâmica dos campos de texto.

🧠 A Lógica de Triangulação
Um dos maiores desafios técnicos superados neste projeto foi a conversão de moedas sem paridade direta no par da API. Para isso, implementamos a lógica de Ponte por Moeda Base (BRL):

Conversão para Real: Multiplica-se o valor de entrada pela cotação da moeda selecionada em relação ao Real.

Conversão para Destino: Divide-se esse montante em Reais pela cotação da moeda de destino.

JavaScript

// Exemplo da lógica implementada no main.js
const resultado = (valueNumber * valorSelectedBRL) / valorConversorBRL;
outputType.value = resultado.toFixed(2);
📂 Estrutura de Arquivos
index.html: Estrutura principal do aplicativo.

assets/css/styles.css: Estilização Dark Mode e layout flexbox.

assets/js/htmlFunction.js: Mapeamento dos elementos do DOM.

assets/js/main.js: Motor lógico, consumo da API e eventos.

📦 Como Instalar e Rodar
Clone o repositório em sua máquina.

Certifique-se de que os caminhos das pastas assets/css/ e assets/js/ estão corretos conforme a estrutura do seu projeto.

Abra o arquivo index.html em qualquer navegador moderno.

Desenvolvido com ☕ e código por PedrinSX777.