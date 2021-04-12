import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const Header = React.lazy(() => import("mf-nav/Header"));
const Footer = React.lazy(() => import("mf-nav/Footer"));

class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading fallback header</div>}>
          <div>Fallback Header</div>
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Header loading</div>}>
        <Header />
      </React.Suspense>
    );
  }
}

class FooterWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading fallback footer</div>}>
          <div>Fallback Footer</div>
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Footer loading</div>}>
        <Footer />      
      </React.Suspense>
    );
  }
}

const App = () => (
  <div>
    <HeaderWrapper />
    <div>Hi there, I'm React from React.</div>
    <FooterWrapper />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
