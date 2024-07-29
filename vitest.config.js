import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            provider: 'istanbul',
            include: [
                'src/**',
                'test/**',
                'config/**',
            ],
            reporter: ['text', 'html'],
            enabled: true,
            thresholds: {
                lines: 100,
                statements: 100,
                branches: 100,
                functions: 100,
            },
        },
    },
});
