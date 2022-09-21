export const gcPayload = (image, storage, ram) => {
  let perMonthStoragePrice = 0.170;
  let perHrVmPrice = 0;

  switch (ram) {
    case 2:
      if (image == "windows") {
        perHrVmPrice = 0.07;
      } else {
        perHrVmPrice = 0.03;
      }
      break;
    case 4:
      if (image == "windows") {
        perHrVmPrice = 0.2;
      } else {
        perHrVmPrice = 0.05;
      }
      break;
    case 8:
      if (image == "windows") {
        perHrVmPrice = 0.3;
      } else {
        perHrVmPrice = 0.1;
      }
      break;
    case 16:
      if (image == "windows") {
        perHrVmPrice = 0.6;
      } else {
        perHrVmPrice = 0.2;
      }
      break;
    case 32:
      if (image == "windows") {
        perHrVmPrice = 1.4;
      } else {
        perHrVmPrice = 0.42;
      }
      break;
  }
  
  let day1 = new Date().getUTCDate();
  let storagePrice= parseFloat(perMonthStoragePrice) * parseFloat(storage);
  let noOfHr=720;
//  perHrVmPrice=  * parseFloat(perHrVmPrice);
  return { storagePrice: storagePrice, perHrVmPrice: perHrVmPrice };
};
