import type { ReactElement } from "react";
import STYLES_CONFIG from "../../styles/styles.config";
import { Header, Img } from "../../styles/mame-styled/core/HtmlTag";
import SearchbarTodos from "../molecules/SearchbarTodos";
import { SetSeachTodoInputValue } from "../../types";
import Logo from "../../logo.svg";
import { CSSProp } from "styled-components";

const { color, spacing } = STYLES_CONFIG;

interface Props {
  setSearchTodoInputValue: SetSeachTodoInputValue;
}

export default function Appbar({ setSearchTodoInputValue }: Props): ReactElement {
  const cssXs: { header: CSSProp } = {
    header: {
      background: color.primary, 
      padding: `${spacing._3} ${spacing._8}`, 
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "auto minmax(100px, 50vw)",
      gap: spacing._7,
    },
  };
  return <>
    <Header cssXs={cssXs.header}>
      <Img src={Logo} alt="To Do"/>
      <SearchbarTodos setSearchTodoInputValue={setSearchTodoInputValue}  />
    </Header>
  </>;
}
