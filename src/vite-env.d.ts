/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
