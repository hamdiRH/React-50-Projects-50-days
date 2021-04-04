import React, { useState } from "react";
import like from "./like.svg";
import love from "./love.svg";
import laugh from "./laughing.svg";
import wow from "./soaked.svg";
import sad from "./sad.svg";
import angry from "./angry.svg";
import likeicon from "./likeicon.png";
import { Link } from "react-router-dom";

import ReactionIcons from "../../components/ReactionIcons";
import Icon from "../../components/Icons";

const FbReactionsAnimation = () => {
  const [hover, setHover] = useState(false);

  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="fb-reactions-animation">
      <div
        className="likeBtnholder"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <ReactionIcons initial="hidden" variants={list} hover={hover}>
          <Icon icon={like} />
          <Icon icon={love} />
          <Icon icon={laugh} />
          <Icon icon={sad} />
          <Icon icon={angry} />
          <Icon icon={wow} />
        </ReactionIcons>
        <button className="likeBtnn">
          <img src={likeicon} width="20" height="20" alt="" />
          &nbsp;Like
        </button>
      </div>
      <Link to="/">
        <button className="back">
          <i class="fas fa-arrow-circle-left"></i>
        </button>
      </Link>
    </div>
  );
};

export default FbReactionsAnimation;
