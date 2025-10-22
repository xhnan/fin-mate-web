import { http } from "@/utils/http";
import { baseUrlApi } from "@/api/utils";

export const getAsyncRoutes = () => {
  return http.request("get", baseUrlApi("/get-async-routes"));
};
