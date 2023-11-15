import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./page/Landing";
import NavBar from "./components/NavBar";
import Copyrigth from "./components/Copyright";
import CalorieCalculator from "./page/CalorieCalculator";
import Suscripcion from "./page/Suscripcion";
import WhatsappBubble from "./components/WhatsappBubble";
import ScrollToTop from "./components/ScrollToTop";
import { ClerkProvider, SignedIn } from "@clerk/clerk-react";
import { neobrutalism } from "@clerk/themes";
import { esES } from "@clerk/localizations";
import SingInPage from "./page/SingInPage";
import SingUpPage from "./page/SingUpPage";
import Rutinas from "./page/Rutinas";
import Nutricion from "./page/Nutricion";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <div className="w-min-[350px] ">
      <ClerkProvider
        appearance={{
          baseTheme: neobrutalism,
        }}
        localization={esES}
        publishableKey={clerkPubKey}
        // navigate={(to) => navigate(to)}
      >
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/inicio_sesión" element={<SingInPage />} />
          <Route path="/registro_usuario" element={<SingUpPage />} />

          <Route
            element={
              <>
                <SignedIn>
                  <Route path="/sign-in" element={<Landing />}></Route>
                </SignedIn>
              </>
            }
          />
          <Route path="/rutinas" element={<Rutinas />}></Route>
          <Route path="/nutricion" element={<Nutricion />}></Route>
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
