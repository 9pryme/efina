import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <LoadingSpinner />
    </div>
  );
} 