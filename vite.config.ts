import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';
import tsconfigPaths    from 'vite-tsconfig-paths';
import eslintPlugin     from 'vite-plugin-eslint';


// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    server:  {
        port: 3000
    },
    plugins: [
        react(),
        tsconfigPaths(),
        eslintPlugin()
    ]
});
