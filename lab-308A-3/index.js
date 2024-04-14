// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };
// }

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  try {
    const returnedValue = await central(id);
    const dbInfoPromise = dbs[returnedValue](id);
    const detailedInfoPromise = vault(id);

    const [dbInfo, detailedInfo] = await Promise.all([
      dbInfoPromise,
      detailedInfoPromise,
    ]);
    const userData = {
      id,
      name: detailedInfo.name,
      username: dbInfo.username,
      email: detailedInfo.email,
      address: {
        street: detailedInfo.address.street,
        suite: detailedInfo.address.suite,
        city: detailedInfo.address.city,
        zipcode: detailedInfo.address.zipcode,
        geo: {
          lat: detailedInfo.address.geo.lat,
          lng: detailedInfo.address.geo.lng,
        },
      },
      phone: detailedInfo.phone,
      website: dbInfo.website,
      company: {
        name: dbInfo.company.name,
        catchPhrase: dbInfo.company.catchPhrase,
        bs: dbInfo.company.bs,
      },
    };

    return userData;
  } catch (error) {
    console.log(error);
  }
}

getUserData(1)
  .then((userData) => console.log(userData))
  .catch((error) => console.log(error));

// return Promise.all([central(id), dbs[central(id)](id), vault(id)]).then
//     (([db, user, personal]) => {
//         // Once all three requests have completed, combine the results into a single object
//         return {
//           id,
//           ...user,
//           ...personal,
//           address: {
//             ...personal.address,
//             geo: {
//               lat: personal.address.geo.lat,
//               lng: personal.address.geo.lng
//             }
//           }
//         };
//       })
