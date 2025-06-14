import BlogCard from "@/components/common/BlogCard";
import SectionHeading from "@/components/common/SectionHeading";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Insights | NexGen Solutions</title>
        <meta
          name="description"
          content="Stay updated on technology, innovation, and trends shaping the future of software."
        />
      </Helmet>
      <main id="blogs">
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl">
              Stay updated on technology, innovation, and trends shaping the
              future of software.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
