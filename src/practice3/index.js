/** Promise方法实现* */
// export const getPoetry = () => {
//   const url = "https://v1.jinrishici.com/all.json";
//   const result = [];
//   return fetch(url)
//     .then((data) => {
//       data
//         .json()
//         .then((jsonData) => {
//           result.push(jsonData.origin);
//           result.push(jsonData.author);
//           result.push(jsonData.content);
//         })
//         .catch((error) => console.log("error is", error));
//       return result;
//     })
//     .catch((error) => console.log("error is", error));
// };

/** async方法实现 * */
export const getPoetry = async () => {
  const url = "https://v1.jinrishici.com/all.json";
  try {
    const data = await fetch(url);
    const dataJson = await data.json();
    return [dataJson.origin, dataJson.author, dataJson.content];
  } catch (e) {
    console.log(e);
  }
  return [];
};
