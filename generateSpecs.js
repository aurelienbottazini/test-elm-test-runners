const Handlebars = require("handlebars");
const fs = require("fs");

const elmSpec = `module Tests{{i}} exposing (..)

import Expect
import Sum exposing (sum)
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "sum test {{i}}"
        [ test "1 + 2 = 3" <|
            \\_ ->
                let
                    three =
                        sum 1 2
                in
                Expect.equal three 3
        ]
`;

const template = Handlebars.compile(elmSpec);

for (let i = 0; i < 5000; i++) {
  const result = template({ i });
  fs.writeFile(`./tests/Tests${i}.elm`, result, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}
