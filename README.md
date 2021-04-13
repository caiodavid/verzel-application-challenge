Teste Prático Frontend Jr
A proposta desse teste é validar os conhecimentos técnicos em desenvolvimento frontend, lógica de programação e
entendimento da demanda do candidato.
Proposta de solução:
Desenvolver um sistema para cadastro de tarefas.

*Tecnologias obrigatórias:*

	- React
	- Redux
	- Redux persist 
	
*Requisitos:*

	- Home page igual a página do github
	- navbar com botão de entrar ou nome do usuário se estiver logado;
	- form de cadastro por cima do banner;
	- form de cadastro deve possuir os campos (nome, email, data de nascimento, cpf, cep, endereço, numero, senha);
	- os campos nome, email, data de nascimento e senha são obrigatórios os outros são opcionais;
	- apenas usuários maiores de 12 anos podem se cadastrar;
	- o campo de CPF deve possuir mascara e validação de CPF;
	- o CEP deve ser validado e possuir autocomplete de endereço;
	
*Após logar no sistema:*

	- deve exibir uma listagem de tarefas cadastradas;
	- deve possuir um botão para cadastro de novas tarefas;
	- cada registro da listagem deve possuir as ações (editar, excluir, visualizar, concluir)
	- a ação de concluir deve ser apenas para tarefas em aberto (não finalizadas), deve solicitar confirmação para concluir uma
	tarefa;
	- deve solicitar confirmação do usuário para excluir uma tarefa;
	- o cadastro de tarefa deve possuir os campos (nome, data de entrega, data de conclusão);
	- os campos nome e data de entrega são obrigatórios os outros são opcionais;
	- cada usuário logado deve visualizar apenas as suas tarefas;
	- Todos os dados devem ser persistidos no storage do browser;
	- Escrever no readme os detalhes para setup da aplicação;
	- Prazo para entrega 5 dias corridos a partir da data de recebimento do mesmo;
	
	Diferenciais:
	- Fazer testes unitários dos componentes;