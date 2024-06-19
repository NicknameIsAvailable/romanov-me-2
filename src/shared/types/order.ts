import {IDocumentsBase} from "@/shared/types/base";

export interface IOrder extends IDocumentsBase {
    from_email: string;
    text: string;
    from_telegram_url: string;
}
