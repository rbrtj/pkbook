import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Nazwa użytkownika jest wymagana").max(30),
  password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków").max(30),
});

export const registerSchema = z
  .object({
    username: z.string().min(1, "Nazwa użytkownika jest wymagana").max(30),
    // TODO: Add validation for @pk.edu.pl email
    email: z
      .string()
      .min(1, "Adres email jest wymagany")
      .email("Nieprawidłowy adres email"),
    password: z.string().min(8, "Hasło musi składać się z conajmniej 8 znaków"),
    confirmPassword: z.string().min(1, "Hasła nie są identyczne"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Hasła nie są identyczne",
  });
