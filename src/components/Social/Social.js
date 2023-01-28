import React from "react";

import socialIcon from "../../images/symbol-defs.svg";
import { useSocialMenuQuery } from "../../hooks/useSocialMenuQuery";

const Social = () => {
  const data = useSocialMenuQuery();
  const links = data.allWp.nodes[0].themeGeneralSettings.themeOptions;
  return (
    <>
      <div>
        <ul className="flex gap-4">
          <li>
            <a href={`mailto:${links.email}`} rel="noopener noreferrer">
              <svg className="w-3 h-3">
                <title id="social-email">Email</title>
                <use xlinkHref={`${socialIcon}#social-email`} />
              </svg>
            </a>
          </li>
          <li>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer">
              <svg className="w-3 h-3">
                <title id="social-facebook">Facebook</title>
                <use xlinkHref={`${socialIcon}#social-facebook`} />
              </svg>
            </a>
          </li>
          <li>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              <svg className="w-3 h-3">
                <title id="social-instagram">Instagram</title>
                <use xlinkHref={`${socialIcon}#social-instagram`} />
              </svg>
            </a>
          </li>
          <li>
            <a href={links.pinterest} target="_blank" rel="noopener noreferrer">
              <svg className="w-3 h-3">
                <title id="social-pinterest">Pinterest</title>
                <use xlinkHref={`${socialIcon}#social-pinterest`} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;
