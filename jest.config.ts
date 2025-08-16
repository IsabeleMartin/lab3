import type { Config } from '@jest/types';

const config: Config = {
  preset: 'ts-jest',  // Usa o preset do ts-jest para compilar TypeScript
  testEnvironment: 'node',  // Define o ambiente de teste para Node.js
  transform: {
    '^.+\\.ts$': 'ts-jest',  // Transforma arquivos .ts usando ts-jest
  },
  moduleFileExtensions: ['ts', 'js'],  // Extensões de arquivo que o Jest deve processar
  globals: {
    'ts-jest': {
      isolatedModules: true,  // Melhora o desempenho ao compilar cada arquivo separadamente
    },
  },
};

export default config;
