import React from 'react';

export function parseBrToJsx(text: string): Array<string | React.ReactElement> {
  const parts = text.split('\n');
  return parts.flatMap((part, idx) =>
    idx < parts.length - 1 ? [part, React.createElement('br', { key: idx })] : [part]
  );
} 