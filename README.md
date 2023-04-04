# Welcome to Baos Restaurant project
## Advance Software Engineering Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Contributors:**
- Vũ Bình Gia Uy (2059048)
- La Triệu Huy (2059016)
- Ngô Trung Hải (2059012)
- Châu Nhật Minh (2059028)
- Nguyễn Trương Thanh Tâm (2059053)

## How to run the project
Before running the project, you need to type **`npm install`** in terminal first to install folder node module from package.json.

Secondly, type **`npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`** in terminal to install chakra ui (if it is not successful, add **`--force`** after the sentence with space between)

When you have done installed, you can finally type: **`npm run start`**

It will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Class Diagram
```mermaid
classDiagram
    UnresigerUser *-- Booking
    User <|-- Customer
    User <|-- Staff
    User <|-- Admin
    Customer *-- Cart
    Cart *-- Payment
    Food *-- Cart
    Menu o-- Food

    class UnresigerUser {
        <<Abstract>>
        - name: string
        - phone: string
        + signIn(): void
        + signUp(): void
    }
    class Booking{
        - name: string
        - time: string
        - date: string
        - phone: string
        + addBoooking(string, string, string)
    }
    class User{
        - user_id: int
        - user_name: string
        - user_email: string
        + create(): void
        + update(): void
        + logout(): void
    }
    class Customer{
        # create(): void
        # update(): void
    }
    class Staff{
        - type: string
        # create(): void
        # update(): void
    }
    class Admin{
        # create(): void
        # update(): void
        + addStaff(void): void
        + removeStaff(void): void
        + updateStaff(void): void
    }
    class Payment{
        - user_id: int
        - cart_id: int
        - total_price: float
        + createPayment(void): void
    }
    class Cart{
        - cart_id: int
        - food_id: int
        - user_id: int
        + addToCart(int): void
        + removeFromCart(int): void
        + updateCart(void): void
        + purchaseCart(void): void
    }
    class Food{
        - food_id: int
        - name: string
        - price: float
        - image: string
        - type: string
        + createFood(): void
        + removeFood(): void
    }
    class Menu{
        - number_of_foods: int
        + addToMenu(int): void
        + updateMenu(void): void
        + removeFromMenu(int): void
    }
```