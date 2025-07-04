import Introduction from "@/pages/home/introduction/introduction";
import Search from "@/pages/home/search/search";

export default function Home() {
  return (
    <div className="overflow-y-auto overflow-x-hidden pt-[70px]">
      <div id="home">
        <Introduction />
      </div>
      <div id="search">
        <Search />
      </div>
    </div>
  );
}
