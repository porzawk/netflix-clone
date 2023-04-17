import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

type Props = {
  facebook: string;
  instagram: string;
  twitter: string;
};

const Social = (props: Props) => {
  return (
    <div className="flex justify-center gap-2 mt-2">
      {props.facebook && (
        <a href={`https://www.facebook.com/${props.facebook}`} target="_blank">
          <AiFillFacebook size={24} />
        </a>
      )}
      {props.instagram && (
        <a
          href={`https://www.instagram.com/${props.instagram}`}
          target="_blank"
        >
          <AiFillInstagram size={24} />
        </a>
      )}

      {props.twitter && (
        <a href={`https://twitter.com/${props.twitter}`} target="_blank">
          <AiFillTwitterCircle size={24} />
        </a>
      )}
    </div>
  );
};

export default Social;
