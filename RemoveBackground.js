import { removeBackgroundHTTPCallable } from "./FirebaseFunctions";

export default function removeBackgroundFromImage(imageurl) {
  console.log(" removing background", imageurl);
  return new Promise((resolve, reject) => {
    removeBackgroundHTTPCallable({ imageurl: imageurl })
      .then((result) => {
        console.log("result ===>", result);
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
