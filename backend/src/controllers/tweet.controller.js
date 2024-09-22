const mongoose = require("mongoose")
const { isValidObjectId } = require("mongoose")
const {Tweet} = require("../models/video_model/tweet.models.js")
const {User} = require("../models/video_model/user.models.js")
const {ApiError} = require("../utils/ApiError.js")
const {ApiResponse} = require("../utils/ApiResponse.js")
const {asyncHandler} = require("../utils/asyncHandler.js")

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    const { content } = req.body

    if(!content){
        throw new ApiError(400, "Tweet content is required")
    }

    const newTweet = new Tweet(
        {
            content,
            owner: req.user?._id
        }
    );

    try {
        await newTweet.save();
        res.status(200).json(
            new ApiResponse(200, newTweet, "Tweet is created successfully")
        )
    } catch (error) {
        throw new ApiError(500, "Something went wrong!")
    }
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets

    try {
        const tweets = await Tweet.find({
            owner: req.user?._id
        })

        return res.status(200).json(
            new ApiResponse(200, tweets, "Tweets fetched succesfully")
        )
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching the tweets")
    }
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet

    const tweetId = req.params
    const { content } = req.body

    if(!content){
        throw new ApiError(400, "Content is required")
    }

    const tweet = await Tweet.findByIdAndUpdate(tweetId,
        {
            $set: {
                content: content
            }
        },
        {
            new: true
        }
    )

    return res.status(200).json(
        new ApiResponse(200, tweet, "Tweet updated successfully")
    )
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet

    const tweetId = req.params 

    try {
        await Tweet.findByIdAndRemove(tweetId)

        return res.status(200).json(
            new ApiResponse(200,{}, "Tweet deleted successfully")
        )
    } catch (error) {
        throw new ApiError(500, "Something went wrong")
    }
})

module.exports = {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}