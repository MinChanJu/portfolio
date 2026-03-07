import { Home } from "@pages/home";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

import "./styles/index.css";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 print:bg-white">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 p-3 md:p-5 print:p-0">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
