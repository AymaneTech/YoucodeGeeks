import {Button} from "@/components/ui/button.jsx";
import {MoreHorizontal} from "lucide-react";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {CategoryEdit} from "@/components/Admin/Category/CategoryEdit.jsx";

export const getCategoriesColumns = () => [
    {
        accessorKey: "image", header: "Image", cell: info => {
            const imageData = info.getValue();
            if (!imageData || !imageData.path) {
                return <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"/>;
            }
            return <img src={imageData.path} alt={imageData.name || "category Image"}
                        className="w-12 h-12 rounded-full"/>;
        }
    },
    {
        accessorKey: "name", header: "Name"
    },
    {
        accessorKey: "blogsNumber", header: "Blogs Number"
    },
    {
        accessorKey: "questionsNumber", header: "Questions Number"
    },
    {
        id: "actions", cell: ({row}) => (
            <div className="flex space-x-1.5">
                <CategoryEdit id={row.original.id}/>
                <CategoryEdit id={row.original.id}/>
            </div>
        )
    }
]