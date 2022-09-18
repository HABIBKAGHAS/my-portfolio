import "../styles/globals.css";
import "../public/template/css/gradient.css";
import "../public/template/css/layout.css";
import "../public/template/css/demos/demo-2-colors.css";
import "../public/template/css/template-colors/orange.css";
import "../public/template/css/basic.css";
import "../public/template/css/layout.css";
import "../public/template/css/blogs.css";
import "../public/template/css/ionicons.css";
import "../public/template/css/magnific-popup.css";
import "../public/template/css/animate.css";
import "../public/template/css/gradient.css";
// import "../public/template/css/new-skin/new-skin.css";
import "../public/template/css/new-skin/classic-skin.css";
import "../public/template/css/dark.css";
import "../public/template/css/owl.carousel.css";
// import { Amplify, API } from "aws-amplify";
// Amplify.configure({
//   // OPTIONAL - if your API requires authentication
//   Auth: {
//     // REQUIRED - Amazon Cognito Identity Pool ID
//     identityPoolId: "us-east-1:179e590c-5040-4194-8b9c-00676b9b6d23",
//     // REQUIRED - Amazon Cognito Region
//     region: "us-east-1",
//     // OPTIONAL - Amazon Cognito User Pool ID
//     userPoolId: "us-east-1_gU9Yizelw",
//     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//     userPoolWebClientId: "2qa6vqcb6r40084ds8uqidhlr4",
//   },
//   API: {
//     endpoints: [
//       {
//         name: "about",
//         endpoint:
//           "https://n7t7a8em41.execute-api.us-east-1.amazonaws.com/staging",
//       },
//     ],
//   },
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
