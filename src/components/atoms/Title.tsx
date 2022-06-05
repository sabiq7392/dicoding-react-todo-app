import type { ReactElement } from "react";
import { HTMLTag } from "../../styles/mame-styled/core/utils/types";
import type { Heading } from "../../types";
import { H1 } from "../../styles/mame-styled/core/HtmlTag";

// type OnInput = (value: FormEventHandler<HTMLHeadingElement>) => void;

interface Props extends HTMLTag {
  text: string;
  as: Heading;
}

export default function Title({ text, as, ...props }: Props): ReactElement {
  return <H1 as={as} {...props}>{text}</H1>;
}
