import { Stack, Icon } from "@chakra-ui/react";
import { CiSettings } from "react-icons/ci";
import { GrUserAdmin } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { RiBarChart2Line } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Sidepanel = () => {
  return (
    <div className="bg-[#003362] w-[24%] h-auto px-2 py-4 ">
    <Stack spacing="8px" className="  px-4 py-5 h-full">
      <p className="text-white">
        <Icon className="mr-4 "  color="white" as={IoHomeOutline} />
        Home
      </p>
      <Link to="/orders">
      <p className="text-white">
        <Icon className="mr-4"  color="white" as={IoDocumentTextOutline} />Orders
      </p></Link>
      <p className="text-white">
        <Icon className="mr-4" color="white" as={IoLocationOutline} />
        Locations
      </p>
      <p className="text-white">
        <Icon className="mr-4"  color="white" as={RiBarChart2Line} />Analytics
      </p>
      <p className="text-white">
        <Icon className="mr-4"  color="white" as={SlSpeedometer} />
        Operations
      </p>
      <p className="text-white">
        <Icon className="mr-4"  color="white" as={IoFastFoodOutline} />
        Menus
      </p>
      <p className="text-white">
        <Icon className="mr-4"  color="white" as={IoPricetagOutline} />
        Products
      </p>
      <p className="text-white">
        <Icon className="mr-4"  color="white" as={GrUserAdmin} />
        Admin
      </p>
      <p className="text-white">
        <Icon className="mr-4"  color="white" as={CiSettings} />
        Settings
      </p>
    </Stack>
  </div>
  )
}

export default Sidepanel