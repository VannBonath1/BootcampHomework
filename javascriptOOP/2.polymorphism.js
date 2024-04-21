class Chief {
  fryRice() {
    console.log("Normal cooking");
  }
}

class IndiaChief extends Chief {
  // here is polymorphism
  fryRice() {
    super.fryRice();
    console.log("and India Style cooking");
  }
  //
}

const cooking = new Chief();
const cooking2 = new IndiaChief();
cooking.fryRice();
cooking2.fryRice();
