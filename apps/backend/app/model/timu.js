// https://github.com/Automattic/mongoose
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const TimuSchema = new Schema({
        block: { type: String  },
        category: { type: String  },
        title: { type: String  },
        mode: { type: String  },
        options: { type: Array  }
    });
  
    return mongoose.model('Timu', TimuSchema);
  }