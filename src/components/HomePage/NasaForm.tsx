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

export const NasaForm = ({
  onSubmit,
}: {
  onSubmit: (data: NasaFormValidationType) => void;
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
          <TextField label="Keywords" {...register("keywords")} />
          <ValidationMessage type={keywords} />

          <TextField label="Year start" {...register("yearStart")} />
          <ValidationMessage type={yearStart} />

          <Select label="Media type" {...register("mediaType")}>
            <option selected></option>
            {MEDIA_TYPE_VALUES.map((type) => {
              return <option selected={false}>{type}</option>;
            })}
          </Select>
          <ValidationMessage type={mediaType} />
        </Box>

        <Button full appearance="primary" onClick={() => trigger()}>
          submit
        </Button>
      </form>
    </BoxFormWrapper>
  );
};

export default NasaForm;
