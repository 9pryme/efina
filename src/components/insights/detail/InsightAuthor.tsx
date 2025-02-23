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
    <div className="flex items-center gap-6 border-t border-gray-200 pt-8 pb-4">
      <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-100 shadow-sm">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="space-y-1">
        <div className="font-display text-2xl font-medium text-gray-900">{author.name}</div>
        <div className="text-base text-gray-600 font-medium">{author.position}</div>
      </div>
    </div>
  );
};