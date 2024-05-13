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

const SearchComponent = ({ inputValue ,Searched,searchedModalOpen}: any) => {
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
    return debounce(sendRequest, 1000);
  }, [sendRequest]);

  const onChange = (e: any) => {
    const value = e.target.value;
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
      onChange={onChange}
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
            {Searched.map((el: any) =>
              el.backdrop_path && el.original_title ? (
                <SearchedItemWrapper key={el.id}>
                  <SearchedImage
                    src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
                    alt="searchedimg"
                  />
                  <SearchedInformationWrapper>
                    <Title>{el.original_title}</Title>
                    <SearchedItemDescription>
                      {el.overview}
                    </SearchedItemDescription>
                  </SearchedInformationWrapper>
                </SearchedItemWrapper>
              ) : null
            )}
          </SearchedItemsDivWrapper>
        </>
      ) : null}
      </>
  );
};

export default SearchComponent;
