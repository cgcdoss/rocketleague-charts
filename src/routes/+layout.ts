import { carregar } from "$lib/utils/google-planilha";
import { resultBackup } from "$lib/utils/json-backup";
import type { LayoutLoad } from "./$types";

export const ssr = false;
export const prerender = true;
export const trailingSlash = 'always';

export const load = (async ({ fetch }) => {
  let result: PlayerStat[];

  try {
    result = await carregar(fetch);
  } catch (error) {
    result = resultBackup;
  }
  return { result };
}) satisfies LayoutLoad;
