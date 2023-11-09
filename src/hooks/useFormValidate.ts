import React, { ChangeEvent, useCallback } from 'react';

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormValidationResult {
  values: FormValues;
  errors: FormErrors;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetValidation: (values?: FormValues, errors?: FormErrors, isFormValid?: boolean) => void;
  isFormValid: boolean;
}

function useFormValidate(): FormValidationResult {
  // хук валидации формы
  const [values, setValues] = React.useState<FormValues>({});
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = React.useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = e.target.validationMessage;
    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: error }));
    setIsFormValid(e.target.closest('form')?.checkValidity() || false);
  };

  const resetValidation = useCallback((values: FormValues = {}, errors: FormErrors = {}, isFormValid = false) => {
    setValues(values);
    setErrors(errors);
    setIsFormValid(isFormValid);
  }, []);

  return {
    values,
    errors,
    onChange,
    resetValidation,
    isFormValid,
  };
}

export default useFormValidate;
