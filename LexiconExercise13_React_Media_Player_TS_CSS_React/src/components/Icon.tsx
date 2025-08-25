import type { ReactElement } from "react";

interface IIconProp {
  className: string;
  iconName: string;
}

/**
 * Renders a Material Symbols icon as a span element.
 *
 * This component applies the `material-symbols-outlined` class to the span
 * and allows additional custom styling through the `className` prop.
 *
 * @param className - Custom CSS class(es) to apply to the icon.
 * @param iconName - The specific Material Symbols icon to render.
 * @returns A React element representing the icon.
 */
export function Icon({ className, iconName }: IIconProp): ReactElement {
  return (
    <span className={`${className} material-symbols-outlined`}>{iconName}</span>
  );
}
