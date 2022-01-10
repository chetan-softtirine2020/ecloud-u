// export default function authHeader() {
//   const token = JSON.parse(localStorage.getItem("token"));
//   if (token) {
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     };
//   } else {
//     return {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     };
//   }
// }

export const authHeader = () => {
  const data = localStorage.getItem("token");
  if (data) {
    const token = data.substring(1, data.length - 1);
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  }
};
