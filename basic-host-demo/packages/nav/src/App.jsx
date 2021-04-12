import React from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));

function HeaderWrapper() {
  return (
    <React.Suspense fallback={<div>Header loading</div>}>
      <Header />
    </React.Suspense>
  )
}

function FooterWrapper() {
  return (
    <React.Suspense fallback={<div>Footer loading</div>}>
      <Footer />
    </React.Suspense>
  )
}

const App = () => (
  <div>
    <HeaderWrapper />
    <FooterWrapper />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
