import React from "react";
const SidebarItem = ({Icon, title}) => {
    return(
        <div className="flex flex-col cursor-pointer hover:bg-[#0F0F0F] rounded-md px-2 items-center py-4">
            <Icon style={{ fontSize: 30 }} />
            <p className="text-[9px]">{title}</p>
        </div>
    )
}

export default SidebarItem;