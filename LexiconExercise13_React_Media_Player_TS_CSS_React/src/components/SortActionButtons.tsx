import type { ReactElement } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import type { SortType, TodoAction } from "../types";

interface ISortSectionProp {
  onButtonClick: (sortType: TodoAction) => void;
}

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
