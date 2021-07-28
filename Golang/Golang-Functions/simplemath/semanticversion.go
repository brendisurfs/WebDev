package simplemath

import "fmt"

type SemanticVersion struct {
	major, minor, patch int
}

func NewSemanticVersion(major, minor, patch int) SemanticVersion {
	return SemanticVersion{
		major: major,
		minor: minor,
		patch: patch,
	}
}

// our first method right here.
func (sv *SemanticVersion) String() string {
	return fmt.Sprintf("%d.%d.%d", sv.major, sv.minor, sv.patch)
}

// creating more methods

func (sv *SemanticVersion) IncMajor() {
	sv.major += 1
}

// increment minor
func (sv *SemanticVersion) IncMinor() {
	sv.minor += 1
}

// incr patch ver
func (sv *SemanticVersion) IncPatch() {
	sv.patch += 1
}
