import { carregarPlanilha } from "$lib/utils/google-planilha";
import { resultBackup } from "$lib/utils/json-backup";
import type { LayoutLoad } from "./$types";

export const ssr = false;
export const prerender = true;
export const trailingSlash = 'always';

export const load = (async ({ fetch }) => {
  let result: PlayerStat[];

  try {
    result = await carregarPlanilha(fetch);
  } catch (error) {
    console.log("Erro ao carregar dados da planilha, usando backup:", error);
    result = resultBackup;
  }
  return { result };
}) satisfies LayoutLoad;
