import type { ReactElement } from "react";
import { createElement } from "react";
import { HTMLTag } from "../../styles/mame-styled/core/utils/types";
import type { Heading } from "../../types";

// type OnInput = (value: FormEventHandler<HTMLHeadingElement>) => void;

interface Props extends HTMLTag {
  text: string;
  as: Heading;
  onInput?: any;
  // contentEditable: any;
  // suppressContentEditableWarning: any;
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
