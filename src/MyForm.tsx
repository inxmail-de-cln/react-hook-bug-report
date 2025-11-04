import { useForm } from "react-hook-form";
import { useValue } from "./useValue";

const MyForm = () => {

  const values = useValue();

  const { register, formState } = useForm( {
    defaultValues: values || { name: ""},
    values,
    mode: "onBlur"
  } );

  return <div>
    <p><input {...register("name", { required: true })} /></p>
    <p>is valid: {formState.isValid ? "true" : "false"}</p>
  </div>;
}

export default MyForm;