export interface SearchDataType {
    id:number;
    media_type:string;
    poster_path:string;
    overview:string;
    original_title:string;
  }
  
  export interface Search {
    data: SearchDataType[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    searchedModalOpen: boolean;
  }
  