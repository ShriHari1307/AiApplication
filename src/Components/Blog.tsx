import { FlickeringGrid } from "./magicui/flickering-grid";

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
    description: "Introducing Acme.ai, a cutting-edge AI solution for modern businesses."
  },
  {
    title: "Introducing Acme.ai",
    date: "August 29, 2024",
    timeAgo: "2mo ago",
    image: "/Blog.webp",
    link: "/blog/introducing-dev-ai",
    description: "Introducing Acme.ai, a cutting-edge AI solution for modern businesses."
  }
];

function Blog() {
  return (
    <section id="blog" className="relative flex justify-center mx-auto container text-white">
      
      <div className="max-w-screen-lg lg:px-2">
        {/* Title Section */}
      <div className="text-center relative mx-auto border  border-[#292c32]  overflow-hidden p-4 py-8 md:p-12">
        
        {/* Flickering Grid Background */}
        <div className="absolute inset-0 z-0">
          <FlickeringGrid
            className="size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
          {/* Fade effect at the bottom */}
          <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Blog Title (Now above flickering grid) */}
        <h2 className="relative z-10 text-sm text-muted-foreground font-semibold tracking-tight uppercase">
          Blog
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3  border border-[#292c32] border-b-0">
        {blogPosts.map((post, index) => (
          <a
          key={index}
          href={post.link}
          className="bg-background transition-colors duration-300 hover:bg-[#1c2027] p-4 border-b border-[#292c32] lg:border-b lg:border-r last:lg:border-r-0"
        >
          <img
            src={post.image}
            alt={post.title}
            className="object-cover border w-full transition-opacity duration-300 hover:opacity-80"
          />
          <p className="my-2 text-xs text-muted-foreground">
            <time dateTime={post.date}>{post.date} ({post.timeAgo})</time>
          </p>
          <h3 className="text-xl font-medium mb-2">{post.title}</h3>
          <p className="text-muted-foreground">{post.description}</p>
        </a>
        
        ))}
      </div>
      </div>

    </section>
  );
}

export default Blog;