import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/StoreTypes';
import {
  FilterCategorieTitle,
  GenreDivWrapper,
  GenreItemWrapper,
  GenreItems,
} from './ExpandedSearchComponentStyles';
import { useEffect, useState } from 'react';

import { useExpandedSearchContext } from '../../context/ExpandedSearchContext';

const SearchGenreComponent = () => {
  const { setFilters } = useExpandedSearchContext();
  const Genres = useSelector(({ genre }: RootState) => genre.contentGenre);
  const [activeGenre, setActiveGenre] = useState<string[]>([]);

  useEffect(() => {
    setFilters(prev => ({ ...prev, genres: activeGenre }));
  }, [activeGenre, setFilters]);

  const ActivateGenre = (id: string) => {
    if (activeGenre.includes(id)) {
      setActiveGenre(prev => [...prev].filter(el => el !== id));
    } else {
      setActiveGenre(prev => [...prev, id]);
    }
  };

  const Checkactive = (id: string) => {
    if (activeGenre.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <GenreDivWrapper>
      <FilterCategorieTitle>Genres</FilterCategorieTitle>
      <GenreItemWrapper>
        {Genres.map((el :any)=> (
          <GenreItems
            active={Checkactive(el.id.toString())}
            onClick={() => ActivateGenre(el.id.toString())}
            key={el.id}
          >
            {el.name}
          </GenreItems>
        ))}
      </GenreItemWrapper>
    </GenreDivWrapper>
  );
};

export default SearchGenreComponent;
