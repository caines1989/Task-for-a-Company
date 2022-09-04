export const Fieldset = ({ legend, children }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};
