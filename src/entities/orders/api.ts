import { db } from "@/shared/app-write";
import { IOrderAPI } from "./model";
import { COLLECTION_ORDERS, DB_ID } from "@/shared/constants";
import { ID } from "appwrite";
import { IOrder } from "@/shared/types/order";

export const OrderAPI: IOrderAPI = {
  async createOrder(inputs) {
    try {
      const response = await db.createDocument(
        DB_ID,
        COLLECTION_ORDERS,
        ID.unique(),
        inputs,
      );
      return response as unknown as IOrder;
    } catch (e) {
      console.error(e);
    }
  },
};
