import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        const data = await res.json();
        setPosts(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="min-h-screen flex flex-col gap-10 items-center justify-center p-10">
        {loading ? (
          <div className="flex flex-col gap-10 items-center justify-center">
            <h1 className="text-7xl">{id}</h1>
            <h1 className="text-2xl font-medium">Loading</h1>
          </div>
        ) : (
          <div className="flex flex-col gap-10 items-center justify-center">
            <h1 className="text-7xl">{id}</h1>
            <h1 className="text-2xl font-medium">{posts.title}</h1>
            <p className="text-xl">{posts.body}</p>
          </div>
        )}

        <div className="flex items-center justify-center gap-2">
          <button
            className="border-2 rounded-xl px-5 py-2 m-5 cursor-pointer"
            onClick={() => setId(id - 1)}
          >
            Previous
          </button>
          <button
            className="border-2 rounded-xl px-5 py-2 m-5 cursor-pointer"
            onClick={() => setId(id + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
