import { firstValueFrom } from 'rxjs';
import { describe, expect, it } from 'vitest';
import { PROJETOS_ESPECIFICACOES } from '../projetos-especificacao/data/PROJETOS_DADOS';
import { TipoProjeto } from '../projetos-especificacao/class/projeto_especificacao';
import { ProjetosService } from './projetos.service';

describe('ProjetosService', () => {
  const service = new ProjetosService();

  it('returns all project cards in the catalog', async () => {
    const projetos = await firstValueFrom(service.getAllProjetoCards());

    expect(projetos).toEqual(PROJETOS_ESPECIFICACOES);
    expect(projetos).not.toBe(PROJETOS_ESPECIFICACOES);
  });

  it('returns personal projects only', async () => {
    const projetos = await firstValueFrom(service.getProjetoPessoaisCards());

    expect(projetos.length).toBeGreaterThan(0);
    expect(projetos.every(projeto => projeto.tipo === TipoProjeto.PESSOAIS)).toBe(true);
  });

  it('returns public test projects only', async () => {
    const projetos = await firstValueFrom(service.getProjetoTestesPublicosCards());

    expect(projetos.length).toBeGreaterThan(0);
    expect(projetos.every(projeto => projeto.tipo === TipoProjeto.TESTE_PUBLICOS)).toBe(true);
  });

  it('finds a project by numeric id or project object', async () => {
    const expected = PROJETOS_ESPECIFICACOES[0];

    await expect(firstValueFrom(service.getProjetoEspecificaoById(expected.id))).resolves.toEqual(expected);
    await expect(firstValueFrom(service.getProjetoEspecificaoById(expected))).resolves.toEqual(expected);
  });

  it('returns undefined when the requested id does not exist', async () => {
    await expect(firstValueFrom(service.getProjetoEspecificaoById(-1))).resolves.toBeUndefined();
  });

  it('returns the project specification catalog', async () => {
    await expect(firstValueFrom(service.getAllProjetosEspecificacoes())).resolves.toBe(PROJETOS_ESPECIFICACOES);
  });
});
