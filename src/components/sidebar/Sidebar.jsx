import { Outlet, useNavigate } from "react-router";
const Sidebar = () => {
  const navigate = useNavigate()
  const Links = [
    {
      image: "M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z",
      text: "Discover",
      page: "/"
    },
    {
      image: "M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z",
      text: "Arround You",
      page: "/arroundu"
    },
    {
      image: "m23.22 5.743-3.011-4.068a4.005 4.005 0 0 0 -3.254-1.675h-9.91a4 4 0 0 0 -3.245 1.656l-3.065 4.097a3.993 3.993 0 0 0 .123 4.784l8.792 12.328a2.985 2.985 0 0 0 2.35 1.135 3.006 3.006 0 0 0 2.378-1.175l8.722-12.191a4 4 0 0 0 .12-4.891zm-4.628-2.892 3.018 4.078c.016.022.02.048.036.071h-4.892l-1.428-5h1.629a2.012 2.012 0 0 1 1.637.851zm-6.592 16.267-2.7-10.118h5.4zm-2.674-12.118 1.428-5h2.492l1.428 5zm-3.909-4.163a2.007 2.007 0 0 1 1.628-.837h1.629l-1.428 5h-4.928c.014-.022.018-.049.034-.07zm-2.969 6.488a1.9 1.9 0 0 1 -.185-.325h4.969l2.994 11.23zm11.323 10.915 3-11.24h4.986a2.1 2.1 0 0 1 -.243.421z",
      text: "Top Artists",
      page: "/artists"
    },
    {
      image: "M14,4.5c0,.828-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5,.671-1.5,1.5-1.5,1.5,.671,1.5,1.5Zm10,10.5c0-1.654-1.346-3-3-3h-3c-1.654,0-3,1.346-3,3v4.05c-.161-.033-.328-.05-.5-.05-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5v-6.5c0-.551,.448-1,1-1h3c.552,0,1,.449,1,1v4.05c-.161-.033-.328-.05-.5-.05-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5v-6.5Zm-13.242,9H4v-2H2v2H0V10H2v2H4v-2h2v12h4.028c.081,.734,.339,1.415,.73,2ZM2,14v2H4v-2H2Zm2,6v-2H2v2H4ZM24,3V11.025c-.584-.442-1.257-.773-2-.924v-3.687l-4,4-2.053-2.052-4.244,3.638h2.323c-.442,.584-.773,1.257-.924,2h-5.101V3C8,1.345,9.346,0,11,0h10C22.654,0,24,1.345,24,3Zm-2,.586v-.586c0-.551-.448-1-1-1H11c-.552,0-1,.449-1,1v7.826l6.052-5.188,1.947,1.948,4-4Z",
      text: "Top Charts",
      page: "/charts"
    }
  ]

  const handlePage = (page) => {
    navigate(page)
  }
  return (
    <>
      <header className="w-full h-20 p-5 md:w-60 md:h-screen flex md:flex-col justify-center md:justify-start md:py-10 bg-black items-center gap-36">
        <aside className="hidden md:block text-emerald-400 font-serif text-lg md:text-3xl">MusicPlayer</aside>
        <aside>
          <ul className=" flex flex-row md:flex-col gap-10 text-white font-serif">
            {
              Links.map((link) => (
                <li onClick={() => { handlePage(link.page) }} className="flex flex-col md:flex-row md:gap-5 items-center hover:text-emerald-400 transition-all duration-500 cursor-pointer" key={link.text}>
                  <svg className=" fill-white hover:fill-emerald-400 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16"><path d={link.image} /></svg>
                  <h3 className="text-center gont-serif text-xs md:text-base">{link.text}</h3>
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
