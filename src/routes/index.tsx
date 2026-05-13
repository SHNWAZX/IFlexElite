import { createFileRoute } from "@tanstack/react-router";
import SlideDeck from "@/components/SlideDeck";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <SlideDeck />;
}
