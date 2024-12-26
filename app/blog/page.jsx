import PostCard from '../../components/ui/postCard/PostCard';

const BlogPage = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      <div className="post">
        <PostCard />
      </div>
      <div className="post">
        <PostCard />
      </div>
      <div className="post">
        <PostCard />
      </div>
      <div className="post">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
