import { IOrder } from '@/shared/types/order';

export type TOrderInputs = Pick<IOrder, "from_email" | "from_telegram_url" | "text">

export interface IOrderAPI {
    createOrder(inputs: TOrderInputs): Promise<IOrder | undefined>
}
