import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const navigate = useRouter();
  useEffect(() => {
    navigate.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
