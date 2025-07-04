import Introduction from "@/pages/home/introduction/introduction";
import ProductList from "@/pages/home/products/productList";
import Search from "@/pages/home/search/search";

export default function Home() {
  return (
    <div className="overflow-y-auto overflow-x-hidden ">
      <div id="home">
        <Introduction />
      </div>
      <div id="search">
        <Search />
      </div>

      <div id="products">
        <ProductList />
      </div>
    </div>
  );
}
