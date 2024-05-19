import { contentImageUrl } from '../../redux/constants';
import {
  ContentTitle,
  Description,
  DetailsDiv,
  GenreItem,
  MainContainer,
  OverView,
  PosterImage,
  RelativeDiv,
} from '../../components/ContentDetail/ContentDetailAboutStyles';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/StoreTypes';
import Loader from '../ui/Loader';
import noPhoto from '../../assets/images/noPhoto.jpg';
import { PersonalInfoDiv } from './PersonDetailsStyles';

const PersonDetails = () => {
  const { personsDetail, status } = useSelector(
    (state: RootState) => state.person
  );
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Date(personsDetail.birthday).toLocaleDateString(
    'en-US',
    options
  );

  console.log(personsDetail);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (status === 'loading') return <Loader />;

  return (
    <div>
      <RelativeDiv>
        <MainContainer>
          <PosterImage
            src={
              personsDetail.profile_path
                ? contentImageUrl(personsDetail.profile_path)
                : noPhoto
            }
            alt="logo"
          />
          <DetailsDiv>
            <ContentTitle>{personsDetail.name}</ContentTitle>
            <OverView>Biography</OverView>
            <Description>{personsDetail.biography}</Description>
            <OverView>Personal Info</OverView>
            <PersonalInfoDiv>
              <GenreItem>
                Known For : {personsDetail.known_for_department}
              </GenreItem>
              <GenreItem>
                Gender : {personsDetail.gender === 1 ? 'Female' : 'Male'}
              </GenreItem>
              <GenreItem>Birthday : {formattedDate}</GenreItem>
              <GenreItem>
                Place of Birth : {personsDetail.place_of_birth}
              </GenreItem>
            </PersonalInfoDiv>
          </DetailsDiv>
        </MainContainer>
      </RelativeDiv>
    </div>
  );
};

export default PersonDetails;
