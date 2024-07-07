"use client"

import { FC } from "react";
import { BlocksContent, BlocksRenderer as StrapiBlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from "next/link";

export const BlocksRendererClient: FC<{ content: BlocksContent }> = ({ content }) => {
    return (
            <StrapiBlocksRenderer
                content={content}
                blocks={{
                    paragraph: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-2">{children}</p>,
                    heading: ({ children, level }) => {
                        switch (level) {
                          case 1:
                            return <h1 className="mt-6 mb-2 scroll-m-6 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
                          case 2:
                            return <h2 className="mt-6 mb-2 scroll-m-6 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{children}</h2>
                          case 3:
                            return <h3 className="mt-6 mb-2 scroll-m-6 text-2xl font-semibold tracking-tight">{children}</h3>
                          case 4:
                            return <h4 className="mt-6 mb-2 scroll-m-6 text-xl font-semibold tracking-tight">{children}</h4>
                          case 5:
                            return <h5 className="mt-6 mb-2 scroll-m-6 text-xl font-semibold tracking-tight">{children}</h5>
                          case 6:
                            return <h6 className="mt-6 mb-2 scroll-m-6 text-xl font-semibold tracking-tight">{children}</h6>
                          default:
                            return <h1 className="mt-6 mb-2 scroll-m-6 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
                        }
                      },
                      link: ({ children, url }) => <Link className="text-muted-foreground underline" href={url}>{children}</Link>,
                      list: ({ children, format }) => {
                        return format === "unordered" && <ul className="ml-6 list-disc">{children}</ul> || <li className="ml-6 list-disc">{children}</li>
                      },
                }}
                modifiers={{
                    bold: ({ children }) => <strong>{children}</strong>,
                    italic: ({ children }) => <span className="italic">{children}</span>,
                    underline: ({ children }) => <span className="underline">{children}</span>,
                    strikethrough: ({ children }) => <span className="line-through">{children}</span>,
                    code: ({ children }) => <code className="bg-muted rounded p-1">{children}</code>
                  }}
            />
        );
}