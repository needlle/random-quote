import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Quote from "./components/Quote";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-full bg-slate-950/95">
        <Quote />
      </div>
    </QueryClientProvider>
  );
}

export default App;
