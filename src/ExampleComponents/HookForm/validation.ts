import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(10, "Name must be at most 10 letters"),
  bio: z
    .string()
    .min(1, "Name is required")
    .max(10, "Name must be at most 10 letters"),
  role:z.string().min(1,"Role is required"),
});

export type FormData = z.infer<typeof formSchema>;

