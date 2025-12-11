import { Link } from "wouter";
import BlogCard from "@/components/common/BlogCard";
import SectionHeading from "@/components/common/SectionHeading";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  // Get the first 3 blog posts for the homepage
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Latest Insights" 
          description="Stay updated on technology, innovation, and trends shaping the future of software."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center bg-white border border-gray-300 hover:bg-gray-50 text-dark font-medium rounded-md px-6 py-3 shadow-sm transition"
          >
            View all articles <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
