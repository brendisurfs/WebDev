package main

import (
	"fmt"
	"runtime"
)

const MAX_PROC int = 16

func main() {
	var num_processes int
	
	var logical_cores int = runtime.NumCPU()

	if logical_cores > 32 {
		num_processes = MAX_PROC
	} else {
		num_processes = logical_cores/2
	}
	fmt.Printf("detected %d logical cores, will spawn %d processes", logical_cores, num_processes)
}