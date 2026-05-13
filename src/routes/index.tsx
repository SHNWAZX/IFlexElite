import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IFlexElite — Web Developer & UX Strategist" },
      {
        name: "description",
        content:
          "IFlexElite — independent web developer & UX strategist crafting fast, beautiful, conversion-focused websites.",
      },
      { property: "og:title", content: "IFlexElite — Portfolio" },
      {
        property: "og:description",
        content: "Crafting interfaces that feel inevitable.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://avatars.githubusercontent.com/u/190835907?v=4",
      },
    ],
  }),
});

function Index() {
  return <Portfolio />;
}
