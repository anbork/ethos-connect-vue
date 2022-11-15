import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';
import css from 'rollup-plugin-css-only'

export default async function config(args) {
    return {
        input: 'src/index.ts',
        output: {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            css(),
            vue(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: true,
                    },
                    include: null,
                },
            }),
            clear({
                targets: ['./dist'],
            }),
        ],
    };
}