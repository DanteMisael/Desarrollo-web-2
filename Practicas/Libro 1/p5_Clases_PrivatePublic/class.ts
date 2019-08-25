class Shape {
    
    area: number;
    color: string;

    constructor ( name: string, width: number, height: number ){
        this.area = width * height;
        this.color = "pink";
    };
}