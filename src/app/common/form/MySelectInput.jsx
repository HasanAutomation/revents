import React from 'react';
import { useField } from 'formik';
import { FormField, Select, Label } from 'semantic-ui-react';

const MySelectInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(helpers)
  return (
    <FormField error={meta.touched && !!meta.error}>
      <Select
        clearable
        value={field.value || null}
        onChange={(e, data) => helpers.setValue(data.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default MySelectInput;
