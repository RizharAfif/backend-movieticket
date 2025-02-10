import { z } from "zod";

export const allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"];

export const genreSchema = z
  .object({
    name: z.string().min(5),
  })
  .strict();

export const theaterSchema = z
  .object({
    name: z.string().min(5),
    city: z.string().min(5),
  })
  .strict();

export const movieSchema = z
  .object({
    title: z.string().min(5),
    genre: z.string().min(5),
    theater: z.array(z.string().min(5)).min(1),
    available: z.boolean(),
    description: z.string().min(8).optional(),
    price: z.number(),
    bonus: z.string().optional(),
  })
  .strict();

export const authSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "customer"]),
});

export const topupSchema = z.object({
  balance: z.number().min(1000),
});

export const transactionSchema = z.object({
  subtotal: z.number(),
  total: z.number(),
  bookingFee: z.number(),
  tax: z.number(),
  movieId: z.string(),
  theaterId: z.string(),
  seats: z.array(z.string()),
  date: z.string(),
}).strict();
