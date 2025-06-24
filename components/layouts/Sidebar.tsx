import { GoSidebarExpand } from "react-icons/go";

export default function Sidebar() {
  return (
    <aside className="border-r border-neutral/60 fixed top-16 left-0 w-[220px] h-[calc(100vh-4rem)] p-4 z-40">
      <div className="flex justify-between items-center">
        <h1 className="text-secondary font-semibold">Menu</h1>
        <div className="text-secondary">
          <GoSidebarExpand size={20} />
        </div>
      </div>
    </aside>
  );
}
