import AppRouter from "./route/index.js";

import logo from "@/assets/logo.png";

const App = () => {
  return (
    <>
      <div className="relative">
        <a href="https://chaicode.com/" target="_blank">
          <img
            src={logo}
            alt=""
            className="absolute  right-6 bottom-6 rounded-lg"
            width={50}
            height={50}
          />
        </a>
        <AppRouter />
      </div>
    </>
  );
};

export default App;
