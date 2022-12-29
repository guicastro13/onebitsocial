import { APIUsers } from "./apis";

export const login: (params: any) => Promise<any> = async (
  params: any
): Promise<any> => {
  const res: any = await APIUsers.post("/login", params, {}).then(
    (response): any => response.data.token
  );
  return res;
};
