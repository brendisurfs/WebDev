package main

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/brendisurfs/go-functions/anonfunctions"
	"github.com/brendisurfs/go-functions/simplemath"
)

func main() {
	fmt.Println("hello go")

	sv := simplemath.NewSemanticVersion(1, 2, 3)

	ptr := &sv

	// why doesnt this work? We explain :)
	// you gotta use pointers baybeeeee
	ptr.IncMajor()
	ptr.IncMinor()

	fmt.Println(sv.String())

	var tripper http.RoundTripper = &RoundTripCounter{}
	r, _ := http.NewRequest(http.MethodGet, "http://pluralsight.com", strings.NewReader("test call"))
	tripper.RoundTrip(r)

	anonfunctions.Anon()

	fmt.Fprintf("%f", double(3, 2, anonfunctions.MathExpr(SubExpr)))
}

// ----------------------------

type RoundTripCounter struct {
	count int
}

func (rt *RoundTripCounter) RoundTrip(*http.Request) (*http.Response, error) {
	rt.count += 1
	return nil, nil

}

func double(f1, f2 float64, mathExpr func(float64, float64) float64) float64 {
	return 2 * mathExpr(f1, f2)
}
