import { helloFromCommon } from "@barebones-fullstack-base/common";
import { useEffect } from "react";

export const App: React.FC = () => {
  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div>
      <p>Hello world</p>
      <p>{helloFromCommon()}</p>
    </div>
  );
};
