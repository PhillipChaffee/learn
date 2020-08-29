fn main() {
    println!("Hello, world!");

    another_function();
    parameters(5);
    two_parameters(5,6);

    let x = five();
    println!("The value of x is: {}", x);

    let x = plus_one(5);
    println!("The value of x is: {}", x);
}

fn another_function() {
    println!("Another function.");
}

fn parameters(x: i32) {
    println!("The value of x is: {}", x);
}

fn two_parameters(x: i32, y: i32) {
    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);
}

fn five() -> i32 {
    5
}

fn plus_one(x: i32) -> i32 {
    x + 1
}
