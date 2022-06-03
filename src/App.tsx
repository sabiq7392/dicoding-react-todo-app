import GlobalsStyles from "./styles/Globals.styled";
import { Article, Aside, Button, Div, Footer, Form, H1, Header, Input, Main, P, Section, Small } from "./styles/mame-styled/core/HtmlTag";
import { AiOutlinePlus } from "react-icons/ai";
import STYLES_CONFIG from "./styles/styles.config";
import { useEffect, useRef, useState } from "react";
import TODOS_DATA from "./data/TODOS_DATA";
import { default as RenderIf } from "./styles/mame-styled/core/utils/js-syntax/If";

const { spacing } = STYLES_CONFIG;

function App() {
  const form = useRef<HTMLFormElement>();
  const title = useRef<HTMLInputElement>();
  const todosContainer = useRef<HTMLDivElement>();
  const [TODO_DATA, SET_TODO_DATA] = useState({});

  useEffect(() => {
    (form.current as HTMLFormElement).onsubmit = async (e) => {
      e.preventDefault();
      console.log("kontol");
      SET_TODO_DATA(TODOS_DATA.push({ title: (title.current as HTMLInputElement).value }));
      // TODOS_DATA.push(TODO_DATA);
      // TODOS_DATA.push({ title: (title.current as HTMLInputElement).value });
    };
  }, []);

  console.log(TODOS_DATA.length);

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
          <Form ref={form} cssXs={{ background: "#eee", border: "1px solid red", display: "flex", alignItems: "center", padding: spacing._3 }}>
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
              {TODOS_DATA.map(((data, index) => 
                <p key={index}>{data.title}</p>
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
