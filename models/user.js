class User {
  constructor(
    ID,
    Name,
    Surname,
    Username,
    Email,
    Password,
    ProfileImage,
    Images,
    Description,
    Gender,
    isAdmin
  ) {
    this.ID = ID;
    this.Name = Name;
    this.Surname = Surname;
    this.Username = Username;
    this.Email = Email;
    this.Password = Password;
    this.ProfileImage = ProfileImage || null;
    this.Images = Images || null;
    this.Description = Description;
    this.Gender = Gender;
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