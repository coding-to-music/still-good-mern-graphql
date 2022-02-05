const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('Item');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
   
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    removeItem: async(parent, {_id}, context)=>{
      if(context.user) {
        const user = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$pull:{saveItems:{_id}}},
          {new: true}
        )
        return user 
      }
      throw new AuthenticationError('Incorrect credentials');
    }
  }
};

module.exports = resolvers;

// QUERIES
// me returns User type
// MUTATIONS
// login, accepts email, password, returns Auth (JWT)
// addUser, accepts email, password, returns Auth
// saveItem, accepts array of categories (strings), storage location (string), addedDate (date), experiationDate (date), name (string), quantity (int)
// removeItem, accepts itemId (verifies it belongs to user)
// TYPEDEFS
// type User {
//     _id: ID
//     email: String
//     itemCount: Int
//     savedBooks: [Item]s
//   }
// type Item {
//     categories: [String]
//     storageLocation: String
//     addedDate: Date
//     exeriationDate: Date
//     name: String
//     quantity: Int
// }