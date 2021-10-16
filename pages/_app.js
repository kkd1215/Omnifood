import 'tailwindcss/tailwind.css'
import '../css/global.css'
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  fas
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */
config.autoAddCss = false;

library.add(fab, fas);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
