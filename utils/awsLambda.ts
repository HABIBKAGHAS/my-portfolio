import { Amplify, API } from "aws-amplify";
Amplify.configure({
  aws_project_region: "us-east-1",
  aws_cloud_logic_custom: [
    {
      name: "about",
      endpoint:
        "https://n7t7a8em41.execute-api.us-east-1.amazonaws.com/staging",
      region: "us-east-1",
    },
  ],
});

export default API;
