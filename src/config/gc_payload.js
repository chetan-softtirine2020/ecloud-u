export const gcPayload = (image, storage, ram, noOfvm) => {
  let perMonthStoragePrice = 0.17;
  let perHrVmPrice = 0;

  switch (parseInt(ram)) {
    case 2:
      if (image === "windows") {
        perHrVmPrice = 0.07;
      } else {
        perHrVmPrice = 0.03;
      }
      break;

    case 4:
      if (image === "windows") {
        perHrVmPrice = 0.2;
      } else {
        perHrVmPrice = 0.05;
      }
      break;

    case 8:
      if (image === "windows") {
        perHrVmPrice = 0.3;
      } else {
        perHrVmPrice = 0.1;
      }
      break;

    case 16:
      if (image === "windows") {
        perHrVmPrice = 0.6;
      } else {
        perHrVmPrice = 0.2;
      }
      break;

    case 32:
      if (image === "windows") {
        perHrVmPrice = 1.4;
      } else {
        perHrVmPrice = 0.42;
      }
      break;
  }

  var date = new Date();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  let days = new Date(year, month, 0).getDate();

  if (!storage) {
    storage = 0;
  }
  if (!noOfvm) {
    noOfvm = 0;
  }
  let storagePrice = parseFloat(perMonthStoragePrice) * parseFloat(storage);
  let totalStoragePrice = parseFloat(storagePrice) * parseInt(noOfvm);

  let noOfHr = parseInt(days) * 24;
  let vmPerMonthPrice = parseFloat(perHrVmPrice) * parseInt(noOfHr);
  console.log(
    "Per HR=" + parseFloat(perHrVmPrice) + "No OF HR=" + parseInt(noOfHr)
  );
  // console.log(
  //   parseFloat(perHrVmPrice) * parseInt(noOfHr) +
  //     "Vm Cost=" +
  //     vmPerMonthPrice.toFixed(2)
  // );

  let totalVMMonthPrice = parseFloat(vmPerMonthPrice) * parseInt(noOfvm);
  return {
    totalStoragePrice: totalStoragePrice.toFixed(2),
    vmPerMonthPrice: perHrVmPrice,
    //   totalCost: totalCost.toFixed(2),
  };
};
