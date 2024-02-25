import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {FormSchema} from "../schemas/formSchema"

export const useForms = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(FormSchema),
    });

    return {register, handleSubmit, errors};
};