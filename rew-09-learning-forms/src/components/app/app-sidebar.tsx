import { Calendar, CheckCircle, CheckSquare, ChevronDown, File, Files, Flag, Group, House, Image, ListCheck, PenBox, Settings } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { Link } from "react-router"
import type { MenuGroup } from "@/lib/type"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { useState } from "react"
import { useAppTitle } from "@/lib/context/app-title-context"

export default function AppSideBar() {

  const [selected, setSelected] = useState(0)
  const {setTitle} = useAppTitle()

  return(
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to={``}><House/> Using Forms</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {MENU.map((group, groupIndex)=> 
          <Collapsible key={`group-${groupIndex + 1}`} open={selected == groupIndex} className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel onClick={() => setSelected(groupIndex)} asChild>
                <CollapsibleTrigger>
                  {group.label}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item, itemIndex) =>
                      <SidebarMenuItem key={`item-${groupIndex +1}-${itemIndex +1}`}>
                        <SidebarMenuButton asChild>
                          <Link onClick={() => setTitle(`Learning ${item.title}`)} to={item.url} >
                            {item.icon && <item.icon/>}
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem> 
                    )}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        )}
      </SidebarContent>
    </Sidebar>
  )
}

const MENU: MenuGroup[] = [
    {
      label : "Form with UI Component",
      items : [
        {title : "Inputs", url : "/basic/inputs", icon : PenBox},
        {title : "Check Box", url : "basic/checks", icon : CheckSquare},
        {title : "Radio Group", url : "basic/radio", icon : CheckCircle},
        {title : "Calendar", url : "/basic/date-picker", icon : Calendar},
        {title : "Selects", url : "/basic/select", icon : ListCheck},
        {title : "Using all", url : "/basic/all", icon : Flag}
      ]
    },
    {
      label : "Using Files",
      items : [
        {title : "Text File", url : "", icon : File},
        {title : "Single Image File", url : "", icon : Image},
        {title : "Multiple Image Files", url : "", icon : Files},
      ]
    },
    {
      label : "Nested Forms",
      items : [
        {title : "Form with Items", url : "", icon : Group},
        {title : "Dynamic Form Group", url : "", icon : Settings}
      ]
    }
  ]
  