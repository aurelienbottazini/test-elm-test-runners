module Tests3410 exposing (..)

import Expect
import Sum exposing (sum)
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "sum test 3410"
        [ test "1 + 2 = 3" <|
            \_ ->
                let
                    three =
                        sum 1 2
                in
                Expect.equal three 3
        ]
