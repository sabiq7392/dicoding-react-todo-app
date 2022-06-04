import { createElement, ReactElement } from "react";
import type { Heading } from "../../types";

interface Props {
  text: string;
  as: Heading;
}

export default function Title({ text, as, ...props }: Props): ReactElement {
  return createElement(
    as,
    {
      ...props
    },
    text,
  );
}
