import Link from "next/link";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  await new Promise((resolver) => {
    setTimeout(resolver, 5000);
  });

  return data;
}

async function PostPages() {
  const post = await loadPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>
        <h1 className="text-center text-4xl">Posteos</h1>
        <p className="text-center">Estos son los posteos</p>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-4">
        {post.map((post) => (
          <div
            key={post.id}
            className="border border-gray-600 w-96 p-3 col-span-4"
          >
            <Link
              href={`/posts/${post.id}`}
              className="text-lg font-semibold hover:text-red-700"
            >
              {post.id}. {post.title}
            </Link>

            <p className="mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PostPages;
