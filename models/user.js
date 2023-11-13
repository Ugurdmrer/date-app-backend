class User {
  constructor({
    name,
    surname,
    username,
    email,
    password,
    profileImage,
    images,
    description,
    gender,
    isAdmin,
  }) {
    this.Name = name;
    this.Surname = surname;
    this.Username = username;
    this.Email = email;
    this.Password = password;
    this.ProfileImage = profileImage || null;
    this.Images = images || null;
    this.Description = description;
    this.Gender = gender;
    this.isAdmin = isAdmin;
  }
}

class Image {
  constructor(ID, URL, Likes, Comments) {
    this.ID = ID;
    this.URL = URL;
    this.Likes = Likes || []; // Initialize as an empty array if not provided
    this.Comments = Comments || [];
  }
}

class Like {
  constructor(Liker, Liked) {
    this.Liker = Liker;
    this.Liked = Liked;
  }
}

class Comment {
  constructor(ID, Text, Sender, Date, Replies) {
    this.ID = ID;
    this.Text = Text;
    this.Sender = Sender;
    this.Date = Date;
    this.Replies = Replies || [];
  }
}

class Reply {
  constructor(ID, Sender, Text, Date) {
    this.ID = ID;
    this.Sender = Sender;
    this.Text = Text;
    this.Date = Date;
  }
}

class Message {
  constructor(Text, Sender, Date) {
    this.Text = Text;
    this.Sender = Sender;
    this.Date = Date;
  }
}



module.exports = User, Image, Like, Comment, Reply, Message;