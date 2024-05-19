import { Input } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
  clearSearched,
  triggerSearchedModal,
} from "../../redux/features/search/SearchSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { fetchSearchedAsync } from "../../redux/features/search/SearchThunk";
import {
  SearchedImage,
  SearchedInformationWrapper,
  SearchedItemDescription,
  SearchedItemWrapper,
  SearchedItemsDivWrapper,
  Title,
  sx,
} from "./SearchComponentStyles";
import { StyledLink } from "../slider/SliderStyles";
import { contentImageUrl } from "../../redux/constants";
import { AppDispatch } from "../../redux/store/store";
import { useDebounce } from "@uidotdev/usehooks";
import { RootState } from "../../redux/store/StoreTypes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const { data: Searched, searchedModalOpen} = useSelector(
    (state: RootState) => state.search
  );
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputvalue] = useState<string>("");
  const debouncedValue = useDebounce<string>(inputValue, 1000);
  const navigate = useNavigate();

  const sendRequest = useCallback(
    async (value: string) => {
      if (value !== "") {
        dispatch(fetchSearchedAsync(value));
        dispatch(triggerSearchedModal(true))
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
    setInputvalue(value);
  };

  const handleModal2 = () => {
    dispatch(triggerSearchedModal(false));
  };

  const handleKeyPress = (event: string) => {
    if (event === "Enter") {
      navigate(`/search/${inputValue}`);
      setInputvalue('')
    }
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
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e)=>handleKeyPress(e.key)}
      />
      {searchedModalOpen  ? (
        <>
          <Modal
            isOpen={searchedModalOpen}
            onClose={handleModal2}
            isCentered={false}
          >
            <h1></h1>
          </Modal>
          <SearchedItemsDivWrapper>
            {Searched.map((el) =>
              el.poster_path && el.original_title || el.original_name   ? (
                <StyledLink key={el.id} to={`/contentdetail/${el.media_type}/${el.id}`}>
                  <SearchedItemWrapper onClick={handleModal2} key={el.id}>
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
