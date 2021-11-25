export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

export type GetUserResponse = {
  users: User[];
  totalCount: number;
};

export type Params = {
  page?: number;
};
export interface ModelUser extends GetUserResponse {
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
}
