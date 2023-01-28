import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LatestForm = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          LATEST_FORM_ACTION
        }
      }
    }
  `);

  return (
    <>
      <section id="enews-ext-4" className="widget enews-widget flex pr-8 pl-8 ">
        <div className="widget-wrap w-full border">
          <div className="enews enews-2-fields flex w-full justify-between">
            <p>DON'T MISS ALL THE LATEST!</p>
            <form
              id="subscribeenews-ext-4"
              className="enews-form w-full"
              action={data.site.siteMetadata.LATEST_FORM_ACTION}
              method="post"
              name="enews-ext-4"
            >
              <input
                type="text"
                id="subbox1"
                className="enews-subbox enews-fname"
                aria-label="First Name"
                placeholder="First Name"
                name="FNAME"
              />
              <input
                type="email"
                id="subbox"
                className="enews-email "
                aria-label="E-Mail Address"
                placeholder="E-Mail Address"
                name="EMAIL"
                required="required"
              />
              <input
                type="submit"
                value="I'M IN!"
                id="subbutton"
                className="enews-submit py-3 px-8 bg-red-200"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestForm;
