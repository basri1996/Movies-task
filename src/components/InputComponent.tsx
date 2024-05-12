import { Input } from "@mui/material";
import debounce from "debounce";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchedAsync } from "../redux/slices/TrendingMoviesSlice";
import { useSelector } from "react-redux";
import UseSizeDetector from "../hooks/useSizeDetector";

const InputComponents = () => {
  const dispatch = useDispatch<any>();
  const MainState = useSelector((state: any) => state.main);
  const { innerWidth } = UseSizeDetector();
  const [inputValue, setInputValue] = useState<string>("");
  
  console.log("input value",inputValue);

  useEffect(()=>{
console.log("mounted")
  },[])

  
  const sendRequest = useCallback(
    async (value: string) => {
      dispatch(fetchSearchedAsync(value));
    },

    [dispatch]
  );

  const debouncedSendRequest = useMemo(() => {
    return debounce(sendRequest, 1000);
  }, [sendRequest]);

  const onChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSendRequest(value);
  };

  return (
    <Input
      value={inputValue}
      fullWidth
      autoFocus
      placeholder="Search for movies,tv shows..."
      color="primary"
      disableUnderline={true}
      sx={{
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        padding: innerWidth && innerWidth > 768 ? "10px" : "4px",
        width: innerWidth && innerWidth < 768 ? "150px" : "250px",
        fontSize: innerWidth && innerWidth > 768 ? "16px" : "9px",
        "&:hover": {
          backgroundColor: "#e0e0e0",
        },
      }}
      onChange={onChange}
    />
  );
};

export default InputComponents;
