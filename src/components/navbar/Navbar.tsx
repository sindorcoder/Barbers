import { NavLink } from "react-router-dom"
import { Container } from "../../utils"

const Navbar = () => {
  return (
    <nav className="py-5">
        <Container>
        <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[40px] font-normal leading-[60px] text-[#B5AF93] ">LOGO</h1>
            </div>
            <div>
              <ul className="flex items-center gap-[52px]">
                <li>
                  <NavLink to={"/"} className=" text-[23px] font-normal leading-[34px] text-black hover:text-[#B5AF93]">
                    Home
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to={"/"} className=" text-[23px] font-normal leading-[34px] text-black hover:text-[#B5AF93]">
                    Our Teams
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to={"/"} className=" text-[23px] font-normal leading-[34px] text-black hover:text-[#B5AF93]">
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>
        </div>
        </Container>
    </nav>
  )
}

export default Navbar