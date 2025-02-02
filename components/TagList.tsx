import { tags } from '@/data/tags';
import { Dispatch, SetStateAction } from 'react';

interface TagListProps {
  tags: string[];
  setSelectedTag: Dispatch<SetStateAction<string>>;
  selectedTag: string;
}

const selectedStyle =
  'px-3 py-1 bg-blue-100 dark:bg-blue-900 border-2 border-gray-700 dark:border-gray-300 rounded-2xl sm:text-lg';
const defaultStyle =
  'px-3 py-1 sm:text-lg border-2 border-gray-700 dark:border-gray-300 rounded-2xl transition-transform duration-300 hover:scale-110';

export default function TagList({ setSelectedTag, selectedTag }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {tags.map((tag) => {
        if (selectedTag === tag.keyword)
          return (
            <button
              type="button"
              onClick={() => setSelectedTag(tag.keyword === 'All' ? '' : tag.keyword)}
              key={tag.keyword}
              className={selectedStyle}
            >
              {tag.title}
            </button>
          );
        return (
          <button
            type="button"
            onClick={() => setSelectedTag(tag.keyword === 'All' ? '' : tag.keyword)}
            key={tag.keyword}
            className={defaultStyle}
          >
            {tag.title}
          </button>
        );
      })}
    </div>
  );
}
