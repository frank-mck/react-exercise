import { Button } from "@cruk/cruk-react-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NasaFormValidationType,
  NasaFormValidation,
  ValidateNasaForm,
} from "../../utils/nasaFormValidation";

export const NasaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NasaFormValidationType>({
    resolver: zodResolver(NasaFormValidation),
  });
  return <Button>form</Button>;
};

export default NasaForm;
