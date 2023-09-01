import { Suspense } from "react";
import PostPages from "../page";

async function loadPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error("Response not OK");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}

async function Page({ params }) {
  try {
    const posteo = await loadPost(params.postID);

    return (
      <div className="p-3 col-span-4">
        <h3 className="text-lg font-semibold">
          {posteo.id}. {posteo.title}
        </h3>

        <p className="my-2">{posteo.body}</p>

        <Suspense
          fallback={
            <div className="container mx-auto mt-24 flex justify-center">
              <p>Cargando...</p>
            </div>
          }
        >
          <PostPages />
        </Suspense>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-3 col-span-4">
        <h3 className="t text-lg font-semibold">Error 404</h3>

        <p className="mt-2">No se pudo encontrar lo solicitado</p>
      </div>
    );
  }
}

export default Page;
