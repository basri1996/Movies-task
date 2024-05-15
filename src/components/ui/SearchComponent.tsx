import { Input } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
  clearSearched,
  triggerSearchedModal,
} from "../../redux/features/search/SearchSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { fetchSearchedAsync } from "../../redux/features/search/SearchThunk";
import { SearchedImage, SearchedInformationWrapper, SearchedItemDescription, SearchedItemWrapper, SearchedItemsDivWrapper, Title, sx } from "./SearchComponentStyles";
import { StyledLink } from "../slider/SliderStyles";
import { contentImageUrl } from "../../redux/constants";
import { AppDispatch } from "../../redux/store/store";
import { useDebounce } from "@uidotdev/usehooks";
import { RootState } from "../../redux/store/StoreTypes";
import { useSelector } from "react-redux";

const SearchComponent = () => {
  const {
    data: Searched,
    searchedModalOpen,
  } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue ,setInputvalue] = useState<string>("")
  const debouncedValue = useDebounce<string>(inputValue, 800);

  const sendRequest = useCallback(
    async (value: string) => {
      if (value !== "") {
        dispatch(triggerSearchedModal())
        dispatch(fetchSearchedAsync(value));
      } else {
        dispatch(clearSearched());
      }
    },
    [dispatch]
  );

  useEffect(() => {
      sendRequest(debouncedValue);
  }, [debouncedValue, sendRequest]);

  const onChange = (value: string) => {
    setInputvalue(value)
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
