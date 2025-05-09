export default function Sidebar() {
  return (
    <aside class="w-64 bg-gray-100 p-4 border-r border-gray-300">
      <nav class="space-y-2 text-sm">
        <a href="/dashboard" class="block text-gray-800 hover:underline">
          Dashboard
        </a>
        <a href="/account" class="block text-gray-800 hover:underline">
          Account
        </a>
        <a href="/settings" class="block text-gray-800 hover:underline">
          Settings
        </a>
      </nav>
    </aside>
  );
}
