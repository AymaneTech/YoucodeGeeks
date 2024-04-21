import {CategoryEdit} from "@/components/Admin/Category/CategoryEdit.jsx";
import {CategoryDelete} from "@/components/Admin/Category/CategoryDelete.jsx";

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
            <div className="flex gap-4  ">
                <CategoryEdit category={row.original}/>
                <CategoryDelete slug={row.original.slug}/>
            </div>
        )
    }
]