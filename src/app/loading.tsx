import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <LoadingSpinner />
      </div>
    </div>
  );
}