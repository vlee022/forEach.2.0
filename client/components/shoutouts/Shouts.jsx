import React from 'react';

const Shouts = (props) => {
  const {
    f_name, l_name, claps, shoutout,
  } = props;
  return (
    <li className="shoutouts">
      <p>
        {f_name} {l_name}
      </p>
      <div className="message-container">
          {shoutout}
        <div>
         <img className="clap" alt="" src="https://www.seekpng.com/png/full/182-1822906_emoji-clap-emoji.png" />
         <span>
           {claps}
         </span>
        </div>
      </div>
    </li>
  );
};

export default Shouts;
