export const posts = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Post ${index + 1}`,
  slug: `post-${index + 1}`,
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

export const post = posts[1];
export const message = `<h1 class="font-bold text-xl">I. Understanding SOLID Principles in the Context of Laravel</h1>
<h2>A. Single Responsibility Principle </h2>

The Single Responsibility Principle advocates that a class should have only one reason to change. In Laravel, this translates to ensuring that each class is responsible for a single aspect of your application.

Consider a typical Laravel controller. Instead of loading it with various responsibilities, adhere to SRP by keeping it focused on handling HTTP requests and delegating business logic to dedicated service classes. This not only enhances code readability but also makes your codebase more adaptable to change.
e Single Responsibility Principle advocates that a class should have only one reason to change. In Laravel, this translates to ensuring that each class is responsible for a single aspect of your application.

Consider a typical Laravel controller. Instead of loading it with various responsibilities, adhere to SRP by keeping it focused on handling HTTP requests and delegating business logic to dedicated service classes. This not only enhances code readability but also makes your codebase more adaptable to change.

<ol>
  <li>onsider a typical Laravel controller. Instead of loading it with</li>
  <li>onsider a typical Laravel controller. Instead of loading it with</li>
  <li>onsider a typical Laravel controller. Instead of loading it with</li>
  <li>onsider a typical Laravel controller. Instead of loading it with</li>
</ol>
`

export const code = `
const [tags, setTags] = useState([]);

const handleDelete = i => {
  setTags(tags.filter((tag, index) => index !== i));
};

const handleAddition = tag => {
  setTags([...tags, tag]);
};

const handleDrag = (tag, currPos, newPos) => {
  const newTags = tags.slice();

  newTags.splice(currPos, 1);
  newTags.splice(newPos, 0, tag);

  setTags(newTags);
};

const handleTagClick = index => {
  console.log('The tag at index ' + index + ' was clicked');
};
`;