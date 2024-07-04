function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

const blog = async () => {
  await sleep();
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    // { next: { revalidate: 30 } } // revalidate every 30 seconds
    { cache: "no-store" } // no cache at all
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>blog {new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default blog;
