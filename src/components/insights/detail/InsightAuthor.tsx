import Image from 'next/image';

interface InsightAuthorProps {
  author: {
    name: string;
    position: string;
    avatar: string;
  };
}

export const InsightAuthor = ({ author }: InsightAuthorProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-t border-gray-200 pt-6 sm:pt-8 pb-4 text-center sm:text-left">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-gray-100 shadow-sm">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 64px, 80px"
        />
      </div>
      <div className="space-y-1">
        <div className="font-display text-xl sm:text-2xl font-medium text-gray-900">{author.name}</div>
        <div className="text-sm sm:text-base text-gray-600 font-medium">{author.position}</div>
      </div>
    </div>
  );
};