function month(monthNum) {
    switch (monthNum) {
      case 1:
        console.log(`Month is: January  number is ${monthNum}`);
        break;
      case 2:
        console.log(`Month is: February number is ${monthNum}`);
        break;
      case 3:
        console.log(`Month is: March number is ${monthNum}`);
        break;
      case 4:
        console.log(`month is: April number is ${monthNum}`);
        break;
      case 5:
        console.log(`month is: May number is ${monthNum}`);
        break;
      case 6:
        console.log(`Month is: June number is ${monthNum}`);
        break;
      case 7:
        console.log(`Month is: July number is ${monthNum}`);
        break;
        case 8:
        console.log(`Month is: August number is ${monthNum}`);
        break;
        case 9:
        console.log(`Month is:  September number is ${monthNum}`);
        break;
        case 10:
        console.log(`Month is: October number is ${monthNum}`);
        break;
        case 11:
        console.log(`Month is:  November number is ${monthNum}`);
        break;
        case 12:
        console.log(`Month is: December number is ${monthNum}`);
        break;
      default:
        console.log(`Invalid input ==>  ${monthNum}`);
        break;
    }
  }
  month(2);
  console.log("=====");
  month(5);
  console.log("=====");
  month(12);
  console.log("=====");
  month(15);
  console.log("=====");
  month(100);
  month();
