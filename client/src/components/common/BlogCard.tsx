import { Link } from "wouter";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-500">{post.date}</span>
          <span className={`bg-${post.categoryColor}/10 text-${post.categoryColor} text-xs font-medium px-2.5 py-0.5 rounded`}>
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <Link 
          href={`/blog/${post.id}`} 
          className="text-primary font-medium inline-flex items-center hover:underline"
        >
          Read more <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
