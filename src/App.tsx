import type { ReactElement } from "react";
import { useState } from "react";
import GlobalsStyles from "./styles/Globals.styled";
import { Article, Aside, Footer, H1, H2, Header, Main } from "./styles/mame-styled/core/HtmlTag";
import STYLES_CONFIG from "./styles/styles.config";
import TODOS_DATA from "./data/TODOS_DATA";
import AllTodosList from "./components/organisms/AllTodosList";
import SearchedTodosList from "./components/organisms/SearchedTodosList";
import Date from "./components/atoms/Date";
import Title from "./components/atoms/Title";
import SearchbarTodos from "./components/molecules/SearchbarTodos";
import ArchivedTodosList from "./components/organisms/ArchivedTodosList";
import FormAddTodo from "./components/organisms/FormAddTodo";

const { color } = STYLES_CONFIG;

/**
 *  @todo
 *  Give remaining character length in input title
 *  Fix error message searched todos
 */

function App(): ReactElement {
  const [CHANGED_TRANSACTION, SET_CHANGED_TRANSACTION] = useState<any>();
  const [searchTodoInputValue, setSearchTodoInputValue] = useState("");

  localStorage.setItem("todos_data", JSON.stringify(TODOS_DATA));

  console.log({ 
    TODOS_DATA, 
    CHANGED_TRANSACTION,
    LOCAL_STORAGE_TODOS_DATA: JSON.parse(localStorage.getItem("todos_data") as string),
  });

  return (
    <>
      <GlobalsStyles />
      <Header cssXs={{ background: color.primary, height: 40 }}>
        {/* logo - brand */}
        <SearchbarTodos setSearchTodoInputValue={setSearchTodoInputValue} />
      </Header>
      <Aside>
        {/* optional */}
      </Aside>
      <Main>
        <Article title="active todos">
          <Title as={H1} text="My Day" />
          <Date text="Friday, June 3" />
          
          <FormAddTodo  
            TODOS_DATA={TODOS_DATA} 
            SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION} 
          />

          <Article title="active todos">
            <Title as={H2} text="Active Todos" />

            <br />

            <AllTodosList 
              searchTodoInputValue={searchTodoInputValue} 
              TODOS_DATA={TODOS_DATA} 
              SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
            />

            <SearchedTodosList 
              searchTodoInputValue={searchTodoInputValue} 
              TODOS_DATA={TODOS_DATA} 
              SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION} 
            />
          </Article>

          <br />

          <Article title="archived todos">
            <Title as={H2} text="Archived Todos" />

            <ArchivedTodosList 
              TODOS_DATA={TODOS_DATA}
              SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
            />
          </Article>
        </Article>
      </Main>
      <Footer>
        {/* logo - brand */}
        {/* author */}
        {/* contact author */}
      </Footer>
    </>
  );
}



export default App;
