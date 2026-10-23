import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <main className="container notfound">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lead">The page you are looking for doesn&apos;t exist or has moved.</p>
        <a href="/" className="btn btn-primary">Back to Apexnet</a>
      </main>
      <Footer />
    </>
  );
}
