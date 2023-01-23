import * as React from "react";

const NewRecipesForm = ({ children }) => {
  return (
    <>
      <section
        id="yikes-mailchimp-container-4"
        className="yikes-mailchimp-container yikes-mailchimp-container-4"
      >
        <form
          id="new-subscribe-4"
          className="yikes-easy-mc-form yikes-easy-mc-form-4"
          method="POST"
          data-attr-form-id="4"
        >
          <label
            for="yikes-easy-mc-form-4-FNAME"
            className="FNAME-label yikes-mailchimp-field-required"
          >
            <span className="FNAME-label"> First Name </span>

            <input
              id="yikes-easy-mc-form-4-FNAME"
              name="FNAME"
              placeholder="Name"
              className="yikes-easy-mc-text"
              required="required"
              type="text"
              value=""
            />
          </label>
          <label
            for="yikes-easy-mc-form-4-EMAIL"
            className="EMAIL-label yikes-mailchimp-field-required"
          >
            <span className="EMAIL-label"> Email Address </span>

            <input
              id="yikes-easy-mc-form-4-EMAIL"
              name="EMAIL"
              placeholder="Email address"
              className="yikes-easy-mc-email"
              required="required"
              type="email"
              value=""
            />
          </label>

          <input
            type="hidden"
            name="yikes-mailchimp-honeypot"
            id="yikes-mailchimp-honeypot-4"
            value=""
          />

          <input
            type="hidden"
            name="yikes-mailchimp-associated-list-id"
            id="yikes-mailchimp-associated-list-id-4"
            value="56b5b1ceff"
          />

          <input
            type="hidden"
            name="yikes-mailchimp-submitted-form"
            id="yikes-mailchimp-submitted-form-4"
            value="4"
          />

          <button
            type="submit"
            className="yikes-easy-mc-submit-button yikes-easy-mc-submit-button-4 btn btn-primary"
          >
            <span className="yikes-mailchimp-submit-button-span-text">
              Submit
            </span>
          </button>

          <input
            type="hidden"
            id="yikes_easy_mc_new_subscriber_4"
            name="yikes_easy_mc_new_subscriber"
            value="2aecbf348a"
          />
          <input type="hidden" name="_wp_http_referer" value="/" />
        </form>
      </section>
    </>
  );
};

export default NewRecipesForm;
