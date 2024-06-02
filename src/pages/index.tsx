import { NextPage } from "next";
import Head from "next/head";
import TodoView from "../modules/todo/views/todoView";
const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Todo App</title>
    </Head>
    <TodoView />
  </>
);
export default IndexPage;
