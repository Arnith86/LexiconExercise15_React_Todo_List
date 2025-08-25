import { useState, type ReactElement } from "react";
import { Icon } from "./Icon";

interface IButtonProp {
  className: string;
  buttonType: "button" | "reset" | "submit";
  iconName?: null | string;
  isFilled?: boolean;
  buttonString?: null | string;
  onClick?: () => void;
}

/**
 * A reusable button component that can render either:
 * - A Material Icon (via {@link Icon}), or
 * - A text label.
 *
 * ### Visual behavior
 * - If `iconName` is provided, an icon will be rendered.
 *   - If `isFilled` is `true`, the icon gets a `"filled"` class for styling.
 * - If no `iconName` is provided, the button will display `buttonString` as text.
 *
 * ### Button type
 * - Controlled by {@link IButtonProp.buttonType}, ensuring semantic use in forms (`submit`, `reset`) or generic usage (`button`).
 *
 * ### Click behavior
 * - If {@link IButtonProp.onClick} is provided, it will be called when the button is pressed.
 * - Safe-guarded with optional chaining, so no errors occur if `onClick` is undefined.
 *
 * @example Icon button:
 * ```tsx
 * <Button
 *   className="play-btn"
 *   buttonType="button"
 *   iconName="play_arrow"
 * />
 * ```
 *
 * @example Text button:
 * ```tsx
 * <Button
 *   className="add-btn"
 *   buttonType="submit"
 *   buttonString="Add ToDo"
 * />
 * ```
 *
 * @param props - Button properties defined in {@link IButtonProp}.
 * @returns A styled React `<button>` element with optional icon or text.
 */
export function Button({
  className,
  buttonType,
  iconName,
  isFilled,
  buttonString,
  onClick,
}: IButtonProp): ReactElement {
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
      {iconName ? (
        <Icon
          className={`button-icon icon ${isFilled ? "filled" : ""}`}
          iconName={iconName}
        />
      ) : (
        <span>{buttonString}</span>
      )}
    </button>
  );
}
