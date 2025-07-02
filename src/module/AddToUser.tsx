import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/types/types";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";


const AddToUser = () => {
    const dispatch = useAppDispatch()

    const form = useForm()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        dispatch(addUser(data as IUser))
    }
    return (
        <div>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline">Add User</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add New User</DialogTitle>
                        </DialogHeader>

                        <Form {...form} >
                            <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} value={field.value || " "} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <Button className="mt-5 bg-green-500" type="submit">Save User</Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    );
};

export default AddToUser;