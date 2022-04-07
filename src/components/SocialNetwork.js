import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialNetwork = () => {
  return (
    <div className="socialnetwork">
      <a
        href="https://facebook.com/matthieuclay"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FacebookIcon />
      </a>
      <TwitterIcon />
      <InstagramIcon />
      <YouTubeIcon />
      <LinkedInIcon />
      <PinterestIcon />
      <RedditIcon />
      <GitHubIcon />
    </div>
  );
};

export default SocialNetwork;
