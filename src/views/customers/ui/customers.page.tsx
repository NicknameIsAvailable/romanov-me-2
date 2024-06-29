import { CustomersAPI } from "@/entities/customers"
import { CustomerBadge } from "@/widgets/customer"

export const CustomersPage = async () => {
    const customers = await CustomersAPI.getAll()

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-center text-5xl font-bold py-4">Заказчики</h1>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {customers?.map(customer => 
                    <CustomerBadge data={customer}/>
                )}
            </div>
        </div>
    )
}