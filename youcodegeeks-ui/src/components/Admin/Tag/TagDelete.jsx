import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useDispatch} from "react-redux";
import {deleteCategory} from "@/Features/CategorySlice.js";
import {Trash} from "lucide-react";

export const TagDelete = ({slug}) => {

    const dispatch = useDispatch();
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(deleteCategory(slug))
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="none" className="m-0 p-0"><Trash/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Are you sure!</DialogTitle>
                    <DialogDescription>Do you want to complete this operation.</DialogDescription>
                </DialogHeader>
                    <form onSubmit={onSubmit} className="grid gap-4 py-4">
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button className="bg-red-600" type="submit">Delete</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button type="button">Cancel</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
            </DialogContent>
        </Dialog>
    )
}