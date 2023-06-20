import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const param = useRouter();
  return <div>Page</div>;
};

export default Page;
