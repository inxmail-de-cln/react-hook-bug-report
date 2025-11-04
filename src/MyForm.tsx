import { useForm } from "react-hook-form";
import { useValue } from "./valuePromise";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/*
type Props = {
  valuePromise?: Promise<{name: string}>
}
*/


const zodValues = z.object({
  name: z.string().trim().nonempty({ message: "error.required" }),
})

const MyForm = () => {

  const values = useValue();

  const { register, formState } = useForm( {
    //resolver: zodResolver(zodValues),
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