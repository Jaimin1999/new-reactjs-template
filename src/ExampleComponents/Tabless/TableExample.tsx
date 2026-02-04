import { DataTable, ConfirmDialog } from "@/CommonComponents"

import { Button } from "@/components"
import { type ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
]



export default function TableExample() {
    const data: Payment[] = [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },

    ]

    const [isDeletePopUp, setIsDeletePopUp] = useState(false)

    const toggleIsDeletePop = () => setIsDeletePopUp(prev => !prev);

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
            <Button onClick={toggleIsDeletePop}>Trigger Confrim</Button>
            <ConfirmDialog open={isDeletePopUp} onOpenChange={toggleIsDeletePop} onConfirm={toggleIsDeletePop} />
        </div>
    )
}