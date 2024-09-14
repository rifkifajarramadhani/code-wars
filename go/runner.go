package main

import (
	"fmt"
	"math"
)

func main() {
	n := 143
	sqrt := math.Sqrt(float64(n))
	mod := math.Mod((math.Log10(float64(n)) / math.Log10(3)), 1.0)
	// res := 0
	if mod == 0.0 {
		// res = n
	} else {
		x := math.Floor(sqrt)
		y := sqrt - x
		if y > 0.5 {
			// res = int(math.Ceil(x))
		} else {
			// res = int(math.Floor(x))
		}
	}
	fmt.Println(mod)
	// sqrt := math.Sqrt(float64(n))

	// if (sqrt % float64(2)) != 0 {

	// }
	// fmt.Println(math.Mod((math.Log10(float64(n)) / math.Log10(3)), 1.0) == 0.0)
}