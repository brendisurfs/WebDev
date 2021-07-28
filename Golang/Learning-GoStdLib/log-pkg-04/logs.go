package main

import (
	"log"
	"os"
)

type messageType int

const (
	INFO messageType = 0 + iota
	WARNING
	ERROR
	FATAL
)

func main() {

	log.Println("this is a log message!")

	log.Println("this is our ouput message.")
}

func writeLog(mtype messageType, message string) {
	file, err := os.OpenFile("log.txt", os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0666)
	assert(err)

	log.SetOutput(file)
}

func assert(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
