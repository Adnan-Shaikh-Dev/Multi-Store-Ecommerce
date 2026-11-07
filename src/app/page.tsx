import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const Home = () => {
  return (
    <div>
      <p className="text-rose-500">Hello World</p>
      <Button variant={"elevated"}>I am a button</Button>
      <Input />
      <Progress />
    </div>
  );
};

export default Home;
