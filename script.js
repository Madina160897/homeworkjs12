class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        console.log(`${this.name}, ${this.surname}`)
    }
}
class Student extends User{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    getCourse(){
        let now = new Date();
        if(now.getFullYear()-5 < this.year){
            console.log(now.getFullYear() - this.year + " курс")
        }else{
            console.log(`Окончил вуз в ${this.year + 5}`)
        }
    }
}

let user = new User("Мадина", "Жалимбетова");
let student1 = new Student("Мадина", "Жалимбетова", 2015);
let student2 = new Student("Эльмира", "Валиева", 2020);

user.getFullName();
student1.getCourse();
student2.getFullName();
student2.getCourse();


class Rectangle{
    constructor(width, height){
        this.setWidth(width);
        this.setHeight(height);
    };
    getWidth(){
        return parseInt(this.width)
    };
    setWidth(width){
        this.width = width + "px";
    };
    getHeight(){
        return parseInt(this.height)
    };
    setHeight(height){
        this.height = height + "px";
    }
}

let rectangle = new Rectangle(100, 50);

console.log(rectangle);

alert(rectangle.getWidth());
rectangle.setWidth(200);
alert(rectangle.getHeight());
rectangle.setHeight(150);



