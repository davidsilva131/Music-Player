import { Outlet, useNavigate } from "react-router";
const Sidebar = () => {
  const navigate = useNavigate()
  const Links = [
    {
      image: "",
      text: "Discover",
      page: "/"
    },
    {
      image: "",
      text: "Arround You",
      page: "/arroundu"
    },
    {
      image: "",
      text: "Top Artists",
      page: "/artists"
    },
    {
      image: "",
      text: "Top Charts",
      page: "/charts"
    }
  ]

  const handlePage = (page) => {
    navigate(page)
  }
  return (
    <>
      <header className="w-60 h-screen flex flex-col object-left bg-black items-center py-10 gap-36">
        <aside className="text-emerald-400 font-serif text-3xl">MusicPlayer</aside>
        <aside>
          <ul className="text-white font-serif">
            {
              Links.map((link) => (
                <li onClick={() => { handlePage(link.page) }} className="hover:text-emerald-400 transition-all duration-500 cursor-pointer" key={link.text}>
                  <img src="" alt="" />
                  {link.text}
                </li>
              ))
            }
          </ul>
        </aside>
      </header>
      <Outlet />

    </>
  )
};

export default Sidebar;
