// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//   .then((res) => {
//     console.log("Data is here----->", res);
//   })
//   .catch((e) => {
//     console.log("ERROR from---catch", e);
//   });

// const fetchData = async () => {
//   const res = await fetch(URL);
//   console.log(await res.json());
// };

// fetchData();

function uploadFile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ state: "resolved" }), 2000);
    setTimeout(() => reject({ state: "rejected" }), 2000);
  });
}

uploadFile()
  .then((res) => console.log("File uploaded successfully", res))
  .catch((e) => console.log("File upload failed", e));
