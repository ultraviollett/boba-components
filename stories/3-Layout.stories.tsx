import React from "react";
import Layout from "../src/Layout";
import BoardSidebar from "../src/BoardSidebar";
import SideMenu from "../src/SideMenu";
import Post from "../src/post/Post";

import oncelerAvatar from "./images/oncie.jpg";
import greedlerAvatar from "./images/greedler.jpg";
import tuxedoAvatar from "./images/tuxedo-mask.jpg";
import mamoruAvatar from "./images/mamoru.png";
import hannibalAvatar from "./images/hannibal.png";

import goreBackground from "./images/gore.png";
import { CardSizes } from "../src/common/Card";

export default {
  title: "Layout Preview",
  component: Layout,
};

export const SimpleLayout = () => {
  return (
    <Layout
      mainContent={<div>This is the main content!</div>}
      sideMenuContent={<div>Get a load of this menu content!</div>}
      boardName="gore"
    />
  );
};

SimpleLayout.story = {
  name: "simple",
};

export const LayoutWithSidebar = () => {
  return (
    <Layout
      mainContent={<div>This is the main content!</div>}
      sideMenuContent={<div>Get a load of this menu content!</div>}
      sidebarContent={<div>We have a sidebar now</div>}
      boardName="gore"
    />
  );
};

LayoutWithSidebar.story = {
  name: "with sidebar",
};

export const BoardSidebarPreview = () => {
  return (
    <div style={{ maxWidth: "500px" }}>
      <BoardSidebar
        board={{
          slug: "gore",
          avatar: `/${goreBackground}`,
          description: "Love me some bruised bois (and more).",
          color: "#f96680",
        }}
      />
    </div>
  );
};

BoardSidebarPreview.story = {
  name: "sidebar",
};

export const SideMenuPreview = () => {
  return (
    <div style={{ maxWidth: "500px", backgroundColor: "#131518" }}>
      <SideMenu
        board={{
          slug: "gore",
          avatar: `/${goreBackground}`,
          description: "Love me some bruised bois (and more).",
          color: "#f96680",
        }}
      />
    </div>
  );
};

SideMenuPreview.story = {
  name: "sidemenu",
};

export const Attempt1 = () => {
  return (
    <>
      <Layout
        mainContent={
          <div className="main">
            <div className="post">
              <Post
                createdTime="2019/05/14 at 7:34pm"
                text={
                  '[{"insert":"Nishin Masumi Reading Group (Week 2)"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nAs you know, we\'re going through \\"Host is Down\\" this week! \\n\\n"},{"attributes":{"alt":"Host is Down by Mado Fuchiya (Nishin)"},"insert":{"image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564868627l/50190748._SX1200_SY630_.jpg"}},{"insert":"\\n\\nThis is the official discussion thread. Feel free to comment, but remember to tag spoilers (or suffer the mods\' wrath).\\n"}]'
                }
                secretIdentity={{
                  name: "Good Guy",
                  avatar: `/${oncelerAvatar}`,
                }}
                onSubmit={() => console.log("click!")}
                onCancel={() => console.log("click!")}
                onNewContribution={() => console.log("click!")}
                onNewComment={() => console.log("click!")}
              />
            </div>
            <div className="post">
              <Post
                createdTime="2019/05/14 at 7:34pm"
                text={
                  '[{"insert":"Help a Thirsty, Thirsty Anon"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nI recently discovered "},{"attributes":{"link":"https://myanimelist.net/manga/115345/MADK"},"insert":"MadK"},{"insert":", and I\'ve fallen in love with the combination of beautiful art and great story. I\'ve been trying to put together a list of recs of the angstiest, goriest series out there. It\'s been surprisingly hard to find the Good Shit.\\n\\nWhat\'s your favorite series and why?\\n"}]'
                }
                secretIdentity={{
                  name: "Tuxedo Mask",
                  avatar: `/${tuxedoAvatar}`,
                }}
                userIdentity={{
                  name: "SexyDaddy69",
                  avatar: `/${mamoruAvatar}`,
                }}
                onSubmit={() => console.log("click!")}
                onCancel={() => console.log("click!")}
                onNewContribution={() => console.log("click!")}
                onNewComment={() => console.log("click!")}
                size={CardSizes.WIDE}
              />
            </div>
            <div className="post">
              <Post
                createdTime="2019/05/14 at 7:34pm"
                text={
                  '[{"insert":"Monthly Art Roundup"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nPost your favorites! As usual, remember to embed the actual posts (unless it\'s your own art, then do as you wish). Reposting is a no-no. \\n\\nI\'ll start with one of my favorite artists:\\n"},{"insert":{"tweet":"https://twitter.com/notkrad/status/1222638147886034945"}}]'
                }
                secretIdentity={{
                  name: "Bad Guy",
                  avatar: `/${greedlerAvatar}`,
                }}
                onSubmit={() => console.log("click!")}
                onCancel={() => console.log("click!")}
                onNewContribution={() => console.log("click!")}
                onNewComment={() => console.log("click!")}
              />
            </div>
            <div className="post">
              <Post
                createdTime="2019/05/14 at 7:34pm"
                text={
                  '[{"insert":{"block-image":"https://media.tenor.com/images/97b761adf7bdc9d72fc1fadbbaa3a4a6/tenor.gif"}},{"insert":"(I got inspired to write a quick cannibalism drabble. Wanted to share it and get your opinion while I decide whether to turn it into a longer fic!)\\n"}]'
                }
                secretIdentity={{
                  name: "Nice Therapist",
                  avatar: `/${hannibalAvatar}`,
                }}
                userIdentity={{
                  name: "xXxChesapeakeRipperxXx",
                  avatar: `/${hannibalAvatar}`,
                }}
                onSubmit={() => console.log("click!")}
                onCancel={() => console.log("click!")}
                onNewContribution={() => console.log("click!")}
                onNewComment={() => console.log("click!")}
              />
            </div>
          </div>
        }
        sideMenuContent={
          <SideMenu
            board={{
              slug: "gore",
              avatar: `/${goreBackground}`,
              description: "Love me some bruised bois (and more).",
              color: "#f96680",
            }}
          />
        }
        sidebarContent={
          <BoardSidebar
            board={{
              slug: "gore",
              avatar: `/${goreBackground}`,
              description: "Love me some bruised bois (and more).",
              color: "#f96680",
            }}
          />
        }
        headerAccent="#f96680"
        boardName="gore"
      />

      <style jsx>
        {`
          .post {
            margin: 0 auto;
            margin-top: 25px;
          }
          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

Attempt1.story = {
  name: "there was an attempt",
};
