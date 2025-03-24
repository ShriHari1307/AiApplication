import { FlickeringGrid } from "../magicui/flickering-grid";

const blogPosts = [
  {
    title: "How Dev AI?",
    date: "November 1, 2024",
    timeAgo: "2w ago",
    image: "/Blog.webp",
    link: "/blog/how-dev-ai",
    description: "Introducing Acme.ai, a cutting-edge AI solution for modern businesses."
  },
  {
    title: "Why Dev AI?",
    date: "November 1, 2024",
    timeAgo: "2w ago",
    image: "/Blog.webp",
    link: "/blog/why-dev-ai",
    description: "Understanding the need for AI-driven development in modern tech."
  },
  {
    title: "Introducing Acme.ai",
    date: "August 29, 2024",
    timeAgo: "2mo ago",
    image: "/Blog.webp",
    link: "/blog/introducing-dev-ai",
    description: "The next-gen AI innovation that transforms industries."
  }
];

const Blog = () => {
  return (
    <div className="w-full px-8 lg:px-20 xl:px-30 2xl:px-40">
      {/* HEADER with Flickering Grid Background */}
      <div className="w-full h-24 flex justify-center items-center relative border-[#292C32] border-x-1">
        <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black'></div>
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className="text-white font-medium opacity-70 z-10">
          BLOG
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="border-[#292C32] border-x-">
        {/* Blog Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-[#292C32]">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="shadow-xl flex flex-col justify-between border border-[#292C32]  transition-all duration-300 hover:bg-[#1c2027] p-4"
            >
              <img
                src={post.image}
                alt={post.title}
                className="object-cover border w-full transition-opacity duration-300 hover:opacity-80"
              />
              <p className="my-2 text-xs text-gray-400">
                <time dateTime={post.date}>{post.date} ({post.timeAgo})</time>
              </p>
              <h3 className="text-xl font-medium mb-2 text-white">{post.title}</h3>
              <p className="text-gray-300">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
