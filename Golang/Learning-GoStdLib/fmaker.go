// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"log"
// 	"os"
// 	"strings"
// )

// var option int

// func main() {
// 	args := os.Args[1:]
// 	if len(args) == 0 || args[0] == "help" {
// 		fmt.Println("usage: fmaker <input file>")
// 	} else {

// 		fmt.Println("text options: 1 > caps, 2 > Title Case, 3 > lower")

// 		_, err := fmt.Scanf("%d", &option)

// 		// do stuff here
// 		file, err := os.Open(args[0])
// 		expect(err)

// 		defer file.Close()

// 		// HERE WE CAN CREATE A BUNCH OF OPTIONS HERE
// 		// creates a new scanner on the file text
// 		fscan := bufio.NewScanner(file)
// 		// creates an iter for the file
// 		for fscan.Scan() {

// 			rtext := fscan.Text()

// 			// cases depending on the users input from out Scanf uptop (very similar to C)
// 			switch option {
// 			case 1:
// 				fmt.Println(strings.ToUpper(rtext))
// 			case 2:
// 				fmt.Println(strings.Title(rtext))
// 			case 3:
// 				fmt.Println(strings.ToLower(fscan.Text()))
// 			}
// 		}
// 	}
// }

// func expect(err error) {
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// }
