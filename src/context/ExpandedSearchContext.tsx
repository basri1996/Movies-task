import { ReactNode, createContext, useContext, useState } from 'react';
import { Values } from '../components/searchpage/RangeComponent';

type ReleaseDateType = {
  from: string;
  to: string;
};

type ReleaseType = {
  type: string[];
  date: ReleaseDateType;
};

export type FiltersType = {
  sort: string;
  language: string;
  release: ReleaseType;
  genres: string[];
  rangeValues: Values;
  userVotes: undefined | number;
};

type ExpandedSearchContextType = {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
  params:any
};

const ExpandedSearchContext = createContext<
  ExpandedSearchContextType | undefined
>(undefined);

const initialFilterValues = {
  sort: '',
  language: '',
  release: {
    type: [],
    date: {
      from: '',
      to: '',
    },
  },
  genres: [],
  rangeValues: {
    userScore: [],
    runtime: [],
  },
  userVotes: undefined,
};

export const ExpandedSearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [filters, setFilters] = useState<FiltersType>(initialFilterValues);
  const params = {
    sort_by: filters.sort,
    with_original_language: filters.language,
    with_genres: filters.genres,
    'vote_average.gte': filters.rangeValues.userScore[0],
    'vote_average.lte': filters.rangeValues.userScore[1],
    "with_runtime.gte": filters.rangeValues.runtime[0],
    "with_runtime.lte":filters.rangeValues.runtime[1],
    "vote_count.gte": filters.userVotes,
    with_release_type: filters.release.type,
    'release_date.gte': filters.release.date.from,
    'release_date.lte': filters.release.date.to,
  };


  console.log(filters)
  return (
    <ExpandedSearchContext.Provider value={{ filters, setFilters,params }}>
      {children}
    </ExpandedSearchContext.Provider>
  );
};

export const useExpandedSearchContext = (): ExpandedSearchContextType => {
  const context = useContext(ExpandedSearchContext);
  if (context === undefined) {
    throw new Error(
      'useExpandedSearchContext must be used within a ExpandedSearchContextProvider',
    );
  }
  return context;
};
