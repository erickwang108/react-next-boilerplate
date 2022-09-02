import { ServerResponse } from 'http';
import { HttpStatus } from 'modules/http-status';

export const redirectTo = (redirectUrl: string, userResponse?: ServerResponse) => {
  // Boolean(userResponse) is true means running in server
  if (userResponse) {
    // TODO
    userResponse.writeHead(HttpStatus.MoveTemporarily, { Location: redirectUrl });
    // Calling `res.end()` would stop Next.js rendering page/components
    userResponse.end();
  } else {
    if (typeof window !== 'undefined') {
      try {
        // We're using replaceState as we do not want to transitive url to appear in the browser
        // history. If it did, when the user clicks the back button it'll bring them back to a page
        // that'll redirect them elsewhere again; thus breaking the back button behavior.
        // Using replaceState before reloading the target page is similar to how we do a 302 redirect
        // when on the server side. It brings the user to the desired location, but doesn't add the
        // transitive page to the browser history.
        window.history.replaceState(null, '', redirectUrl);
        // eslint-disable-next-line no-restricted-properties
        window.location.href = redirectUrl;
      } catch (e) {
        // eslint-disable-next-line no-restricted-properties
        window.location.replace(redirectUrl);
      }
    }
  }
};
