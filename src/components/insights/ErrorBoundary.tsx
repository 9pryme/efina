'use client';

import { useEffect } from 'react';

export function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
      >
        Try again
      </button>
    </div>
  );
} 