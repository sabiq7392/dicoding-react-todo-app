import GlobalsStyles from "./styles/Globals.styled";
import { Article, Aside, Button, Div, Footer, Form, H1, H2, Header, Input, Main, P, Section, Small } from "./styles/mame-styled/core/HtmlTag";
import { AiOutlinePlus } from "react-icons/ai";
import STYLES_CONFIG from "./styles/styles.config";
import { ReactElement, useId, useRef, useState } from "react";
import TODOS_DATA, { Todos } from "./data/TODOS_DATA";
import { default as __RenderIf } from "./styles/mame-styled/core/utils/js-syntax/If";
import { default as __Map } from "./styles/mame-styled/core/utils/js-syntax/Map";

const { spacing, color } = STYLES_CONFIG;

function App(): ReactElement {
  const form = useRef<HTMLFormElement>();
  const title = useRef<HTMLInputElement>();
  const body = useRef<HTMLInputElement>();
  const search = useRef<HTMLInputElement>();
  const todosContainer = useRef<HTMLDivElement>();
  const [TODO_DATA, SET_TODO_DATA] = useState({});
  const [SEARCH_TODO_DATA, SET_SEARCH_TODO_DATA] = useState([]);
  const [searchTodoInputValue, setSearchTodoInputValue] = useState("");

  const addTodo = (e: any) => {
    e.preventDefault();

    SET_TODO_DATA(TODOS_DATA.push({
      id: new Date().toString(),
      title: (title.current as HTMLInputElement).value,
      body: "test ini adalah body",
      archived: false,
      createdAt: new Date().toString(),
    }));

    console.log(TODOS_DATA);
    console.log({ message: "successfully added todo" });
  };

  const deleteTodo = (id: string) => {
    const indexOfTodo = TODOS_DATA.findIndex(todo => todo.id === id);
    SET_TODO_DATA(TODOS_DATA.splice(indexOfTodo, 1));

    console.log(TODOS_DATA);
    console.log({ message: "successfully deleted todo" });
  };

  const searchTodo = () => {
    const searchValue = (search.current as HTMLInputElement).value.toLowerCase();

    const findByTitle = TODOS_DATA.filter(todo => todo.title.toLowerCase().includes(searchValue));

    setSearchTodoInputValue(searchValue);
    SET_SEARCH_TODO_DATA(findByTitle as []);
    console.log(searchValue === "" ? "nothing to look for" : findByTitle);
  };

  return (
    <>
      <GlobalsStyles />
      <Header cssXs={{ background: color.primary, height: 40 }}>
        {/* logo - brand */}
        <Input type="search" placeholder="search todo" ref={search} onChange={searchTodo} />
      </Header>
      <Aside>
        {/* optional */}
      </Aside>
      <Main>
        <Article>
          <H1>My Day</H1>
          <Small>Friday, June 3</Small>
          <Form ref={form} onSubmit={(e) => addTodo(e)} cssXs={{ background: "#eee", border: "1px solid red", display: "flex", alignItems: "center", padding: spacing._3 }}>
            <Button type="submit">
              <AiOutlinePlus size={24} />
            </Button>
            <Input placeholder="Todo title" type="text" ref={title} required />
            <Input placeholder="Todo body" type="text" ref={body} disabled />
          </Form>
          <Div ref={todosContainer}>
            <__RenderIf is={TODOS_DATA.length === 0}>
              <P>There is no todos to show</P>
            </__RenderIf>

            <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue === ""}>
              {TODOS_DATA.map((({ id, title, body, createdAt }, index) => 
                <Section key={index}>
                  <H2>{title}</H2>
                  <P>{body}</P>
                  <Small>{createdAt}</Small>
                  <Button onClick={() => deleteTodo(id)}>Delete</Button>
                </Section>
              ))}
            </__RenderIf>

            <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue !== ""}>
              <__Map data={SEARCH_TODO_DATA} render={(({ id, title, body, createdAt }: Todos, index: number) => 
                <Section key={index}>
                  <H2>{title}</H2>
                  <P>{body}</P>
                  <Small>{createdAt}</Small>
                  <Button onClick={() => deleteTodo(id)}>Delete</Button>
                </Section>
              )}/>
            </__RenderIf>
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
