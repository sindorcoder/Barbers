import { FaServicestack } from "react-icons/fa"; 
// eslint-disable-next-line react/prop-types, no-unused-vars
import { AiOutlineUser } from "react-icons/ai"; 
import { Layout, Button,  Modal, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/slices/authSlice";
const { Sider } = Layout;

const Sidebar = ({ collapsed } : {collapsed: boolean}) => {
  const dispatch = useDispatch()

  const {token} = useSelector((state: any) => state.auth)

  const role = JSON.parse(atob(token.split(".")[1]))?.role

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Do you really want to log out?');

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('Checkout completed successfully');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      dispatch(signOut())

    }, 1500)
  };


  const handleCancel = () => {
    setOpen(false);
  };

  const handleRemoveUser =  () => {
    showModal()
  }
  return (
    <>
      <Modal
        title="Logout"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    <Sider trigger={null} collapsible collapsed={collapsed} className="px-[5px] py-[10px] min-h-screen flex flex-col ">
      
      <Menu
      className="flex-1 w-full min-h-[90%]"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={ role === "owner" || role === "manager" ?
          [
            {
              key: "1",
              icon: <AiOutlineUser size={18} />,
              label: <NavLink to={""}>Users</NavLink>,
            },
            {
              key: "2",
              icon: <AiOutlineUser size={18} />,
              label: <NavLink to={"barbers"}>Barbers</NavLink>,
            },
            {
              key: "3",
              icon: <FaServicestack size={18} /> ,
              label: <NavLink to={"order"}>Services</NavLink>,
            }
          ]
          : 
          [
            {
              key: "2",
              icon: <AiOutlineUser size={18} />,
              label: <NavLink to={"barbers"}>Barbers</NavLink>,
            }
          ]
        }
      />
      <Button className="bg-red-500 w-full p-5 mb-[20px]" onClick={handleRemoveUser} type="primary"><LiaDoorOpenSolid size={"24px"} />{!collapsed && "Sign Out"}</Button>
    </Sider>
    </>
  )
}

export default Sidebar;