export interface SearchDataType {
    id:number;
    media_type:string;
    poster_path:string;
    overview:string;
    original_title?:string;
    original_name?:string;
    vote_average:number;
  }
  
  export interface Search {
    data: SearchDataType[];
    dataAmount:string;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    searchedModalOpen: boolean;
    searchLanguage:any[];
    keywords:any[]
    movie:any,
    tv:any,
  }
  