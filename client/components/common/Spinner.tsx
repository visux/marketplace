import * as React from "react";
import CircleLoader from "react-spinners/CircleLoader";
export default function Spinner() {
  const color = "#00ff73";
  return (
    <div className="fixed top-0 left-0 z-50 block w-full h-full bg-background opacity-90 ">
      <div className="flex items-center justify-center h-full">
        <CircleLoader color={color} loading={true} size={200} />
      </div>
    </div>
  );
}
