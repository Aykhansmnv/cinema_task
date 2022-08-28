import { lazy, Suspense } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

function Movie() {
  return (
    <div>
      <Suspense feelback={<h1>Loading...</h1>}>
        <Header />
      </Suspense>
      <Suspense feelback={<h1>Loading...</h1>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Movie;
