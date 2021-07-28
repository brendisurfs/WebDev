package anonfunctions

import (
	"fmt"
)

func Anon() {
	a := func(name string) string {
		fmt.Printf("my first %s func", name)
		return name
	}
	a("function 1")
	a("anon")
}

type MathExpr struct {
	math int
}

// func mathExp(expr MathExpr) func(float64, float64) float64 {
// switch expr {
// case AddEx:
//
// case SubEx:
//
// case MultEx:
// return simplemath.Mult
//
// default:
//
// }
// }
//
