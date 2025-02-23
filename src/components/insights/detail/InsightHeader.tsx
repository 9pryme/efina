'use client';

import { PageHeader } from '@/src/components/shared/PageHeader';

interface InsightHeaderProps {
  category: string;
  title: string;
  date: string;
  image: string;
}

export const InsightHeader = ({ category, title, date, image }: InsightHeaderProps) => {
  return (
    <PageHeader
      title={title}
      category={category}
      date={date}
      image={image}
      showBackButton
      backButtonLink="/insights"
      imageHeight="h-[300px] md:h-[600px]"
      titleClassName="text-xl md:text-4xl" // Smaller font on mobile, larger on desktop
      categoryClassName="text-sm md:text-base" // Smaller category text on mobile
      dateClassName="text-sm md:text-base" // Smaller date text on mobile
    />
  );
};