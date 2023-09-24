import { z, ZodError } from "zod";

const MEDIA_TYPE_VALUES = ["audio", "video", "image"] as const;

const NasaFormValidation = z.object({
  keywords: z
    .string()
    .trim()
    .min(2, { message: "Keywords must have at least 2 characters." })
    .max(50, { message: "Keywords must have at most 50 characters." })
    .nonempty({ message: "Keywords are required." })
    .default(""),

  mediaType: z
    .enum(MEDIA_TYPE_VALUES, {
      required_error: "Please select a media type.",
    })
    .optional()
    .nullable(),

  yearStart: z
    .string()
    .trim()
    .length(4)
    .regex(/^[0-9]+$/, { message: "Please enter a valid number." })
    .min(1900, { message: "Year start must be after 1900." })
    .max(new Date().getFullYear(), {
      message: "Year start must not be in the future.",
    })
    .default("")
    .nullable()
    .optional(),
});

const ValidateNasaForm = (data: FormData): string[] | null => {
  try {
    NasaFormValidation.parse(data);
    return null;
  } catch (error) {
    if (error instanceof ZodError) {
      return error.issues.map((issue) => issue.message);
    }
    throw error;
  }
};

export type NasaFormValidationType = z.infer<typeof NasaFormValidation>;

export { NasaFormValidation, ValidateNasaForm };
