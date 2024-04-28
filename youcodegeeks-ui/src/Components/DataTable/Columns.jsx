import {CategoryEdit} from "@/Components/Admin/Category/CategoryEdit.jsx";
import {CategoryDelete} from "@/Components/Admin/Category/CategoryDelete.jsx";
import {TagEdit} from "@/Components/Admin/Tag/TagEdit.jsx";
import {TagDelete} from "@/Components/Admin/Tag/TagDelete.jsx";
import {ClassRoomEdit} from "@/Components/Admin/ClassRooms/ClassRoomEdit.jsx";
import {ClassRoomDelete} from "@/Components/Admin/ClassRooms/ClassRoomDelete.jsx";
import {UserDelete} from "@/Components/Admin/Users/UserDelete.jsx";
import {UserVerify} from "@/Components/Admin/Users/UserVerify.jsx";

export const categoriescolumns = () => [
    {
        accessorKey: "image", header: "Image", cell: ({row}) => {
            return <img src={row.original.image.path} alt={row.original.name || "categories Image"}
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
        accessorKey: "image", header: "Image", cell: ({row}) => {
            return <img src={row.original?.image.path} alt={row.original.name || "categories Image"}
                        className="w-12 h-12 rounded-full"/>;
        }
    },
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
export const questionsColumns = () => [
    {
        accessorKey: "id", header: "ID"
    },
    {
        accessorKey: "title", header: "Title"
    },
    {
        accessorKey: "details", header: "Details"
    },
    {
        accessorKey: "categories.name", header: "Category"
    },
    {
        accessorKey: "author.first_name", header: "Author"
    },
    {
        id: "actions", cell: ({row}) => (
            <div className="flex gap-4  ">
                <UserDelete id={row.original.id}/>
            </div>
        )
    }
]