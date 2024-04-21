class Chief {
  fryRice() {
    console.log("Normal cooking");
  }
}

class IndiaChief extends Chief {}

const cooking2 = new IndiaChief();
cooking2.fryRice();
