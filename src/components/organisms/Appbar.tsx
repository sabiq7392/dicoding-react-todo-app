import type { ReactElement } from "react";
import STYLES_CONFIG from "../../styles/styles.config";
import { Header } from "../../styles/mame-styled/core/HtmlTag";
import SearchbarTodos from "../molecules/SearchbarTodos";
import { SetSeachTodoInputValue } from "../../types";

const { color } = STYLES_CONFIG;

interface Props {
  setSearchTodoInputValue: SetSeachTodoInputValue;
}

export default function Appbar({ setSearchTodoInputValue }: Props): ReactElement {
  return <>
    <Header cssXs={{ background: color.primary, height: 40 }}>
      {/* logo - brand */}
      <SearchbarTodos setSearchTodoInputValue={setSearchTodoInputValue} />
    </Header>
  </>;
}
