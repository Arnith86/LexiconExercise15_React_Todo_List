import type { ReactElement } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import type { SortType, TodoAction } from "../types";

interface ISortSectionProp {
  onButtonClick: (sortType: TodoAction) => void;
}

/**
 * SortSection component
 *
 * Renders a section containing action buttons to sort the todo list
 * by date (newest first) or alphabetically by author.
 *
 * @component
 * @example
 * ```tsx
 * <SortSection onButtonClick={(action) => handleSort(action)} />
 * ```
 *
 * @param {ISortSectionProp} props - The props for the SortSection component.
 * @param {(sortType: TodoAction) => void} props.onButtonClick -
 *        A callback function triggered when the user clicks a sort button.
 *
 * @returns {ReactElement} A section element containing sort action buttons.
 */
export function SortSection({ onButtonClick }: ISortSectionProp): ReactElement {
  return (
    <section className="sort-action-buttons">
      <Icon iconName="sort" />

      <Button
        className="g-button sort-new-first-button"
        buttonType="button"
        onClick={() => onButtonClick("sort-date")}
      >
        Date
      </Button>

      <Button
        className="g-button sort-alphabetically-button"
        buttonType="button"
        onClick={() => onButtonClick("sort-alphabetically")}
      >
        Author
      </Button>
    </section>
  );
}
