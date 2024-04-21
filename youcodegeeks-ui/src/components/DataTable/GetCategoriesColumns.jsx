import {Button} from "@/components/ui/button.jsx";
import {MoreHorizontal} from "lucide-react";

export const getCategoriesColumns = () => [
    {
        accessorKey: "id",
        header: "Header"
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "blogsNumber",
        header: "Blogs Number"
    },
    {
        accessorKey: "questionsNumber",
        header: "Questions Number"
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <div className="flex justify-end">
                <Button variant="ghost" className="ml-auto flex h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </div>
        )
    }
]