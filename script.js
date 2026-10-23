
const foods = [
    {
        name: "Shrimp Fried Rice",
        bio: "ข้าวผัดหอม ๆ ใส่กุ้งสด เสิร์ฟพร้อมแตงกวา",
        price: "60 baht",
        image: "Shrimp Fried Rice.jpe"
    },
    {
        name: "Pad Kra Pao",
        bio: "หมูสับผัดใบกะเพราหอม ๆ รสชาติจัดจ้าน",
        price: "50 baht",
        image: "Pad Kra Pao.jpe"
    },
    {
        name: "Pad Thai with Shrimp",
        bio: "เส้นจันท์ผัดซอสผัดไทย เสิร์ฟพร้อมมะนาว",
        price: "70 baht",
        image: "Pad Thai with Shrimp.jpe"
    },
    {
        name: "Hainanese Chicken Rice",
        bio: "ไก่นุ่ม ๆ กับข้าวมันหอม ๆ และน้ำจิ้มรสเด็ด",
        price: "50 baht",
        image: "Hainanese Chicken Rice.jpe"
    },
    {
        name: "Pork Noodle Soup",
        bio: "น้ำซุปกลมกล่อม พร้อมหมูและลูกชิ้น",
        price: "50 baht",
        image: "Pork Noodle Soup.jpe"
    }
];

const pic = document.getElementById("pic");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const price = document.getElementById("price");
const randomButton = document.querySelector("button");

function randomFood() {
    const index = Math.floor(Math.random() * foods.length);
    const food = foods[index];

    pic.src = food.image;
    pic.alt = food.name;
    name.textContent = food.name;
    bio.textContent = food.bio;
    price.textContent = food.price;
}

randomButton.addEventListener("click", randomFood);

// ไม่ต้องเรียก randomFood() ตรงนี้
// หน้าเว็บจะแสดง Default จาก HTML ก่อน
