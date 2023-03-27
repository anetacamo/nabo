// import { useEffect, useState } from 'react';
// import fs from 'fs';
// import matter from 'gray-matter';
// import path from 'path';

// import CategoryList from '../components/CategoryList';
// import ListDisplay from '../components/ListDisplay/ListDisplay';
// import { SinglePageLayout } from '../layouts/SinglePageLayout/SinglePageLayout';
// import styles from './All/All.module.scss';
// import Post from '../types/card.type';
// import Link from 'next/link';

// export async function getStaticProps() {
//   // get files from the directory
//   const files = fs.readdirSync(path.join('pages/posts'));
//   const posts = files.map((filename) => {
//     // get slug
//     const slug = filename.replace('.md', '');
//     // get all frontmatter here:
//     const markdownWithMeta = fs.readFileSync(
//       path.join('pages/posts', filename),
//       'utf-8'
//     );
//     const { data: frontmatter } = matter(markdownWithMeta);
//     return { slug, frontmatter };
//   });
//   return {
//     props: {
//       posts: posts,
//     },
//   };
// }

// interface AllProps {
//   posts: Post[];
//   category?: string;
// }

// const All = ({ posts }: AllProps) => {
//   const [category, setCategory] = useState<string | string[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [blogs, setBlogs] = useState<Post[]>([]);

//   useEffect(() => {
//     const postsToRender = posts.filter((post) =>
//       category === [] ? true : post.frontmatter.type.includes(category)
//     );
//     const results = postsToRender.filter((post) =>
//       searchQuery === ''
//         ? true
//         : post.frontmatter.title.toLowerCase().includes(searchQuery)
//     );
//     setBlogs(results);
//   }, [searchQuery, category]);

//   const onCategorySet = (cat: string) => {
//     const previousCategory = category;
//     previousCategory === cat ? setCategory([]) : setCategory(cat);
//   };

//   return (
//     <SinglePageLayout>
//       <div className={`flex ${styles.absolute}`}>
//         <input
//           className={styles.search}
//           placeholder='search'
//           onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
//           value={searchQuery}
//         />
//         <div>
//           <h5 style={{ marginBottom: 12 }}>Got something to offer?</h5>
//           <Link href={'/newMember'}>
//             <button className={styles.button}>+ join the list</button>
//           </Link>
//         </div>
//       </div>
//       <h1 style={{ marginTop: 40 }}> All Members</h1>
//       <CategoryList
//         posts={posts}
//         onTagClick={onCategorySet}
//         category={category}
//       />

//       <div className={styles.listContainer}>
//         <h4>
//           showing all{' '}
//           {category.length === 0 || (
//             <>
//               <span
//                 className={`${styles.searchQuery} purplelight`}
//                 onClick={() => setCategory([])}
//               >
//                 {category}
//               </span>{' '}
//             </>
//           )}
//           {searchQuery && (
//             <>
//               {' '}
//               including{' '}
//               <span
//                 className={`${styles.searchQuery} purplelight`}
//                 onClick={() => setSearchQuery('')}
//               >
//                 {searchQuery}
//               </span>
//             </>
//           )}
//         </h4>
//         {blogs.map((post, index) => (
//           <ListDisplay key={index} post={post} />
//         ))}
//       </div>
//     </SinglePageLayout>
//   );
// };

// export default All;
