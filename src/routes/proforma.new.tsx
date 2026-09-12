import { createFileRoute } from "@tanstack/react-router";
import { SmartFormPage } from "@/components/pages";

export const Route = createFileRoute("/proforma/new")({
  head: () => ({ meta: [
    { title: "New Proforma — SRIVAARI AUTOMOBILES" },
    { name: "description", content: "Prepare a connected vehicle proforma invoice." },
    { property: "og:title", content: "New Proforma — SRIVAARI AUTOMOBILES" },
    { property: "og:description", content: "Prepare a connected vehicle proforma invoice." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() { return <SmartFormPage type="proforma"/>; }
