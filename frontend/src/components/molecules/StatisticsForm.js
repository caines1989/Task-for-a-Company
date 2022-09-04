import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useStatistics } from "../../hooks/useStatistics";
import { Input } from "../atoms/Input";

export const StatisticsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { addStatistic } = useStatistics();
  const onSubmit = useCallback(
    (statistic) => {
      const add = async () => {
        await addStatistic(statistic);
      };

      add();
      reset();
    },
    [addStatistic, reset]
  );

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Add a new Statistic</legend>
        {/* register your input into the hook by invoking the "register" function */}
        <Input
          label="Clicks"
          type="number"
          {...register("clicks", {
            required: true,
          })}
        />
        <Input
          label="Views"
          type="number"
          {...register("views", {
            required: true,
          })}
        />
        <Input
          label="Cost"
          type="number"
          step=".01"
          {...register("cost", {
            required: true,
          })}
        />

        {/* errors will return when field validation fails  */}
        {Object.entries(errors).map(([key, value]) => {
          return (
            <span key={key}>
              This `{key}` field is invalid, the value was `{value}`.
            </span>
          );
        })}

        <div>
          <input type="submit" />
        </div>
      </fieldset>
    </form>
  );
};
