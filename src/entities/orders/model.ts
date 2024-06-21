import { IOrder } from '@/shared/types/order';

export type TOrderInputs = Pick<IOrder, "from_email" | "text" | "from_telegram_url">

export interface IOrderAPI {
    createOrder(inputs: TOrderInputs): Promise<IOrder | undefined>
}
