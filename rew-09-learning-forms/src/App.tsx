import { Calendar, CheckCircle, CheckSquare, File, Files, Group, Image, ListCheck, PenBox, Settings, type LucideProps } from "lucide-react"
import type React from "react"

export default function App(){
  return(
    <></>
  )
}

type MenuItem = {
  title : string
  icon ?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  url : string
}

type MenuGroup = {
  label : string
  items : MenuItem []
}

const MENU: MenuGroup[] = [
  {
    label : "Form with UI Component",
    items : [
      {title : "Inputs", url : "", icon : PenBox},
      {title : "Check Box", url : "", icon : CheckSquare},
      {title : "Radio Group", url : "", icon : CheckCircle},
      {title : "Calendar", url : "", icon : Calendar},
      {title : "Selects", url : "", icon : ListCheck}
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

function AppSideBar() {
  return(
    <></>
  )
}