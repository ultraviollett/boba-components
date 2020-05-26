import React from "react";

import BoardPreview from "./BoardPreview";
import Tag from "../common/Tag";

const BoardSidebar: React.FC<BoardSidebarProps> = ({ board }) => {
  return (
    <div className="sidebar">
      <div className="board-details">
        <div className="board-preview">
          <BoardPreview
            slug={board.slug}
            avatar={board.avatar}
            description={board.description}
            color={board.color}
          ></BoardPreview>
        </div>
        <div className="tag-clouds">
          <h2>Board-wide Tags</h2>
          <div className="tag-group">
            {board.boardWideTags.map((tag) => (
              <Tag name={tag.name} color={tag.color} />
            ))}
          </div>
          <h2>Canonical Board Tags</h2>
          <div className="tag-group">
            {board.canonicalTags.map((tag) => (
              <Tag name={tag.name} color={tag.color} />
            ))}
          </div>
          <h2>Content Rules</h2>
          <div className="tag-group">
            {board.contentRulesTags.map((tag) => (
              <Tag
                symbol={tag.allowed ? "✓" : "✘"}
                name={tag.name}
                color={tag.allowed ? "#66f98c" : "#ff0124"}
              />
            ))}
          </div>
          <h2>Other Rules</h2>
          <div className="other">{board.otherRules}</div>
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          color: white;
          font-size: 16px;
          font-weight: bold;
        }
        .tag-clouds {
          margin-top: 30px;
        }
        .tag-group {
          display: flex;
          flex-wrap: wrap;
        }
        .tag-group > :global(div) {
          margin-bottom: 3px;
          margin-right: 3px;
        }
        .sidebar {
          padding: 20px;
        }
        .board-details {
          margin-top: 30px;
        }
        .board-preview {
          text-align: center;
        }
        .other :global(ul) {
          padding-left: 30px;
        }
        .other :global(li) {
          color: white;
          font-size: 15px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default BoardSidebar;

export interface BoardSidebarProps {
  board: {
    slug: string;
    avatar: string;
    description: string;
    color: string;
    boardWideTags: {
      name: string;
      color: string;
    }[];
    canonicalTags: {
      name: string;
      color: string;
    }[];
    contentRulesTags: {
      allowed: boolean;
      name: string;
    }[];
    otherRules: JSX.Element;
  };
}