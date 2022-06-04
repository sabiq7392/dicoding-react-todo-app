import type { ReactElement } from "react";
import { useState } from "react";
import GlobalsStyles from "./styles/Globals.styled";
import { Article, Aside, Div, Footer, H1, H2, Header, Main, Section, P, Small, Button } from "./styles/mame-styled/core/HtmlTag";
import STYLES_CONFIG from "./styles/styles.config";
import TODOS_DATA from "./data/TODOS_DATA";
import FormAddToDo from "./components/FormAddToDo";
import AllTodoList from "./components/AllTodosList";
import SearchedTodosList from "./components/SearchedTodosList";
import MessageTodosNotShow from "./components/MessageTodosNotShow";
import Date from "./components/Date";
import Title from "./components/Title";
import SearchbarTodos from "./components/SearchbarTodos";
import ArchivedTodosList from "./components/ArchivedTodosList";
import Todo from "./components/Todo";

const { color } = STYLES_CONFIG;

function App(): ReactElement {
  const [TODO_DATA, SET_TODO_DATA] = useState({});
  const [SEARCH_TODOS_DATA, SET_SEARCH_TODOS_DATA] = useState([]);
  const [ARCHIVED_TODOS_DATA, SET_TODOS_DATA] = useState([]);
  const [searchTodoInputValue, setSearchTodoInputValue] = useState("");

  return (
    <>
      <GlobalsStyles />
      <Header cssXs={{ background: color.primary, height: 40 }}>
        {/* logo - brand */}
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
          <Title as={H1} text="My Day" />
          <Date text="Friday, June 3" />
          
          <FormAddToDo  
            TODOS_DATA={TODOS_DATA} 
            SET_TODO_DATA={SET_TODO_DATA} 
          />

          <Article title="active todos">
            <Title as={H2} text="Active Todos" />

            <MessageTodosNotShow 
              TODOS_DATA={TODOS_DATA} 
              SEARCH_TODOS_DATA={SEARCH_TODOS_DATA}
            />

            <br />

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
          </Article>

          <br />

          <Article title="archived todos">
            <Title as={H2} text="Archived Todos" />

            {ARCHIVED_TODOS_DATA.map((data: { title: string }, index) => 
              <p key={index}>{data.title}</p>
            )}

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
