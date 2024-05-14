import { useParams } from "react-router-dom";
import ContentDetailAbout from "../components/ContentDetail/ContentDetailAbout";
import { useEffect } from "react";
import {
  fetchByIdAsync,
  fetchCreditsByIdAsync,
} from "../redux/features/contentdetail/ContentDetailThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "../components/ui/Loader";
import { RootState } from "../redux/store/StoreTypes";
import { AppDispatch } from "../redux/store/store";

const ContentDetail = () => {
  const { id, type } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { data, status,credits } = useSelector((state: RootState) => state.contentdetail);

  console.log(credits)

  useEffect(() => {
    id && dispatch(fetchByIdAsync({ id, type }));
    type && id && dispatch(fetchCreditsByIdAsync({ type, id }));
  }, [id]);
  if (status === "loading") {
    return <Loader />;
  }
  return <ContentDetailAbout data={data} />;
};

export default ContentDetail;
