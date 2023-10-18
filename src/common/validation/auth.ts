import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Nazwa użytkownika jest wymagana").max(30),
  password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków").max(30),
});
