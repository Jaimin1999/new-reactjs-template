import { DataTable, ConfirmDialog } from "@/CommonComponents"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/"
import { Button } from "@/components"
import { type ColumnDef } from "@tanstack/react-table"
import { useState } from "react"
import { MoreHorizontal } from "lucide-react"

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => console.log("Edit clicked", payment)}
                        >
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => console.log("Delete clicked", payment)}
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
        header: "Actions",
    },
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
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
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
            <DataTable columns={columns} data={data} pagination={true} />
            <Button onClick={toggleIsDeletePop}>Trigger Confrim</Button>
            <ConfirmDialog open={isDeletePopUp} onOpenChange={toggleIsDeletePop} onConfirm={toggleIsDeletePop} />
        </div>
    )
}