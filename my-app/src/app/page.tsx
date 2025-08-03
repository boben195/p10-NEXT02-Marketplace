import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";



export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-5">
      <div>
        <Button variant="elaveted">Button</Button>
      </div>
      <div>
        <Input placeholder="Input"></Input>
      </div>
      <div>
        <Progress value={50}></Progress>
      </div>
      <div>
        <Textarea value="Textarea"></Textarea>
      </div>
  </div>)
}
