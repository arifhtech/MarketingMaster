import { useParams, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import { BlogPost as BlogPostType } from "@/lib/types";
import SectionHeading from "@/components/common/SectionHeading";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === parseInt(id || "0"));
    if (foundPost) {
      setPost(foundPost);
    } else {
      setLocation("/blog");
    }
  }, [id, setLocation]);

  if (!post) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | NexGen Solutions Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <main>
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`bg-${post.categoryColor}/10 text-${post.categoryColor} text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block`}>
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center justify-center text-sm text-gray-300">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto rounded-xl mb-8"
              />
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium text-gray-700 mb-6">
                  {post.excerpt}
                </p>
                
                <h2>The Challenge of Modern Technology</h2>
                <p>
                  In today's rapidly evolving digital landscape, businesses face unprecedented challenges
                  in staying competitive. The technologies that powered growth yesterday may be obsolete
                  tomorrow, requiring organizations to be nimble and forward-thinking.
                </p>
                
                <p>
                  This article explores how companies can navigate these challenges while leveraging
                  the opportunities presented by new technologies.
                </p>
                
                <h2>Key Strategies for Success</h2>
                <p>
                  Successful digital transformation isn't just about adopting new technologies—it's about
                  reimagining business processes and customer experiences. Here are some key strategies:
                </p>
                
                <ul>
                  <li>Embrace a culture of innovation and continuous learning</li>
                  <li>Start with user-centered design thinking</li>
                  <li>Build modular, scalable technical architecture</li>
                  <li>Leverage data analytics for informed decision-making</li>
                  <li>Partner with technical experts who understand your business goals</li>
                </ul>
                
                <h2>Real-World Applications</h2>
                <p>
                  Companies across industries are already seeing significant benefits from their digital
                  transformation efforts. From retail to healthcare to manufacturing, organizations are
                  finding new ways to serve customers, streamline operations, and create value.
                </p>
                
                <blockquote>
                  <p>
                    "The most successful companies don't just adopt new technologies—they rethink their
                    entire approach to creating value in a digital world."
                  </p>
                </blockquote>
                
                <h2>Looking Ahead</h2>
                <p>
                  As we look to the future, it's clear that the pace of technological change will only
                  accelerate. Companies that build adaptable systems and foster a culture of innovation
                  will be best positioned to thrive in this dynamic environment.
                </p>
                
                <p>
                  By focusing on customer needs, embracing data-driven decision making, and partnering with
                  the right experts, businesses can turn technological disruption into a competitive advantage.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="font-bold text-gray-700">{post.author[0]}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">About {post.author}</h4>
                    <p className="text-gray-600 text-sm">
                      {post.author} is a technology expert at NexGen Solutions with over 10 years of experience
                      in software development and digital strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPost;
