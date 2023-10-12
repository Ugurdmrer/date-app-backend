const User = require("../models/user.js");
const client = require("../database/database.js");


// Add User

async function addUser(newUser) {
  try {
    // SQL sorgusu kullanıcı ekleme
    const insertQuery = `
        INSERT INTO users (Name, Surname, Username, Email, Password, ProfileImage, Images, Description, Gender, Admin)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING ID;
      `;

    // Yeni kullanıcı bilgileri
    const {
      Name,
      Surname,
      Username,
      Email,
      Password,
      ProfileImage,
      Images,
      Description,
      Gender,
      Admin,
    } = newUser;
    const values = [
      Name,
      Surname,
      Username,
      Email,
      Password,
      ProfileImage,
      Images,
      Description,
      Gender,
      Admin,
    ];

    // Kullanıcıyı ekleyin ve eklenen kullanıcının ID'sini alın
    const result = await client.query(insertQuery, values);

    // Eklenen kullanıcının ID'si
    const newUserId = result.rows[0].ID;

    console.log(`Yeni kullanıcı ekledi. ID: ${newUserId} Username: ${Username}`);
  } catch (error) {
    console.error("Kullanıcı eklenirken hata oluştu:", error);
  }
}

module.exports = addUser;
