// https://github.com/Automattic/mongoose
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const AnswerSchema = new Schema({
        avatarUrl: { type: String  },
        city: { type: String  },
        country: { type: String  },
        gender: { type: Number  },
        language: { type: String  },
        nickName: { type: String  },
        province: { type: String  },
        answer: { type: Object  },
    });
  
    return mongoose.model('Answer', AnswerSchema);
  }