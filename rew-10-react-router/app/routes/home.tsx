import { Button } from "antd";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
    return (
       <>
          <h1 className="text-3xl">Hello</h1>

          <Button type="primary">Hello</Button>
       </>
    );
}
