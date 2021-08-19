import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import readingTime from 'reading-time'

import { postFilePaths, BLOG_POSTS_PATH, getHeadings } from '@utils/mdx'

import MDXComponents from '@components/MDXComponents'
import Blog from '@components/Blog';
import ContentTable from '@components/Blog/ContentTable'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const filePath = path.join(`${BLOG_POSTS_PATH}/articles`, `${ctx.params?.slug}.mdx`)

  const source = fs.readFileSync(filePath)
  
  const { data, content } = matter(source)
  const headings = await getHeadings(content)
  
  const relatedPosts = data.relatedPosts.map((post: string) => {
    const file = path.join(`${BLOG_POSTS_PATH}/articles`, `${post}.mdx`)
    const sourceFile = fs.readFileSync(file)
    const {data} = matter(sourceFile)

    return {
      ...data,
    }
  })

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
    },
    scope: data,
  })

  return {
    props: {
      frontMatter: {
        readingTime: readingTime(content),
        ...data,
      },
      source: mdxSource,
      headings,
      relatedPosts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths(`${BLOG_POSTS_PATH}/articles`)
    .map((p) => p.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

type PostDetailPageProps = InferGetStaticPropsType<typeof getStaticProps>
const PostDetail: NextPage<PostDetailPageProps> = ({ frontMatter, source, headings, relatedPosts }) => {
  
  return (
    <>
      <Blog
        postMeta={{ ...frontMatter }}
        posts={relatedPosts}
      >
        <ContentTable contentTable={headings} />
        <MDXRemote {...source} components={MDXComponents} />
      </Blog>
    </>
  )
}

export default PostDetail
