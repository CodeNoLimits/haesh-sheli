import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { InstallPrompt } from "@/components/InstallPrompt";
import Home from "@/pages/home";
import Store from "@/pages/store";
import About from "@/pages/about";
import Magazine from "@/pages/magazine";
import Join from "@/pages/join";
import Contact from "@/pages/contact";
import Checkout from "@/pages/checkout";
import Downloads from "@/pages/downloads";
import Product from "@/pages/product";
import BreslevStyle from "@/pages/breslevStyle";
import Subscription from "@/pages/subscription";
import SubscriptionManagement from "@/pages/subscription-management";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/store" component={Store} />
      <Route path="/about" component={About} />
      <Route path="/magazine" component={Magazine} />
      <Route path="/join" component={Join} />
      <Route path="/contact" component={Contact} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/subscription" component={Subscription} />
      <Route path="/subscription/manage" component={SubscriptionManagement} />
      <Route path="/product/:id" component={Product} />
      <Route path="/breslevstyle" component={BreslevStyle} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <CartProvider>
            <Toaster />
            <InstallPrompt />
            <Router />
          </CartProvider>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
