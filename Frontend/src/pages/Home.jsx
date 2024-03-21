import { Posts } from "../components/Posts";
import Navbar from "../components/partials/Navbar";
import Sidebar from "../components/partials/Sidebar";


export const Home = () => {

  const posts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Post ${index + 1}`,
    description: "TLDRThis post provides a comprehensive overview of state management in Solid.js, a modern JavaScript framework. It covers key concepts like reactive programming and the reactivity system, and includes a practical example of building a quiz app. The post emphasizes the simplicity and efficiency of Solid.js in handling state updates.",
    created_at: "one month ago",
    image: {
      path: "https://fakeimg.pl/300/?text=posts${index + 1}&font=lobster"
    },
    minutesToRead: 45,
    author: {
      name: "aymane ",
      email: "aymane@gmail.Com",
      image: {
        path: `https://img.freepik.com/free-photo/young-japanese-woman-with-jacket_23-2148870740.jpg?w=740&t=st=1710995474~exp=1710996074~hmac=ac085167c835dea541411baff703d8ee0fee3ce348156180784c65a3f3d41be3`
      },
    },
    category: {
      name: "Random Category",
    },
    comments_count: 50,
    likes_count: 50,
    saved: true,
    tags: ["php", "java", "react", "docker"],
  }));


  return (
    <main className="bg-[#202222] text-white grid grid-cols-12 grid-rows-auto">
      <Navbar />
      <div className="col-span-12 md:col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-12 md:col-span-10">
        <Posts posts={posts} />
      </div>
    </main>

  );
};


