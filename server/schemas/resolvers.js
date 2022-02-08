const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Query logged in user's data
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password').populate('savedItems');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    // Add new user app
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // Log existing user in to app
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

    // Save item to user's savedItems
    saveItem: async (parent, { input }, context) => {
      if (context.user) {
        const item = await Item.create({ ...input });
        await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { savedItems: item._id } }, { new: true });

        return item;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    // Update item in user's savedItems
    updateItem: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedItems: input } },
          { new: false }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    // Remove item from user's savedItems
    removeItem: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedItems: { _id } } },
          { new: true }
        );
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
