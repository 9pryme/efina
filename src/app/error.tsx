'use client';

import { useEffect } from 'react';
import { Button } from '@/src/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-display text-gray-900 mb-4">Something went wrong!</h2>
        <Button
          onClick={reset}
          variant="primary"
          className="rounded-full"
        >
          Try again
        </Button>
      </div>
    </div>
  );
} 