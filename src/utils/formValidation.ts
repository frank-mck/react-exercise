import { z } from "zod";

const mediaTypeValues = ["audio", "video", "image"] as const;

const validation = z.object({
  keywords: z
    .string()
    .min(2, { message: "Keywords must have at least 2 characters." })
    .max(50, { message: "Keywords must have at most 50 characters." })
    .nonempty({ message: "Keywords are required" })
    .default(""),

  mediaType: z
    .union([
      z.enum(mediaTypeValues, {
        required_error: "Please select a valid media type",
      }),
      z.literal(null),
      z.literal(undefined),
    ])
    .refine((value) => value !== null && value !== undefined, {
      message: "Please select a media type",
    }),

  yearStart: z
    .string()
    .regex(/^[0-9]+$/, { message: "Please enter a valid number." })
    .min(1900, { message: "Year start must be after 1900." })
    .max(new Date().getFullYear(), {
      message: "Year start must not be in the future.",
    })
    .default(""),
});

export default validation;
