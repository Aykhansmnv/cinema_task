import { lazy, Suspense } from "react";
const Header = lazy(() => import("../components/Header"));
const Content = lazy(() => import("../components/Content"));
const Footer = lazy(() => import("../components/Footer"));


function Home() {
  return (
    <div>
      <Suspense feelback={<h1>Loading...</h1>}>
        <Header/>
      </Suspense>
      <Suspense feelback={<h1>Loading...</h1>}>
        <Content/>
      </Suspense>
      <Suspense feelback={<h1>Loading...</h1>}>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default Home;
