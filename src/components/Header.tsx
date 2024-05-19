import { useEffect, useState } from 'react';
import { HeaderDiv, LogoImg } from './slider/HomeSliderStyles';
import { StyledLink } from './slider/SliderStyles';
import SearchComponent from './ui/SearchComponent';
import logo from '../../src/assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MenuBarExpandedDiv,
  MenuBarExpandedDivText,
  MenuDiv,
  MenuFieldWrapper,
  MenuFields,
} from './HeaderStyles';


type Hovered = {
  [key: string]: boolean;
};
const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<Hovered>({
    movie: false,
    tv: false,
    person: false,
  });
  const location = useLocation();
  const navigate = useNavigate();

  function handleIsHovered(field: string) {
    setIsHovered(prev => ({ ...prev, [field]: !prev[field] }));
  }

  function handleNavigationToContentPage(mediaType: string, category: string) {
    navigate(`/${mediaType}/${category}`);
    handleIsHovered(mediaType)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(
        scrollPosition > 1 ||
          location.pathname.includes('searchpage') ||
          location.pathname === '/tv' ||
          location.pathname === '/movie' ||
          location.pathname.includes('/person') ||
          location.pathname.includes('search') 
      );
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolled, location.pathname]);

  return (
    <HeaderDiv isScrolled={isScrolled}>
      <StyledLink to="/">
        <LogoImg src={logo} alt="logo" />
      </StyledLink>
      <MenuDiv>
        <MenuFieldWrapper
          onMouseEnter={() => handleIsHovered('movie')}
          onMouseLeave={() => handleIsHovered('movie')}
        >
          <MenuFields>Movies</MenuFields>
          {isHovered.movie && (
            <MenuBarExpandedDiv>
              <MenuBarExpandedDivText
                onClick={() =>
                  handleNavigationToContentPage('movie', 'popular')
                }
              >
                Popular
              </MenuBarExpandedDivText>
              <MenuBarExpandedDivText
                onClick={() =>
                  handleNavigationToContentPage('movie', 'now_playing')
                }
              >
                Now Playing
              </MenuBarExpandedDivText>
              <MenuBarExpandedDivText
                onClick={() =>
                  handleNavigationToContentPage('movie', 'upcoming')
                }
              >
                Upcoming
              </MenuBarExpandedDivText>
              <MenuBarExpandedDivText
                onClick={() =>
                  handleNavigationToContentPage('movie', 'top_rated')
                }
              >
                Top Rated
              </MenuBarExpandedDivText>
            </MenuBarExpandedDiv>
          )}
        </MenuFieldWrapper>
        <MenuFieldWrapper
          onMouseEnter={() => handleIsHovered('tv')}
          onMouseLeave={() => handleIsHovered('tv')}
        >
          <MenuFields>TV Shows</MenuFields>
          {isHovered.tv && (
            <MenuBarExpandedDiv>
              <MenuBarExpandedDivText
                onClick={() => handleNavigationToContentPage('tv', 'popular')}
              >
                Popular
              </MenuBarExpandedDivText>
              <MenuBarExpandedDivText
                onClick={() =>
                  handleNavigationToContentPage('tv', 'airing_today')
                }
              >
                Airing Today
              </MenuBarExpandedDivText>
              <MenuBarExpandedDivText
                onClick={() =>
                  handleNavigationToContentPage('tv', 'on_the_air')
                }
              >
                On Tv
              </MenuBarExpandedDivText>
              <MenuBarExpandedDivText
                onClick={() => handleNavigationToContentPage('tv', 'top_rated')}
              >
                Top Rated
              </MenuBarExpandedDivText>
            </MenuBarExpandedDiv>
          )}
        </MenuFieldWrapper>
        <MenuFieldWrapper
          onMouseEnter={() => handleIsHovered('person')}
          onMouseLeave={() => handleIsHovered('person')}
        >
          <MenuFields>People</MenuFields>
          {isHovered.person && (
            <MenuBarExpandedDiv>
              <MenuBarExpandedDivText
                onClick={() =>
                  handleNavigationToContentPage('person', 'popular')
                }
              >
                Popular People
              </MenuBarExpandedDivText>
            </MenuBarExpandedDiv>
          )}
        </MenuFieldWrapper>
      </MenuDiv>
      <SearchComponent />
    </HeaderDiv>
  );
};

export default Header;
