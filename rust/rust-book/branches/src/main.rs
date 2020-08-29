fn main() {
    let number = 3;
    less_than_five(number);

    let number = 7;
    less_than_five(number);

    let number = 3;
    is_zero(number);

    let number = 6;
    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}

fn less_than_five(number: i32) {
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
}

fn is_zero(number: i32) {
    if number != 0 {
        println!("number was something other than zero");
    }
}