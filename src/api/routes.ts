import { http } from "@/utils/http";

// 路由数据类型
export const getAsyncRoutes = () => {
  return http.request<Array<any>>("get", "/get-async-routes");
};
