import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const CategoryCreate = () => {
    return (
        <>  <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                    <DialogDescription>Fill out the details for the new category.</DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Name
                        </Label>
                        <Input className="col-span-3" id="name"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="image">
                            Image
                        </Label>
                        <img
                            alt="Category Image"
                            className="col-span-3 rounded-md object-cover"
                            height={100}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                            }}
                            width={100}
                        />
                    </div>
                </form>
                <DialogFooter>
                    <Button type="submit">Save Category</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog></>
    )
}