import ThinkingIcon from '@/icons/ThinkingIcon';

export default function Loading() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-52 w-52 animate-spin rounded-full border-b-4 border-t-4 border-purple-500"></div>
      <ThinkingIcon className="h-48 w-48 rounded-full" />
    </div>
  );
}
