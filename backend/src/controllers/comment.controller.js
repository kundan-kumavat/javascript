const mongoose = require('mongoose')
const { asyncHandler } = require('../utils/asyncHandler.js')
const { ApiError } = require('../utils/ApiError.js')
const { ApiResponse } = require('../utils/ApiResponse.js')
const { Comment } = require('../models/video_model/comment.models.js')

const getVideoComments = asyncHandler(async (req, res) => {

    const {videoId} = req.params

    const {page=1, limit= 10} = req.query
})

const addComment = asyncHandler(async (req, res) => {

})

const updateComment = asyncHandler(async (req, res) => {

})

const deleteComment = asyncHandler(async (req, res) => {

})

module.exports = {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
}