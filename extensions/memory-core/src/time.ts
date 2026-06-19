//import { timestampMsToIsoString } from "openclaw/plugin-sdk/number-runtime";

function timestampMsToIsoString(ms: unknown): string | undefined {
  if (typeof ms !== "number") return undefined;
  try {
    return new Date(ms).toISOString();
  } catch {
    return undefined;
  }
}

export function resolveMemoryCoreNowMs(nowMs: unknown): number {
  const iso = timestampMsToIsoString(nowMs);
  return iso === undefined ? Date.now() : (nowMs as number);
}

export function resolveMemoryCoreTimestamp(nowMs: unknown): string {
  const timestampMs = resolveMemoryCoreNowMs(nowMs);
  const iso = timestampMsToIsoString(timestampMs);
  return iso ?? new Date().toISOString();
}
