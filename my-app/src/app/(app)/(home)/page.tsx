import configPromise from "@payload-config"
import { getPayload } from "payload"


export default async function Home() {

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "categories",
  })
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}











// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Progress } from "@/components/ui/progress";
// import { Textarea } from "@/components/ui/textarea";





// export default function Home() {
  
//   return (
//     <div className="flex flex-col gap-y-4 p-4">
//       <div>
//         <Button variant="elaveted">Button</Button>
//       </div>
//       <div>
//         <Input placeholder="Input"></Input>
//       </div>
//       <div>
//         <Progress value={50}></Progress>
//       </div>
//       <div>
//         <Textarea defaultValue="Textarea"></Textarea>
//       </div>
//   </div>)
// }
