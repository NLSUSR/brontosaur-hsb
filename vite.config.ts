import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  base:"/brontosaur-hsb",
  plugins: [react()],
});
