const Header = () => {
  return (
    <header className="flex justify-between items-center p-1.5">
      <h1>🍵Brussels Brewery</h1>
      <nav>
        <a href="#" className="mx-2.5 font-bold text-[20px] text-[#1e1e1e] no-underline hover:underline hover:text-gray-500">Menu</a>
        <a href="#" className="mx-2.5 font-bold text-[20px] text-[#1e1e1e] no-underline hover:underline hover:text-gray-500">About</a>
        <a href="#" className="mx-2.5 font-bold text-[20px] text-[#1e1e1e] no-underline hover:underline hover:text-gray-500">Locations</a>
        <a href="#" className="mx-2.5 font-bold text-[20px] text-[#1e1e1e] no-underline hover:underline hover:text-gray-500">Contact</a>
      </nav>
      <button className="orderButton">Order Online</button>
    </header>
  );
};

export default Header;