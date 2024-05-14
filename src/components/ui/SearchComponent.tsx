import { Input } from "@mui/material";
import { useCallback, useMemo } from "react";
import {
  clearSearched,
  setInputValue,
  triggerSearchedModal,
} from "../../redux/features/search/SearchSlice";
import { useDispatch } from "react-redux";
import debounce from "debounce";
import Modal from "./Modal";
import { fetchSearchedAsync } from "../../redux/features/search/SearchThunk";
import { SearchedImage, SearchedInformationWrapper, SearchedItemDescription, SearchedItemWrapper, SearchedItemsDivWrapper, Title, sx } from "./SearchComponentStyles";
import { StyledLink } from "../slider/SliderStyles";
import { contentImageUrl } from "../../redux/constants";
import { SearchDataType } from "../../redux/features/search/SearchTypes";

interface Props {
  inputValue:string;
   Searched:SearchDataType[];
   searchedModalOpen:boolean;
}

const SearchComponent = ({ inputValue ,Searched,searchedModalOpen}: Props) => {
  const dispatch = useDispatch<any>();
  const sendRequest = useCallback(
    async (value: string) => {
      if (value !== "") {
        dispatch(fetchSearchedAsync(value));
      } else {
        dispatch(clearSearched());
      }
    },
    [dispatch]
  );

  const debouncedSendRequest = useMemo(() => {
    return debounce(sendRequest, 500);
  }, [sendRequest]);

  const onChange = (value: string) => {
    dispatch(setInputValue(value));
    debouncedSendRequest(value);
  };

  const handleModal2 = () => {
    dispatch(triggerSearchedModal());
  };

  return (
    <>
    <Input
      value={inputValue}
      fullWidth
      autoFocus
      placeholder="Search for movies,tv shows..."
      color="primary"
      disableUnderline={true}
      sx={sx}
      onChange={(e)=>onChange(e.target.value)}
    />
    {Searched && searchedModalOpen ? (
        <>
          <Modal
            isOpen={searchedModalOpen}
            onClose={handleModal2}
            isCentered={false}
          >
            <h1></h1>
          </Modal>
          <SearchedItemsDivWrapper>
            {Searched.length === 0 && (
              <Title> cant find any information</Title>
            )}
            {Searched.map((el) =>
              el.poster_path && el.original_title ? (
                <StyledLink to={`/contentdetail/${el.media_type}/${el.id}`}>
                <SearchedItemWrapper key={el.id}>
                  <SearchedImage
                    src={contentImageUrl(el.poster_path)}
                    alt="searchedimg"
                  />
                  <SearchedInformationWrapper>
                    <Title>{el.original_title}</Title>
                    <SearchedItemDescription>
                      {el.overview}
                    </SearchedItemDescription>
                  </SearchedInformationWrapper>
                </SearchedItemWrapper>
                </StyledLink>
              ) : null
            )}
          </SearchedItemsDivWrapper>
        </>
      ) : null}
      </>
  );
};

export default SearchComponent;
