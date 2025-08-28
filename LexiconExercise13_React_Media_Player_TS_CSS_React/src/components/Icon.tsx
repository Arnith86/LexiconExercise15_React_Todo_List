import type { ReactElement } from "react";

interface IIconProp {
  iconName: string;
  isFilled?: boolean;
}

/**
 * Renders a Material Symbols icon as a `<span>` element.
 *
 * This component applies classes:
 * - `"material-symbols-outlined"` and  `"g-icon"`
 * - `"isFilled"` (optional) → when {@link IIconProp isFilled} is `true`
 *
 * @param props - See {@link IIconProp}.
 * @returns A styled React `<span>` element containing the Material Symbol name.
 */
export function Icon({ iconName, isFilled }: IIconProp): ReactElement {
  const classes: string[] = ["material-symbols-outlined", "g-icon"];

  if (isFilled) classes.push("isFilled");

  return <span className={classes.join(" ")}>{iconName}</span>;
}
