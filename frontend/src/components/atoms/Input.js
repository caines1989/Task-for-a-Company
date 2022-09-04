import { forwardRef } from "react";

export const Input = forwardRef(({ label, ...inputProps }, ref) => {
    return (
      <label>
        <div>{label}</div>
        <input ref={ref} {...inputProps} />
      </label>
    );
  });
