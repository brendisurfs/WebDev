// notes on classes 
interface Employee {
    name: string;
    title: string;
    logID: () => string;
  
}

class Developer {
    public deparment!: string
    private _title!: string
    get title(): string {
        return this._title;
    }
    set title(newTitle: string) {
        this._title = newTitle.toUpperCase();
    }
}
class WebDeveloper extends Developer {
    favoriteEditor: string;
    writesTypescript(): void {
        console.log("typescript");
    }
} 