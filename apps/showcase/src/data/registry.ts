import React from 'react';

export type RegistryEntry = {
  Preview: React.ComponentType;
  sourceCode: string;
};

// REGISTRY is populated by Wave 2/3 plans as component and screen implementations are added.
// This skeleton establishes the type contract so app/[item].tsx can import it immediately.
export const REGISTRY: Record<string, RegistryEntry> = {};
