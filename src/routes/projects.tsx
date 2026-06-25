import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Kinikh Infrastructure" },
      {
        name: "description",
        content:
          "Browse Kinikh Infrastructure's portfolio of residential, commercial, land, and infrastructure projects across India.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return <SiteLayout>{null}</SiteLayout>;
}
