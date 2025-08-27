import { useState, type ReactElement, type ReactNode } from "react";
import { Icon } from "./Icon";

interface IButtonProp {
  children: ReactNode;
  className: string;
  buttonType: "button" | "reset" | "submit";
  onClick?: () => void;
}

/**
 * A reusable button component.
 *
 * This component is flexible: it does not decide whether to render
 * an icon or text. Instead, content is passed as `children`, allowing
 * any combination of icons, text, or custom elements.
 *
 * @param props - See {@link IButtonProp}.
 * @returns A styled React `<button>` element.
 */
export function Button(props: IButtonProp): ReactElement {
  const { children, className, buttonType, onClick } = props;

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    onClick?.();
    /** JP Comment: ?: only executes if onClick is not undefined. works the same as
     * if (onClick) {
     *   onClick();
     * }
     */
  }

  return (
    <button
      className={`g-button ${className} `}
      onClick={handleClick}
      type={buttonType}
    >
      {children}
    </button>
  );
}
