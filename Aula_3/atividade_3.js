const tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios",
    "Ler documentação",
    "Enviar atividade",
    "Revisar conteúdo"
];

function removerTarefa(tituloTarefa) {
  if (tarefas.includes(tituloTarefa)) { // Verifica se tituloTarefa existe na lista
    let indexTarefa = tarefas.indexOf(tituloTarefa); // Obtém o índice do tituloTarefa
    tarefas.splice(indexTarefa,1); // Remove tituloTarefa do array
    console.log('Tarefa removida com sucesso!')
  } else {
    console.log('Tarefa não encontrada!');
  }
  console.log('Lista de tarefas atualizadas:', tarefas);
}

removerTarefa('Ler documentação');
removerTarefa('Tarefa Não Existente');