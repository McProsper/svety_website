/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly MEDIUM_USERNAME?: string;
  readonly PUBLIC_CAL_EMBED_URL?: string;
  readonly PUBLIC_CAL_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
