import { Button, Select, Text } from "@cruk/cruk-react-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BoxFormWrapper, StylesTextField } from "./styles";
import {
  NasaFormValidationType,
  NasaFormValidation,
  MEDIA_TYPE_VALUES,
} from "../../utils/nasaFormValidation";
import { NasaSearchParams } from "../../types";

export const NasaForm = ({
  onSubmit,
}: {
  onSubmit: (data: NasaSearchParams) => void;
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

  return (
    <BoxFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StylesTextField label="Keywords" {...register("keywords")} />
        <Text textColor="red">{keywords ? keywords.message : null}</Text>

        <StylesTextField label="Year start" {...register("yearStart")} />
        <Text textColor="red">{yearStart ? yearStart.message : null}</Text>

        <Select label="Media type" {...register("mediaType")}>
          <option selected></option>
          {MEDIA_TYPE_VALUES.map((type) => {
            return <option selected={false}>{type}</option>;
          })}
        </Select>
        <Text textColor="red">{mediaType ? mediaType.message : null}</Text>

        <Button full appearance="primary" onClick={() => trigger()}>
          submit
        </Button>
      </form>
    </BoxFormWrapper>
  );
};

export default NasaForm;
