// src/pages/Blog.jsx
import React, { useMemo, useState, useRef } from "react";
import "./Blog.scss";

const MOCK = [
  {
    id: 1,
    title: "Benefits of CBD, According to Medical Research",
    excerpt:
      "Over time, people are finding new, holistic approaches to treat many ailments, conditions, or pain...",
    author: "Shai Clark",
    date: "Mar 23, 2021",
    read: "2 min read",
    views: 4496,
    comments: 16,
    likes: 25,
    image: "/assets/blog/5c2bcb_7149c652951c427faf0a05b545439246~mv2.avif",
  },
  {
    id: 2,
    title: "What is CBD?",
    excerpt:
      "CBD is becoming more and more popular in the market, with a wide range of oils, gummies, and tinctures...",
    author: "Shai Clark",
    date: "Mar 23, 2021",
    read: "2 min read",
    views: 1114,
    comments: 11,
    likes: 23,
    image: "/assets/blog/5c2bcb_42a0cfae21b74ea8a758cadca6275f9f~mv2.avif",
  },
];

export default function Blog() {
  const [q, setQ] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return MOCK;
    return MOCK.filter(
      (p) =>
        p.title.toLowerCase().includes(s) ||
        p.excerpt.toLowerCase().includes(s) ||
        p.author.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>All Posts</h1>

        {/* 검색바 */}
        <div className={`search ${isOpen || q ? "open" : ""} ${q ? "filled" : ""}`}>
          <button
            type="button"
            className="icon-left"
            aria-label="Open search"
            onClick={() => {
              setIsOpen(true);
              requestAnimationFrame(() => inputRef.current?.focus());
            }}
          >
            🔍
          </button>

          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => {
              if (!q) setIsOpen(false);
            }}
          />

          <button
            type="button"
            className="clear"
            aria-label="Clear search"
            onClick={() => {
              setQ("");
              inputRef.current?.focus();
            }}
            style={{ visibility: q ? "visible" : "hidden" }}
          >
            ✕
          </button>
        </div>
      </div>

      <ul className="post-list">
        {list.map((p) => (
          <li className="post-card" key={p.id}>
            <div className="thumb">
              <img src={p.image} alt="" />
            </div>
            <div className="body">
              <div className="meta">
                <span className="avatar" aria-hidden>●</span>
                <span>{p.author}</span>
                <span>· {p.date}</span>
                <span>· {p.read}</span>
              </div>

              <a href={`/blog/${p.id}`} className="title hover-accent">
                {p.title.toUpperCase()}
              </a>

              <p className="excerpt">{p.excerpt}</p>

              <div className="foot">
                <span>{p.views.toLocaleString()} views</span>
                <span>{p.comments} comments</span>
                <button className="like-btn">
                  {p.likes} <span aria-hidden>♡</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
