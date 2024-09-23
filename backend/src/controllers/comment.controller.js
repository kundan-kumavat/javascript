const mongoose = require('mongoose')
const { asyncHandler } = require('../utils/asyncHandler.js')
const { ApiError } = require('../utils/ApiError.js')
const { ApiResponse } = require('../utils/ApiResponse.js')
const { Comment } = require('../models/video_model/comment.models.js')

const getVideoComments = asyncHandler(async (req, res) => {

    const {videoId} = req.params

    const {page=1, limit= 10} = req.query

    if(!videoId){
        throw new ApiError(400, "Video Id is required")
    }

    const comments = await Comment.find({
        video: videoId
    })

    if(!comments?.length){
        throw new ApiError(404, "No comments")
    }

    return res.status(200).json(
        new ApiResponse(200, comments, "Comments fetched succesfully")
    )
})

const addComment = asyncHandler(async (req, res) => {

    const {content} = req.body
    const {videoId} = req.params

    if(!content){
        throw new ApiError(400, "Comment content is missing")
    }

    const comment = await Comment.create({
        content: content,
        video: videoId,
        owner: req.user?._id
    })

    const createdComment = await Comment.findById(comment?._id);

    if(!createdComment){
        throw new ApiError(500, "something went wrong while adding the comment")
    }

    return res.status(200).json(
        new ApiError(200, createdComment, "New comment added successfully")
    )
    
})

const updateComment = asyncHandler(async (req, res) => {
    
    const {commentId, videoId} = req.params

    const {content} = req.body

    if(!content){
        throw new ApiError(400, "comment content is required")
    }

    const comment = await Comment.findByIdAndUpdate(
        commentId,
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
        new ApiResponse(200, comment, "Comment updated successfully")
    )
})

const deleteComment = asyncHandler(async (req, res) => {

    const {commentId} = req.params

    if(!commentId){
        throw new ApiError(400, "Comment id is required")
    }

    try {
        await Comment.findByIdAndRemove(commentId);

        return res.status(200).json(
            new ApiResponse(200, "Comment deleted succesfully")
        )
    } catch (error) {
        throw new ApiError(500, "Comment not deleted")
    }
    
})

module.exports = {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
}