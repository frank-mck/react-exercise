import { z } from "zod";

export const MEDIA_TYPE_VALUES = ["audio", "video", "image"] as const;

const NasaFormValidation = z.object({
  keywords: z
    .string()
    .trim()
    .min(2, { message: "Keywords must have at least 2 characters." })
    .max(50, { message: "Keywords must have at most 50 characters." })
    .default(""),

  mediaType: z.enum(MEDIA_TYPE_VALUES, {
    errorMap: () => {
      return { message: "Please select a media type." };
    },
  }),

  yearStart: z
    .string()
    .refine(
      (value) => {
        return !isNaN(Number(value));
      },
      {
        message: "Please enter a valid number.",
      },
    )
    .transform((value) => {
      return parseInt(value, 10);
    })
    .refine((value) => typeof value === "string" || value >= 1900, {
      message: "Year start must be after 1900.",
    })
    .refine(
      (value) => typeof value === "string" || value <= new Date().getFullYear(),
      {
        message: "Year start must not be in the future.",
      },
    ),
});

export type NasaFormValidationType = z.infer<typeof NasaFormValidation>;

export { NasaFormValidation };
