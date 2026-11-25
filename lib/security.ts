const HAS_CONTROL_OR_BACKSLASH = /[\u0000-\u001f\u007f\\]/;
const HAS_AUTHORITY_CREDENTIALS = /^https?:\/\/[^/?#]*@/i;

export function isValidHttpUrl(value?: string): value is string {
  if (!value || typeof value !== 'string') return false;
  const trimmed = value.trim();
  if (!trimmed || HAS_CONTROL_OR_BACKSLASH.test(trimmed)) return false;
  if (HAS_AUTHORITY_CREDENTIALS.test(trimmed)) return false;

  try {
    const parsed = new URL(trimmed);
    if (parsed.username || parsed.password) return false;
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export function isValidImageSrc(value?: string): value is string {
  if (!value || typeof value !== 'string') return false;
  const trimmed = value.trim();
  if (!trimmed || HAS_CONTROL_OR_BACKSLASH.test(trimmed)) return false;

  if (trimmed.startsWith('/')) {
    return !trimmed.startsWith('//');
  }

  if (HAS_AUTHORITY_CREDENTIALS.test(trimmed)) return false;

  try {
    const parsed = new URL(trimmed);
    if (parsed.username || parsed.password) return false;
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
