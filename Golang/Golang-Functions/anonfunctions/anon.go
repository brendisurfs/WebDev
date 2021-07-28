package anonfunctions

import "fmt"

func Anon() {
	a := func(name string) string {
		fmt.Printf("my first %s func", name)
		return name
	}
	a("function 1")
	a("anon")
}
