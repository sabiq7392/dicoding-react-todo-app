import GlobalsStyles from "./styles/Globals.styled";
import { Article, Aside, Button, Div, Footer, Form, H1, H2, Header, Input, Main, P, Section, Small } from "./styles/mame-styled/core/HtmlTag";
import { AiOutlinePlus } from "react-icons/ai";
import STYLES_CONFIG from "./styles/styles.config";
import { ReactElement, useEffect, useId, useRef, useState } from "react";
import TODOS_DATA from "./data/TODOS_DATA";
import { default as RenderIf } from "./styles/mame-styled/core/utils/js-syntax/If";

const { spacing } = STYLES_CONFIG;

function App(): ReactElement {
  const form = useRef<HTMLFormElement>();
  const title = useRef<HTMLInputElement>();
  const todosContainer = useRef<HTMLDivElement>();
  const [TODO_DATA, SET_TODO_DATA] = useState({});

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
    console.log({ message: "successfully deleted todo" })
  };

  return (
    <>
      <GlobalsStyles />
      <Header>
        {/* logo - brand */}
        {/* searcbar */}
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
            <Input placeholder="Add a task" type="text" ref={title} required />
          </Form>
          <Div ref={todosContainer}>
            <RenderIf is={TODOS_DATA.length === 0}>
              <P>There is no todos to show</P>
            </RenderIf>

            <RenderIf is={TODOS_DATA.length > 0}>
              {TODOS_DATA.map((({ id, title, body, createdAt }, index) => 
                <Section key={index}>
                  <H2>{title}</H2>
                  <P>{body}</P>
                  <Small>{createdAt}</Small>
                  <Button onClick={() => deleteTodo(id)}>Delete</Button>
                </Section>
              ))}
            </RenderIf>
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
