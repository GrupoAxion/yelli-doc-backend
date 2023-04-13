import { useRouter } from "next/router";

const HomePage = () => {
    return <h1>Home Page</h1>;
};

const DocsPage = () => {
  return <h1>Documentation Page</h1>;
};

const ApiPage = () => {
  return <h1>API Reference Page</h1>;
};

const BlogPage = () => {
  return <h1>Blog Page</h1>;
};

const PageSelector = () => {
    
  const router = useRouter();

  switch (router.pathname) {
    case "/docs":
      return <DocsPage />;
    case "/api":
      return <ApiPage />;
    case "/blog":
      return <BlogPage />;
    default:
      return <HomePage/>;
  }
};

export default PageSelector;
