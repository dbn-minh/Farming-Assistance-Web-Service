import { http } from "./urlConfig";

export const cartService = {
  postOrder: (data, id, roleName) => {
    console.log(roleName);
    console.log(id);
    console.log(data);
    let url = `/${roleName}/order/${id}`;
    console.log("url:", url);
    return http.put(url, data);
  },
};
