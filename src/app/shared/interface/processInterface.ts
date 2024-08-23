export interface Process {
    codigoIdentificacao: number;
    creditosNecessariosRecurso1 : number,
    creditosPorSolicitacaoRecurso1 : number,
    creditosNecessariosRecurso2 : number,
    creditosPorSolicitacaoRecurso2 : number,
    creditosNecessariosRecurso3 : number,
    creditosPorSolicitacaoRecurso3 : number,
    creditosNecessariosRecurso4 : number,
    creditosPorSolicitacaoRecurso4 : number,
    status: 'ativo' | 'inativo';
  }