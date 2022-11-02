import React from "react";

function GutterBlock({ gutterObj, classAddition }) {
  let gutterInfo = Object.values(gutterObj).map((block) => {
    return {
      title: block.title,
      links: Object.values(block.links).map((link) => {
        return {
          text: link.text,
          url: link.url,
        };
      }),
    };
  });

  gutterInfo.map((block) => {
    console.log("block.title:", block.title);
    block.links.map((link) => {
      console.log("link.text", link.text);
    });
  });

  return (
    <div className={`${classAddition}-gutter-block`}>
      {gutterInfo.length ? (
        gutterInfo.map((block) => (
          <div className={`${classAddition}-gutter-header`}>
            <h1>{block.title}</h1>
            {block.links.map((link) => (
              <a href={link.url}>{link.text}</a>
            ))}
          </div>
        ))
      ) : (
        <div>Something went wrong!</div>
      )}
    </div>
  );
}

export default GutterBlock;
