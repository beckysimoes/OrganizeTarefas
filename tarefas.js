// Função para adicionar uma tarefa
function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
    console.log('Tarefa "${tarefa}" adicionada com sucesso!');
}

// Função para listar as tarefas
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Não há tarefas para mostrar.");
    } else {
        console.log("Lista de Tarefas:");
        tarefas.forEach((tarefa, index) => {
            console.log('${index + 1}. ${tarefa}');
        });
    }
}
