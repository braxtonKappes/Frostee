import "./HomePage.css";
// eslint-disable-next-line
import React, { useState } from "react";
import GutterBlock from "../GutterBlock/GutterBlock";

function HomePage() {
  let sampleInfo = {
    1: {
      title: "GIFT CARDS",
      links: {
        1: {
          text: "Now Available on Frosty",
          url: "TBD",
        },
      },
    },
    2: {
      title: "RECOMMENDED",
      links: {
        1: {
          text: "By Friends",
          url: "TBD",
        },
        2: {
          text: "By Curators",
          url: "TBD",
        },
        3: {
          text: "Tags",
          url: "TBD",
        },
      },
    },
    3: {
      title: "BROWSE CATEGORIES",
      links: {
        1: {
          text: "Top Sellers",
          url: "TBD",
        },
        2: {
          text: "Upcoming",
          url: "TBD",
        },
        3: {
          text: "Specials",
          url: "TBD",
        },
        4: {
          text: "VR Titles",
          url: "TBD",
        },
        5: {
          text: "Controller-Friendly",
          url: "TBD",
        },
      },
    },
    4: {
      title: "BROWSE BY GENRE",
      links: {
        1: {
          text: "Free to Play",
          url: "TBD",
        },
        2: {
          text: "Early Access",
          url: "TBD",
        },
        3: {
          text: "Action",
          url: "TBD",
        },
        4: {
          text: "Adventurer",
          url: "TBD",
        },
        5: {
          text: "Casual",
          url: "TBD",
        },
        6: {
          text: "Indie",
          url: "TBD",
        },
        7: {
          text: "Massively Multiplayer",
          url: "TBD",
        },
        8: {
          text: "Racing",
          url: "TBD",
        },
        9: {
          text: "RPG",
          url: "TBD",
        },
        10: {
          text: "Simulation",
          url: "TBD",
        },
        11: {
          text: "Sports",
          url: "TBD",
        },
        12: {
          text: "Strategy",
          url: "TBD",
        },
      },
    },
  };

  let gutterObj = sampleInfo;

  return (
    <div className="homepage-wrapper">
      <div className="homepage-banner-body">
        <img src="" alt="" className="homepage-banner-img" />
        <div className="store-navbar-body">
          <div className="store-navbar-content">
            <div className="store-navbar-links">
              <h3>Your Store</h3>
              <h3>New & Noteworthy</h3>
              <h3>Categories</h3>
              <h3>Points Shop</h3>
              <h3>News</h3>
              <h3>Labs</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-body">
        <div className="homepage-gutter">
          <GutterBlock gutterObj={gutterObj} classAddition={"homepage"} />
          <div className="homepage-gutter-header">
            <h1 className="homepage-gutter-header-title">RECENTLY VIEWED</h1>
            /* query database for recently viewed */
          </div>
        </div>
      </div>
      <div className="homepage-featured-recommended"></div>
    </div>
  );
}

export default HomePage;
