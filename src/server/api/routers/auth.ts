import { registerSchema } from "~/common/validation/auth";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";

export const registerRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      const { email, password, username } = input;

      const exists = await ctx.db.user.findFirst({
        where: { email },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists.",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await ctx.db.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      return {
        status: 201,
        message: "Konto utworzone pomyślnie",
        result: result.email,
      };
    }),
});
