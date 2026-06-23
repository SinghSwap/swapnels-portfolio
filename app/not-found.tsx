import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-6 pt-24">
      <div className="text-center">
        <p className="text-7xl font-bold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">
          This page took a different journey.
        </h1>
        <p className="mt-3 text-muted-foreground">
          The link is broken or the page has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Back home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
