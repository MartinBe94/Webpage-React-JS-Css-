import React from 'react'
// import * as FaIcons from "react-icons/fa"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const Sidebardata =[
    {
        title: "Home",
        path: "/",
        icon: <IoIcons.IoIosHome />,
        cName: "nav-text",
      },
      {
        title:"About",
        path: "/about",
        icon: <IoIcons.IoIosInformationCircle/>,
        cName: "nav-text",
    },
    {
        title:"Contact",
        path: "/contact",
        icon: <IoIcons.IoIosContact />,
        cName: "nav-text",
    }
]