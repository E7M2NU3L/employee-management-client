import { Search, TextCursor } from "lucide-react"
import { Badge } from "../ui/badge"

const Pointer = ({text} : {
    text : string
}) => {
  return (
    <div className="relative">
        <Search className="h-4 w-4 absolute -top-5 -left-3" />
        <Badge variant={"outline"} className="bg-gradient-to-tr from-primary via-destructive to-primary/80">
            {text} ... <TextCursor className="h-4 w-4" />
        </Badge>
    </div>
  )
}

export default Pointer