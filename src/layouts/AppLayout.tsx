import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

type Props = {
  children: any;
};

export default function AppLayout({ children }: Props) {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />

      <div class="flex flex-1">
        <Sidebar />

        <main class="flex-1 p-4 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
