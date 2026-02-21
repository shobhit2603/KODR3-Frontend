import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        setPosts(data.slice(0, 15));

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const onSubmit = async (formData) => {
    try {
      if (editId) {
        const updatedPost = {
          id: editId,
          title: formData.title,
          body: formData.body,
          userId: 1,
        };

        await fetch(`https://jsonplaceholder.typicode.com/posts/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedPost),
        });

        setPosts((prev) =>
          prev.map((post) =>
            post.id === editId ? { ...post, ...updatedPost } : post,
          ),
        );

        setEditId(null);
        reset();
        return;
      }

      const newPost = {
        title: formData.title,
        body: formData.body,
        userId: 1,
      };

      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      const data = await res.json();
      setPosts((prev) => [data, ...prev]);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (post) => {
    setEditId(post.id);
    reset({
      title: post.title,
      body: post.body,
    });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
console.log(id)
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Blog Management Dashboard
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" p-5 rounded-xl mb-8 space-y-4"
        >
          <h2 className="text-xl font-semibold">
            {editId ? "Update Post" : "Add New Post"}
          </h2>

          <input
            type="text"
            placeholder="Post Title"
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 rounded border-b border-neutral-700 outline-none"
          />
          {errors.title && (
            <p className="text-red-400 text-sm">{errors.title.message}</p>
          )}

          <textarea
            rows={4}
            placeholder="Post Body"
            {...register("body", { required: "Body is required" })}
            className="w-full p-3 rounded border-b border-neutral-700 outline-none"
          />
          {errors.body && (
            <p className="text-red-400 text-sm">{errors.body.message}</p>
          )}

          <button className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg cursor-pointer transition">
            {editId ? "Update Post" : "Add Post"}
          </button>
        </form>

        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="space-y-4 md:grid md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-neutral-90 p-4 border-l-2 border-neutral-800"
              >
                <h3 className="text-lg font-semibold mb-2 uppercase">{post.title}</h3>
                <p className="text-neutral-300 mb-4">{post.body}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded-lg text-sm cursor-pointer transition"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-violet-500 hover:bg-violet-700 px-3 py-1 rounded-lg text-sm cursor-pointer transition"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
