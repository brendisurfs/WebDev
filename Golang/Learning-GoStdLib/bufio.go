// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"log"
// 	"os"
// )

// func main() {

// 	file, err := os.Open("test.txt")
// 	expect(err)
// 	defer file.Close()

// 	scanner := bufio.NewScanner(file)

// 	for scanner.Scan() {
// 		fmt.Println(scanner.Text())
// 	}
// }

// func expect(err error) {
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// }
