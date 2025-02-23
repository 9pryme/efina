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
      imageHeight="h-[600px]"
    />
  );
}; 