import {CategoryEdit} from "@/components/Admin/Category/CategoryEdit.jsx";
import {CategoryDelete} from "@/components/Admin/Category/CategoryDelete.jsx";
import {TagEdit} from "@/components/Admin/Tag/TagEdit.jsx";
import {TagDelete} from "@/components/Admin/Tag/TagDelete.jsx";
import {ClassRoomEdit} from "@/components/Admin/ClassRooms/ClassRoomEdit.jsx";
import {ClassRoomDelete} from "@/components/Admin/ClassRooms/ClassRoomDelete.jsx";
import {UserDelete} from "@/components/Admin/Users/UserDelete.jsx";
import {UserVerify} from "@/components/Admin/Users/UserVerify.jsx";

export const categoriescolumns = () => [
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

export const tagsColumns = () => [
    {
        accessorKey: "id", header: "ID"
    },
    {
        accessorKey: "name", header: "Name"
    },
    {
        id: "actions", cell: ({row}) => (
            <div className="flex gap-4  ">
                <TagEdit tag={row.original}/>
                <TagDelete slug={row.original.slug}/>
            </div>
        )
    }
]
export const classRoomssColumns = () => [
    {
        accessorKey: "id", header: "ID"
    },
    {
        accessorKey: "name", header: "Name"
    },
    {
        accessorKey: "campus.name", header: "Campus Name"
    },
    {
        accessorKey: "schoolYear", header: "school year"
    },
    {
        id: "actions", cell: ({row}) => (
            <div className="flex gap-4  ">
                <ClassRoomEdit classRoom={row.original}/>
                <ClassRoomDelete slug={row.original.slug}/>
            </div>
        )
    }
]

export const usersColumns = () => [
    {
        accessorKey: "id", header: "ID"
    },
    {
        accessorKey: "firstName", header: "First Name"
    },
    {
        accessorKey: "lastName", header: "Last Name"
    },
    {
        accessorKey: "email", header: "Email"
    },
    {
        accessorKey: "role.name", header: "User Role"
    },
    {
        accessorKey: "isVerified", header: "Status"
    },
    {
        id: "actions", cell: ({row}) => (
            <div className="flex gap-4  ">
                <UserVerify user={row.original}/>
                <UserDelete id={row.original.id}/>
            </div>
        )
    }
]