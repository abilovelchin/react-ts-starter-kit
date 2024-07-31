export type Mode = "light" | "dark";

export type PaginateParamsType = {
  pageIndex: number;
  pageSize: number;
};

export type PaginateInfoType<T = any> = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageIndex: number;
  totalPageCount: number;
  totalRecordCount: number;
  datas: T[];
};

export type ResponseType<TData = any> = {
  success: boolean;
  message: string;
  data: TData;
};

export type Option<TValue = string> = {
  label: string;
  value: TValue;
};
