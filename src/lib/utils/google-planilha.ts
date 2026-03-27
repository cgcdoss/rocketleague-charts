import { PUBLIC_URL_PLANILHA } from "$env/static/public";

export async function carregarPlanilha(fetch: typeof window.fetch): Promise<PlayerStat[]> {
  const url = PUBLIC_URL_PLANILHA;

  const res = await fetch(url);
  const text = await res.text();

  const json = JSON.parse(text.substring(47).slice(0, -2));

  const headers = json.table.cols.map((c: any) => c.label);

  const data: PlayerStat[] = json.table.rows.map((row: any) => {
    const obj: any = {};

    row.c.forEach((cell: any, i: number) => {
      const key = headers[i];
      let value = cell?.v;

      obj[key] = value;
    });

    // Ajustes específicos (importante!)
    obj["Início do jogo"] = parseGoogleDate(row.c[headers.indexOf("Início do jogo")]?.v);

    return obj as PlayerStat;
  });

  return data;
}

function parseGoogleDate(value: any): Date | null {
  if (!value) return null;

  if (typeof value === "string" && value.startsWith("Date(")) {
    const parts = value
      .replace("Date(", "")
      .replace(")", "")
      .split(",")
      .map(Number);

    return new Date(
      parts[0],
      parts[1],
      parts[2],
      parts[3] || 0,
      parts[4] || 0,
      parts[5] || 0
    );
  }

  return new Date(value);
}
