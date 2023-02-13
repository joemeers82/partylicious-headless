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
      <section
        id="enews-ext-4"
        className="widget border-y my-10 py-10 enews-widget flex "
      >
        <div className=" max-w-screen-xl	pr-8 pl-8 w-full mx-auto">
          <div className="enews enews-2-fields flex w-full">
            <p className=" w-1/4 flex items-center">
              DON'T MISS ALL THE LATEST!
            </p>
            <form
              id="subscribeenews-ext-4"
              className="enews-form w-full flex w-full gap-2"
              action={data.site.siteMetadata.LATEST_FORM_ACTION}
              method="post"
              name="enews-ext-4"
            >
              <input
                type="text"
                id="subbox1"
                className="enews-subbox enews-fname  w-1/3 border"
                aria-label="First Name"
                placeholder="First Name"
                name="FNAME"
              />
              <input
                type="email"
                id="subbox"
                className="enews-email w-1/3 border"
                aria-label="E-Mail Address"
                placeholder="E-Mail Address"
                name="EMAIL"
                required="required"
              />
              <input
                type="submit"
                value="I'M IN!"
                id="subbutton"
                className="enews-submit py-3 px-8 bg-red-200 w-1/3"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestForm;
