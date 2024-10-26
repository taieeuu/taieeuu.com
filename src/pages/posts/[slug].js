import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

export default function Post({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | Your Blog Name</title>
        <meta name="description" content={frontmatter.description || `Read ${frontmatter.title}`} />
      </Head>
      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        <div className="text-gray-500 mb-4">
          {new Date(frontmatter.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <div className="prose max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      frontmatter: {
        ...data,
        date: data.date.toISOString(),
      },
      content,
    },
  };
}
