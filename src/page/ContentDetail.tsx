import { useParams } from 'react-router-dom';
import ContentDetailAbout from '../components/ContentDetail/ContentDetailAbout';
import { useEffect } from 'react';
import {
  fetchByIdAsync,
  fetchCreditsByIdAsync,
  fetchReviewsById,
  fetchSimilarByIdAsync,
} from '../redux/features/contentdetail/ContentDetailThunk';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store/store';
import PersonDetails from '../components/personDetails/PersonDetails';
import { fetchPersonDetailsAsync } from '../redux/features/person/PersonThunk';

const ContentDetail = () => {
  const { id, type } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (type && type !== 'person' && id) {
      dispatch(fetchByIdAsync({ id, type }));
      dispatch(fetchCreditsByIdAsync({ type, id }));
      dispatch(fetchSimilarByIdAsync({ type, id }));
      dispatch(fetchReviewsById({ type, id }));
    } else if (type === 'person' && id) {
      dispatch(fetchPersonDetailsAsync(id));
    }
  }, [id, type, dispatch]);

  return type === 'person' ? <PersonDetails /> : <ContentDetailAbout />;
};

export default ContentDetail;
