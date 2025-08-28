import type { ReactElement, ReactNode } from "react";

interface IUserTextInputProp {
  children: ReactNode;
  namePrefix: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export function UserTextInput({
  children,
  namePrefix,
  placeholder,
  required,
  value,
  onChange: setChange,
  autoFocus,
}: IUserTextInputProp): ReactElement {
  return (
    <>
      <label htmlFor={`${namePrefix}-input`}>{children} </label>
      {renderInputField()}
    </>
  );

  function renderInputField(): ReactElement {
    if (value)
      return (
        <input
          type="text"
          required={required ? true : false}
          className={`${namePrefix}-text-input`}
          name={`${namePrefix}-input`}
          placeholder={`${placeholder}`}
          value={value ?? ""}
          onChange={(e) => setChange?.(e.target.value)}
          autoFocus={autoFocus ?? false}
        />
      );

    return (
      <input
        type="text"
        required={required ? true : false}
        className={`${namePrefix}-text-input`}
        name={`${namePrefix}-input`}
        placeholder={`${placeholder}`}
      />
    );
  }
}
