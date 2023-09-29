import { useState, useEffect } from "react";
import Papa, { ParseResult } from "papaparse";

interface CardType {
  // Define the structure of your CardType here
  title: string;
  // Add other properties as needed
}

function useBlogsFetch(url: string) {
  const [data, setData] = useState<CardType[]>([]);

  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results: ParseResult<CardType>) => {
        setData(
          results.data.filter(
            (d: CardType, index: number) => index > 0 && d?.title
          )
        );
      },
    });
  }, [url]);

  return data;
}

// Usage in your components
const MyComponent = () => {
  const blogs = useBlogsFetch(process.env.NEXT_PUBLIC_CARDS_FETCH);

  // Rest of your component code using the fetched data

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.title}>{blog.title}</div>
      ))}
    </div>
  );
};

export default MyComponent;
