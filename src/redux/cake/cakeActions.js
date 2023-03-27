import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (orderValue = 0) => {
  return {
    type: BUY_CAKE,
    info: "Customer buy cake",
    payload: orderValue,
  };
};
