import React from "react";

import Header, { HeaderStyle } from "./Header";
import Footer, { modes as footerModes } from "./Footer";
import Card, { CardSizes } from "../common/Card";
import Editor from "@bobaboard/boba-editor";

import Theme from "../theme/default";

export const modes = {
  VIEW: "VIEW",
  CREATE: "CREATE",
};

const Post: React.FC<PostProps> = (props) => {
  const [newText, setNewText] = React.useState(JSON.parse(props.text));
  return (
    <>
      <div className="post-container">
        <Card
          header={
            <div className="header">
              <Header
                secretIdentity={props.secretIdentity}
                userIdentity={props.userIdentity}
                createdMessage={`Posted on: ${props.createdTime}`}
                size={HeaderStyle.REGULAR}
              />
            </div>
          }
          footer={
            <div className="footer">
              <Footer
                mode={
                  props.mode == modes.CREATE
                    ? footerModes.CREATE
                    : footerModes.VIEW
                }
                onSubmit={() => props.onSubmit(newText)}
              />
            </div>
          }
          size={props.size}
        >
          <Editor
            initialText={JSON.parse(props.text)}
            editable={props.mode == modes.CREATE}
            focus={props.focus || false}
            onSubmit={() => props.onSubmit(newText)}
            onTextChange={(text) => setNewText(JSON.stringify(text.ops))}
          />
        </Card>
      </div>
      <style jsx>{`
        .header {
          border-radius: 15px 15px 0px 0px;
          background-color: ${Theme.POST_BACKGROUND_COLOR};
          padding: 10px;
        }
        .post-container {
          margin-bottom: 50px;
        }
        .footer {
          border-radius: 0px 0px 15px 15px;
          background-color: ${Theme.POST_BACKGROUND_COLOR};
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default Post;

export interface PostProps {
  mode?: string;
  focus?: boolean;
  editable?: boolean;
  text: string;
  createdTime: string;
  secretIdentity: {
    avatar: string;
    name: string;
  };
  userIdentity?: {
    avatar: string;
    name: string;
  };
  size?: CardSizes;
  onSubmit: (text: string) => void;
  onCancel: (id: string) => void;
  onNewContribution: () => void;
  onNewComment: () => void;
}
