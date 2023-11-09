import React from "react";
import { BrowserRouter} from "react-router-dom";
import ClerkProviderWithRoutes from "./ClerkProviderWithRoutes";

const App = () => {
  return (
    <div className="w-min-[350px] ">
      <BrowserRouter>
        <ClerkProviderWithRoutes/>
      </BrowserRouter>
    </div>
  );
};

export default App;
