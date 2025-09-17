import { useRouter } from "next/router";

// [...id]: catch all segments
// [[...id]]: optional catch all segments -> slash 뒤에 어떤 경로가 들어오든 안 들어오든 모두 대응
export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <h1>Book {id}</h1>;
}
