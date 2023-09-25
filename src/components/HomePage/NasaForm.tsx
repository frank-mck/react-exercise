import {
  Box,
  Button,
  Select,
  TextField,
  ErrorText,
} from "@cruk/cruk-react-components";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BoxFormWrapper } from "./styles";
import {
  NasaFormValidationType,
  NasaFormValidation,
  MEDIA_TYPE_VALUES,
} from "../../utils/nasaFormValidation";

export const defaultParams = (): NasaFormValidationType => {
  return { keywords: "moon", yearStart: 2000, mediaType: "image" };
};

export const NasaForm = ({
  onSubmit,
  isFetching,
}: {
  onSubmit: (data: NasaFormValidationType) => void;
  isFetching: boolean;
}) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<NasaFormValidationType>({
    resolver: zodResolver(NasaFormValidation),
  });

  const { keywords, mediaType, yearStart } = errors;

  const ValidationMessage = ({ type }: { type: FieldError | undefined }) => {
    return (
      <ErrorText paddingVertical="xxs">{type ? type?.message : null}</ErrorText>
    );
  };

  return (
    <BoxFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box marginVertical="none">
          <TextField
            defaultValue={defaultParams().keywords}
            label="Keywords"
            {...register("keywords")}
          />
          <ValidationMessage type={keywords} />

          <TextField
            defaultValue={defaultParams().yearStart}
            label="Year start"
            {...register("yearStart")}
          />
          <ValidationMessage type={yearStart} />

          <Select
            defaultValue={defaultParams().mediaType}
            label="Media type"
            {...register("mediaType")}
          >
            {/* Add an empty option */}
            <option></option>
            {MEDIA_TYPE_VALUES.map((type) => {
              return <option key={type}>{type}</option>;
            })}
          </Select>
          <ValidationMessage type={mediaType} />
        </Box>

        <Button
          disabled={isFetching}
          full
          appearance="primary"
          onClick={() => trigger()}
        >
          {isFetching ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </BoxFormWrapper>
  );
};

export default NasaForm;
