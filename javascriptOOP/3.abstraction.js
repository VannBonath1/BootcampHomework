class Chief {
  fryRice() {} //here is abstraction
}

class IndiaChief extends Chief {
  fryRice() {
    console.log(
      "this is how to cook: just put egg and rice together and then fry"
    );
  }
}

const cooking2 = new IndiaChief();
cooking2.fryRice();
