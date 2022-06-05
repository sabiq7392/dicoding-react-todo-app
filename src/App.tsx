import type { ReactElement } from "react";
import { useState } from "react";
import GlobalsStyles from "./styles/Globals.styled";
import { Article, Aside, Footer, H1, H2, Header, Main } from "./styles/mame-styled/core/HtmlTag";
import STYLES_CONFIG from "./styles/styles.config";
import TODOS_DATA from "./data/TODOS_DATA";
import FormAddToDo from "./components/organisms/FormAddToDo";
import AllTodosList from "./components/organisms/AllTodosList";
import SearchedTodosList from "./components/organisms/SearchedTodosList";
import MessageNotFoundAnyTodos from "./components/molecules/MessageNotFoundAnyTodos";
import Date from "./components/atoms/Date";
import Title from "./components/atoms/Title";
import SearchbarTodos from "./components/molecules/SearchbarTodos";
import ArchivedTodosList from "./components/organisms/ArchivedTodosList";

const { color } = STYLES_CONFIG;

function App(): ReactElement {
  const [, SET_TODO_DATA] = useState({});
  const [SEARCHED_TODOS_DATA, SET_SEARCHED_TODOS_DATA] = useState([]);
  const [searchTodoInputValue, setSearchTodoInputValue] = useState("");

  localStorage.setItem("todos_data", JSON.stringify(TODOS_DATA));

  console.log({ 
    SEARCHED_TODOS_DATA, 
    TODOS_DATA, 
    LOCAL_STORAGE_TODOS_DATA: JSON.parse(localStorage.getItem("todos_data") as string) 
  });

  return (
    <>
      <GlobalsStyles />
      <Header cssXs={{ background: color.primary, height: 40 }}>
        {/* logo - brand */}
        <SearchbarTodos 
          setSearchTodoInputValue={setSearchTodoInputValue} 
          TODOS_DATA={TODOS_DATA} 
          SET_SEARCHED_TODOS_DATA={SET_SEARCHED_TODOS_DATA} 
        />
      </Header>
      <Aside>
        {/* optional */}
      </Aside>
      <Main>
        <Article>
          <Title as={H1} text="My Day" />
          <Date text="Friday, June 3" />
          
          <FormAddToDo  
            TODOS_DATA={TODOS_DATA} 
            SET_TODO_DATA={SET_TODO_DATA} 
          />

          <Article title="active todos">
            <Title as={H2} text="Active Todos" />

            <MessageNotFoundAnyTodos 
              TODOS_DATA={TODOS_DATA} 
              SEARCHED_TODOS_DATA={SEARCHED_TODOS_DATA}
              searchTodoInputValue={searchTodoInputValue}
            />

            <br />

            <AllTodosList 
              searchTodoInputValue={searchTodoInputValue} 
              TODOS_DATA={TODOS_DATA} 
              SET_TODO_DATA={SET_TODO_DATA}
            />

            <SearchedTodosList 
              searchTodoInputValue={searchTodoInputValue} 
              TODOS_DATA={TODOS_DATA} 
              SET_TODO_DATA={SET_TODO_DATA} 
              SEARCHED_TODOS_DATA={SEARCHED_TODOS_DATA as []} 
            />
          </Article>

          <br />

          <Article title="archived todos">
            <Title as={H2} text="Archived Todos" />

            <ArchivedTodosList 
              TODOS_DATA={TODOS_DATA}
              SET_TODO_DATA={SET_TODO_DATA}
            />

            {/* <ArchivedTodosList /> */}
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
