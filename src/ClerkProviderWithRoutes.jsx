import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./page/Landing";
import NavBar from "./components/NavBar";
import Copyrigth from "./components/Copyright";
import CalorieCalculator from "./page/CalorieCalculator";
import Suscripcion from "./page/Suscripcion";
import WhatsappBubble from "./components/WhatsappBubble";
import ScrollToTop from "./components/ScrollToTop";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import SingPage from "./page/SingPage";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <div className="w-min-[350px] ">
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
      >
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/inicio_sesión" element={<SingPage path="/sign-in" />} />
          <Route
            path="/registro_usuario"
            element={<SignUp path="/sign-up" />}
          />
          <Route
            element={
              <>
                <SignedIn>
                <Route path="/sign-in" element={<Landing />}></Route>
                </SignedIn>
                <SignedOut>
                <Route path="/" element={<Landing />}></Route>
                </SignedOut>
                
              </>
            }
          />
          <Route
            path="/calculadora_de_calorias_y_macros"
            element={<CalorieCalculator />}
          ></Route>
          <Route path="/suscripcion" element={<Suscripcion />}></Route>
        </Routes>
        <WhatsappBubble />
        <Copyrigth />
      </ClerkProvider>
    </div>
  );
};

export default ClerkProviderWithRoutes;
