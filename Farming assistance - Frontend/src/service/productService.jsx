import { http } from "./urlConfig";

export const productService = {
  deleteProduct: (id) => {
    let url = `farmer/delete-product/${id}`;
    return http.put(url);
  },
};
