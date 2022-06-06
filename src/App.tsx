import type { ReactElement,  } from "react";
import { useState } from "react";
import GlobalsStyles from "./styles/Globals.styled";
import { Article, H1, Header, Main } from "./styles/mame-styled/core/HtmlTag";
import TODOS_DATA from "./data/TODOS_DATA";
import AllTodosList from "./components/templates/AllTodosList";
import SearchedTodosList from "./components/templates/SearchedTodosList";
import Date from "./components/atoms/Date";
import Title from "./components/atoms/Title";
import ArchivedTodosList from "./components/templates/ArchivedTodosList";
import FormAddTodo from "./components/organisms/FormAddTodo";
import Appbar from "./components/organisms/Appbar";
import Footer from "./components/organisms/Footer";
import Sidebar from "./components/organisms/Sidebar";
import STYLES_CONFIG from "./styles/styles.config";
import { CSSProperties } from "styled-components";

const { spacing } = STYLES_CONFIG;

function App(): ReactElement {
  const [CHANGED_TRANSACTION, SET_CHANGED_TRANSACTION] = useState<any>();
  const [searchTodoInputValue, setSearchTodoInputValue] = useState("");

  localStorage.setItem("todos_data", JSON.stringify(TODOS_DATA));

  console.log({ 
    TODOS_DATA, 
    CHANGED_TRANSACTION,
    LOCAL_STORAGE_TODOS_DATA: JSON.parse(localStorage.getItem("todos_data") as string),
  });

  interface CssXs {
    firstArticle: CSSProperties;
  }

  const cssXs: CssXs = {  
    firstArticle: {
      display: "grid",
      gap: spacing._8,
    }
  };

  return (
    <>
      <GlobalsStyles />
      <Appbar setSearchTodoInputValue={setSearchTodoInputValue} />
      <Sidebar />
      
      <Main cssXs={{ padding: spacing._8 }}>
        <Article title="active todos" cssXs={cssXs.firstArticle}>
          <Header>
            <Title as={H1} text="My Day" />
            <Date text="Friday, June 3" />
          </Header>
          
          <FormAddTodo  
            TODOS_DATA={TODOS_DATA} 
            SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION} 
            searchTodoInputValue={searchTodoInputValue}
          />

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

          <ArchivedTodosList 
            TODOS_DATA={TODOS_DATA}
            SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
            searchTodoInputValue={searchTodoInputValue} 
          />
        </Article>
      </Main>

      <Footer />
    </>
  );
}



export default App;
