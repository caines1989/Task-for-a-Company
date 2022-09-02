import { useForm } from "react-hook-form";
import { useStatistics } from '../providers/StatisticsProvider'
  
  const StatisticsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {statistics, addStatistics } = useStatistics();

    const onSubmit = async (data) => {
      await addStatistics(data); 
    }

      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="date" type="date"{...register("title", { required: true })} />
          <input defaultValue="views" type="number"{...register("views", { required: true })} />
          <input defaultValue="clicks" type="number"{...register("clicks", { required: true })} />
          <input defaultValue="cost" type="number" step=".01" label="cost"{...register("cost", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
      );
}

export default StatisticsForm