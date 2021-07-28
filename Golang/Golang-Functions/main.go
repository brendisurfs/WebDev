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
}

// ----------------------------

type RoundTripCounter struct {
	count int
}

func (rt *RoundTripCounter) RoundTrip(*http.Request) (*http.Response, error) {
	rt.count += 1
	return nil, nil
}
