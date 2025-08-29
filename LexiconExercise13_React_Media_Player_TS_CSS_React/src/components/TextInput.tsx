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

/**
 * UserTextInput component
 *
 * A reusable text input field with a label, optional placeholder,
 * and controlled/uncontrolled modes depending on whether `value`
 * and `onChange` are provided.
 *
 * @component
 * @example
 *
 * ```tsx
 * <UserTextInput
 *   namePrefix="username"
 *   placeholder="Enter your username"
 *   required
 *   value={username}
 *   onChange={setUsername}
 *   autoFocus
 * >
 *   Username:
 * </UserTextInput>
 * ```
 *
 * @param {IUserTextInputProp} props - The props for the UserTextInput component.
 * @returns {ReactElement} A labeled text input element.
 */
export function UserTextInput(props: IUserTextInputProp): ReactElement {
  const {
    children,
    namePrefix,
    placeholder,
    required,
    value,
    onChange: setChange,
    autoFocus,
  } = props;

  return (
    <span className="text-input">
      <label htmlFor={`${namePrefix}-input`}>{children} </label>
      {renderInputField()}
    </span>
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
