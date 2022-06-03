import type { ReactElement } from "react";
import { useState } from "react";
import GlobalsStyles from "./styles/Globals.styled";
import { Article, Aside, Button, Div, Footer, Form, H1, H2, Header, Input, Main, P, Section, Small } from "./styles/mame-styled/core/HtmlTag";
import STYLES_CONFIG from "./styles/styles.config";
import TODOS_DATA from "./data/TODOS_DATA";
import { default as __RenderIf } from "./styles/mame-styled/core/utils/js-syntax/If";
import { default as __Map } from "./styles/mame-styled/core/utils/js-syntax/Map";
import FormAddToDo from "./components/FormAddToDo";
import AllTodoList from "./components/AllTodosList";
import SearchedTodosList from "./components/SearchedTodosList";
import MessageTodosNotShow from "./components/MessageTodosNotShow";
import Date from "./components/Date";
import Title from "./components/Title";
import SearchbarTodos from "./components/SearchbarTodos";

const { color } = STYLES_CONFIG;

function App(): ReactElement {
  const [TODO_DATA, SET_TODO_DATA] = useState({});
  const [SEARCH_TODOS_DATA, SET_SEARCH_TODOS_DATA] = useState([]);
  const [searchTodoInputValue, setSearchTodoInputValue] = useState("");

  return (
    <>
      <GlobalsStyles />
      <Header cssXs={{ background: color.primary, height: 40 }}>
        {/* logo - brand */}
        {/* <Input type="search" placeholder="search todo" onChange={searchTodo} /> */}
        <SearchbarTodos 
          setSearchTodoInputValue={setSearchTodoInputValue} 
          TODOS_DATA={TODOS_DATA} 
          SET_SEARCH_TODOS_DATA={SET_SEARCH_TODOS_DATA} 
        />
      </Header>
      <Aside>
        {/* optional */}
      </Aside>
      <Main>
        <Article>
          <Title text="My Day" />
          <Date text="Friday, June 3" />
          
          <FormAddToDo  TODOS_DATA={TODOS_DATA} SET_TODO_DATA={SET_TODO_DATA} />

          <Div>
            <MessageTodosNotShow TODOS_DATA={TODOS_DATA} />

            <AllTodoList 
              searchTodoInputValue={searchTodoInputValue} 
              TODOS_DATA={TODOS_DATA} 
              SET_TODO_DATA={SET_TODO_DATA}
            />

            <SearchedTodosList 
              searchTodoInputValue={searchTodoInputValue} 
              TODOS_DATA={TODOS_DATA} 
              SET_TODO_DATA={SET_TODO_DATA} 
              SEARCH_TODOS_DATA={SEARCH_TODOS_DATA as []} 
            />
          </Div>
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
