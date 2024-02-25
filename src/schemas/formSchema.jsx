import z from 'zod';

export const FormSchema = z.object({
    name: z
    .string()
    .min(3, "o número minimo de caracteres é 3."),
    email: z
    .string()
    .min(1, "O campo é obrigatório.")
    .email("utilize um emal válido."),
    message: z.string().min(1, "Escreva uma menssagem")
})

export default FormSchema;