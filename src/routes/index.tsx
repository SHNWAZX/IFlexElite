import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ShnwazDev — Web Developer & UI/UX Designer" },
      {
        name: "description",
        content:
          "ShnwazDev — web developer & UI/UX designer, founder of Saya Project. Building fast, beautiful, conversion-focused web and Telegram products.",
      },
      { property: "og:title", content: "ShnwazDev — Portfolio" },
      {
        property: "og:description",
        content: "Crafting interfaces that feel inevitable.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://avatars.githubusercontent.com/u/271950542?v=4",
      },
    ],
  }),
});

function Index() {
  return <Portfolio />;
}
