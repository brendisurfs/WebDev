// Channels are blocking constructs.

package main

import (
	"fmt"
	"sync"
)

func main() {
	wg := &sync.WaitGroup{}
	// add type of message you are going to be working with
	ch := make(chan int)

	wg.Add(2)

	// CHANNEL RECEIVER
	go func(ch chan int, wg *sync.WaitGroup) {
		fmt.Println(<-ch)
		wg.Done()
	}(ch, wg)
	// add to the channel: sending the message 42.
	// CHANNEL PROVIDER
	// has no clue what the number is being used for, just passing to it.
	go func( ch chan int, wg *sync.WaitGroup) {
		ch <- 42
		wg.Done()
	}(ch, wg)
	wg.Wait()
}