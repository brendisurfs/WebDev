// // we will be learning coloring outputs

// package main

// import (
// 	"fmt"
// 	"os"
// )

// type messageType int

// const (
// 	INFO messageType = 0 + iota
// 	WARNING
// 	ERROR
// )

// const (
// 	InfoColor = "\033[1;34m%s\033[0m"

// 	WarnColor = "\033[1;33m%s\033[0m"

// 	ErrorColor = "\033[1;33m%s\033[0m"
// )

// func main() {
// 	showMessage(INFO, "THIS WORKS")

// 	fname := "test.txt"
// 	file, err := os.Open(fname)

// }

// func showMessage(mtype messageType, message string) {
// 	switch mtype {
// 	case INFO:
// 		pm := fmt.Sprintf("\n INFO: \n%s\n", message)
// 		fmt.Printf(InfoColor, pm)
// 	case WARNING:
// 		pm := fmt.Sprintf("\n WARNING: \n%s\n", message)
// 		fmt.Printf(InfoColor, pm)
// 	case ERROR:
// 		pm := fmt.Sprintf("\n ERROR: \n%s\n", message)
// 		fmt.Printf(InfoColor, pm)
// 	}

// }
