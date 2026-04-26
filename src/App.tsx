import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "sonner";

import Home from "@/pages/home";
import Services from "@/pages/services";
import Gallery from "@/pages/gallery";
import Testimonials from "@/pages/testimonials";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </WouterRouter>
      <Toaster
        richColors
        position="bottom-right"
        toastOptions={{ style: { fontFamily: "Inter, sans-serif" } }}
      />
    </>
  );
}
