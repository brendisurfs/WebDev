interface Developer {
    name: string;
    title: string;
}

class Engineer extends Developer { 
    static jobDescription: string = "build stuff";
    static logFavoriteProtocol() {
        console.log("nice");
   } 
}