/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

/**
 * 在此处声明后，ts会有代码提示
 * env属性的类型只能是 string | boolean | undefined
 */
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_BASE_URL: string;
    readonly VITE_APP_UPLOAD_DIR: string;
    readonly VITE_APP_ADMIN_URL: string;
    readonly VITE_APP_WEB_URL: string;
    readonly VITE_APP_PUB_KEY: string;
    readonly VITE_APP_CLIENT_ID: string;
    readonly VITE_APP_CLIENT_SECRET: string;
    readonly VITE_APP_WEB_PUBLICITY_PREVIEW_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  