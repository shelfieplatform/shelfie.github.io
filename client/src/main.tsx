import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("🚀 Main.tsx is loading!");

try {
  const rootElement = document.getElementById("root");
  console.log("Root element:", rootElement);
  
  if (rootElement) {
    const root = createRoot(rootElement);
    console.log("Creating React root...");
    root.render(<App />);
    console.log("✅ React app rendered successfully!");
  } else {
    console.error("❌ Root element not found!");
  }
} catch (error) {
  console.error("❌ Error rendering React app:", error);
}