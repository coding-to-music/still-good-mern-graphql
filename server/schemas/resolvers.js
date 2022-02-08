const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');
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
      debugger;
      if (context.user) {
        if (!input._id) {
          throw new ApolloError('Need an ID to update an item');
        }
        const {_id, ...inputExceptId} = input;
        const item = await Item.findByIdAndDelete({_id});
        if (!item) {
          throw new ApolloError('invalid ID');
        }
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedItems: { _id } } },
          { new: true }
        );
        
        const newItem = await Item.create({ ...inputExceptId });
        await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { savedItems: newItem._id } }, { new: true })
        return newItem;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeItem: async (parent, { _id }, context) => {
      if (context.user) {
        const item = await Item.findByIdAndDelete({ _id });
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedItems: { _id } } },
          { new: false }
        );
        if (!item) {
          throw new UserInputError('item does not exist');
        }
        return item;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
